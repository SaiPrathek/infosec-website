// Zoho CRM integration client
// Demo mode: when env vars are empty, logs to console and returns success

let cachedToken = null;
let tokenExpiry = 0;

const DEMO_MODE = !process.env.ZOHO_CLIENT_ID || !process.env.ZOHO_REFRESH_TOKEN;

async function getAccessToken() {
  if (DEMO_MODE) return "demo-token";

  if (cachedToken && Date.now() < tokenExpiry) {
    return cachedToken;
  }

  const res = await fetch("https://accounts.zoho.com/oauth/v2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      refresh_token: process.env.ZOHO_REFRESH_TOKEN,
      client_id: process.env.ZOHO_CLIENT_ID,
      client_secret: process.env.ZOHO_CLIENT_SECRET,
      grant_type: "refresh_token",
    }),
  });

  const data = await res.json();
  if (!data.access_token) {
    throw new Error(`Zoho token refresh failed: ${JSON.stringify(data)}`);
  }

  cachedToken = data.access_token;
  tokenExpiry = Date.now() + (data.expires_in - 60) * 1000; // refresh 60s early
  return cachedToken;
}

function splitName(fullName) {
  const parts = (fullName || "").trim().split(/\s+/);
  const firstName = parts[0] || "";
  const lastName = parts.slice(1).join(" ") || firstName;
  return { firstName, lastName };
}

export async function createLead({ name, company, email, role, source, description }) {
  const { firstName, lastName } = splitName(name);
  const leadData = {
    First_Name: firstName,
    Last_Name: lastName,
    Company: company || "Unknown",
    Email: email,
    Designation: role || "",
    Lead_Source: source || "Website",
    Description: description || "",
  };

  if (DEMO_MODE) {
    console.log("[Zoho Demo] Would create lead:", JSON.stringify(leadData, null, 2));
    return { id: "demo-lead-" + Date.now(), demo: true };
  }

  const token = await getAccessToken();
  const apiDomain = process.env.ZOHO_API_DOMAIN || "https://www.zohoapis.com";

  const res = await fetch(`${apiDomain}/crm/v5/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: [leadData] }),
  });

  const result = await res.json();
  if (result.data?.[0]?.code === "SUCCESS") {
    return { id: result.data[0].details.id };
  }
  throw new Error(`Zoho create lead failed: ${JSON.stringify(result)}`);
}

export async function addNote(leadId, { title, content }) {
  if (DEMO_MODE) {
    console.log(`[Zoho Demo] Would add note to lead ${leadId}:`, title);
    return { demo: true };
  }

  const token = await getAccessToken();
  const apiDomain = process.env.ZOHO_API_DOMAIN || "https://www.zohoapis.com";

  const res = await fetch(`${apiDomain}/crm/v5/Leads/${leadId}/Notes`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [{ Note_Title: title, Note_Content: content }],
    }),
  });

  return res.json();
}

// ---------------------------------------------------------------------------
// Zoho People — Resource record creation
// Requires scope: ZohoPeople.forms.ALL
// New env vars: ZOHO_PEOPLE_DOMAIN (default https://people.zoho.com)
// ---------------------------------------------------------------------------

export async function createPeopleRecord({
  firstName,
  lastName,
  email,
  department,
  designation,
  employeeType,
  location,
  startDate,
  clientEngagement,
}) {
  const recordData = {
    FirstName: firstName || "",
    LastName: lastName || "",
    EmailID: email || "",
    Department: department || "Security Consultancy",
    Designation: designation || "",
    EmployeeType: employeeType || "Consultant",
    OfficeLocation: location || "UK",
    DateOfJoining: startDate || new Date().toISOString().split("T")[0],
    Tags: clientEngagement ? `client:${clientEngagement}` : "",
  };

  if (DEMO_MODE) {
    console.log("[Zoho People Demo] Would create resource record:", JSON.stringify(recordData, null, 2));
    return { id: "demo-people-" + Date.now(), demo: true };
  }

  const token = await getAccessToken();
  const peopleDomain = process.env.ZOHO_PEOPLE_DOMAIN || "https://people.zoho.com";

  const res = await fetch(`${peopleDomain}/people/api/forms/employee/insertRecord`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ inputData: JSON.stringify(recordData) }),
  });

  const result = await res.json();
  if (result.response?.result?.[0]?.pkId) {
    return { id: result.response.result[0].pkId };
  }
  throw new Error(`Zoho People create record failed: ${JSON.stringify(result)}`);
}

// ---------------------------------------------------------------------------
// Zoho Projects — Task creation
// Requires scope: ZohoProjects.tasks.CREATE
// New env vars: ZOHO_PROJECTS_PORTAL_ID, ZOHO_PROJECTS_DEFAULT_PROJECT_ID,
//               ZOHO_PROJECTS_DOMAIN (default https://projectsapi.zoho.com)
// ---------------------------------------------------------------------------

export async function createProjectTask({
  projectId,
  taskListId,
  taskName,
  assigneeEmail,
  dueDate,
  priority,
  description,
  customFields,
}) {
  const resolvedProjectId = projectId || process.env.ZOHO_PROJECTS_DEFAULT_PROJECT_ID;
  const portalId = process.env.ZOHO_PROJECTS_PORTAL_ID;

  const taskData = {
    name: taskName,
    person_responsible: assigneeEmail || "",
    due_date: dueDate || "",
    priority: priority || "medium",
    description: description || "",
    ...(customFields || {}),
  };

  if (DEMO_MODE) {
    console.log(
      `[Zoho Projects Demo] Would create task in project ${resolvedProjectId}:`,
      JSON.stringify(taskData, null, 2)
    );
    return { id: "demo-task-" + Date.now(), demo: true };
  }

  if (!portalId || !resolvedProjectId) {
    throw new Error("Zoho Projects: ZOHO_PROJECTS_PORTAL_ID and ZOHO_PROJECTS_DEFAULT_PROJECT_ID are required");
  }

  const token = await getAccessToken();
  const projectsDomain = process.env.ZOHO_PROJECTS_DOMAIN || "https://projectsapi.zoho.com";

  const taskListPath = taskListId
    ? `/restapi/portal/${portalId}/projects/${resolvedProjectId}/tasklists/${taskListId}/tasks/`
    : `/restapi/portal/${portalId}/projects/${resolvedProjectId}/tasks/`;

  const res = await fetch(`${projectsDomain}${taskListPath}`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(taskData),
  });

  const result = await res.json();
  if (result.tasks?.[0]?.id_string) {
    return { id: result.tasks[0].id_string };
  }
  throw new Error(`Zoho Projects create task failed: ${JSON.stringify(result)}`);
}
