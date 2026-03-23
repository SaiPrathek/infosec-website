/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
        },
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
        navy: {
          900: "#0a0f1e",
          800: "#0d1426",
          700: "#111827",
          600: "#1a2236",
          500: "#1e2a40",
        },
      },
      backgroundImage: {
        "k2k-gradient": "linear-gradient(135deg, #00a46e 0%, #00b5df 100%)",
        "k2k-gradient-hover": "linear-gradient(135deg, #00b87e 0%, #00c9f5 100%)",
        "dark-mesh":
          "radial-gradient(ellipse at 20% 50%, rgba(0,164,110,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0,181,223,0.08) 0%, transparent 50%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
        "count-up": "countUp 1s ease-out",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        slideUp: { "0%": { opacity: 0, transform: "translateY(20px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
      },
    },
  },
  plugins: [],
};

export default config;
