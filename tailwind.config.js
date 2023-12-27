/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navBg: "#3F4448",
        darkText: "#3f4448",
        globalTextColor: "#9EA0A6",
        lightGold: "#CABE9F",
        gold: "#b8a87f",
        lightText: "#9ea0a6",
        serviceBg: "#F8F8F8",
      },
      backgroundImage: {
        slide1: "url(/src/assets/image/slide-home1-1.jpg)",
        apartBg: "url(/src/assets/image/bg-breadcrumb.jpg)",
        bg: "url(/src/assets/image/bg.jpg)",
      },
    },
  },
  plugins: [],
};
