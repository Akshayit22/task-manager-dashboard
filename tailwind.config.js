/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        title: ["28px", { lineHeight: "1.2" }], // Title/Header 1
        head2: ["24px", { lineHeight: "1.2" }], // Header 2
        head3: ["16px", { lineHeight: "1.2" }], // Header 3
        body: ["14px", { lineHeight: "1.5" }], // Body
        small: ["10px", { lineHeight: "1.4" }], // Small
        button: ["12px", { lineHeight: "1.4" }], // Button Text
      },
      letterSpacing: {
        tight: "0.02em", // 2% letter spacing
      },
      fontWeight: {
        regular: "400",
        semibold: "600",
      },
      colors: {
        // Primary Brand
        "primary-brand": {
          DEFAULT: "rgba(73, 204, 249, 1)", // 100% opacity
          75: "rgba(73, 204, 249, 0.75)", // 75% opacity
          50: "rgba(73, 204, 249, 0.5)", // 50% opacity
          25: "rgba(73, 204, 249, 0.25)", // 25% opacity
        },

        // Secondary Brand
        "secondary-brand": {
          DEFAULT: "rgba(120, 107, 238, 1)", // 100% opacity
          75: "rgba(120, 107, 238, 0.75)", // 75% opacity
          50: "rgba(120, 107, 238, 0.5)", // 50% opacity
          25: "rgba(120, 107, 238, 0.25)", // 25% opacity
        },

        // Tertiary Brand
        "tertiary-brand": {
          DEFAULT: "rgba(240, 125, 175, 1)", // 100% opacity
          75: "rgba(240, 125, 175, 0.75)", // 75% opacity
          50: "rgba(240, 125, 175, 0.5)", // 50% opacity
          25: "rgba(240, 125, 175, 0.25)", // 25% opacity
        },

        // Accent 1
        accent1: {
          DEFAULT: "rgba(0, 184, 132, 1)", // 100% opacity
          75: "rgba(0, 184, 132, 0.75)", // 75% opacity
          50: "rgba(0, 184, 132, 0.5)", // 50% opacity
          25: "rgba(0, 184, 132, 0.25)", // 25% opacity
        },

        // Accent 2
        accent2: {
          DEFAULT: "rgba(255, 200, 0, 1)", // 100% opacity
          75: "rgba(255, 200, 0, 0.75)", // 75% opacity
          50: "rgba(255, 200, 0, 0.5)", // 50% opacity
          25: "rgba(255, 200, 0, 0.25)", // 25% opacity
        },

        // Text
        "tx-main": {
          DEFAULT: "rgba(86, 85, 92, 1)", // 100% opacity
          75: "rgba(86, 85, 92, 0.75)", // 75% opacity
          50: "rgba(86, 85, 92, 0.5)", // 50% opacity
          25: "rgba(86, 85, 92, 0.25)", // 25% opacity
        },

        // Sub Text
        "tx-sub": {
          DEFAULT: "rgba(136, 135, 147, 1)", // 100% opacity
          75: "rgba(136, 135, 147, 0.75)", // 75% opacity
          50: "rgba(136, 135, 147, 0.5)", // 50% opacity
          25: "rgba(136, 135, 147, 0.25)", // 25% opacity
        },

        // Background
        background: {
          DEFAULT: "rgba(251, 251, 251, 1)", // 100% opacity
          75: "rgba(251, 251, 251, 0.75)", // 75% opacity
          50: "rgba(251, 251, 251, 0.5)", // 50% opacity
          25: "rgba(251, 251, 251, 0.25)", // 25% opacity
        },

        // Lines
        lines: {
          DEFAULT: "rgba(230, 228, 240, 1)", // 100% opacity
          75: "rgba(230, 228, 240, 0.75)", // 75% opacity
          50: "rgba(230, 228, 240, 0.5)", // 50% opacity
          25: "rgba(230, 228, 240, 0.25)", // 25% opacity
        },
      },
      backgroundImage: {
        "navbar-gradient":
          "linear-gradient(to right, rgba(67, 24, 255, 0.25), #FEC6DF)", // bg-gradient-to-r from-[#4318FF40] to-[#FEC6DF]
        "upgrade-card-gradient": "linear-gradient(to bottom, #FD71AF, #FEC6DF)", // bg-gradient-to-b from-[#FD71AF] to-[#FEC6DF]
      },
    },
  },
  plugins: [],
};
