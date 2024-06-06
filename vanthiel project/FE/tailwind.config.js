/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,jsx,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B6CB0",
        secondary: "#ED64A6",
        accent: "#FDBA74",
        dark: "#1A202C",
        black: "#000",
        white: "#fff",
        gray: {
          100: "#F7FAFC",
          200: "#EDF2F7",
          300: "#E2E8F0",
          400: "#CBD5E0",
          500: "#A0AEC0",
          600: "#718096",
          700: "#4A5568",
          800: "#2D3748",
          900: "#1A202C",
        },
      },
      fontFamily: {
        sans: ["Inter","Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        none: "none",
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1550px',
      },
      // Các tùy chọn tùy chỉnh khác
    },
  },
  plugins: [],
};
