/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundColor: {
        main: "#FEBD68",
        bg: "#f5f5f5",
        red: "#EF4444",
      },
      colors: {
        main: "#FEBD68",
        red: "#EF4444",
      },
      padding: {
        full: "24px",
        half: "12px",
      },
      margin: {
        full: "24px",
        half: "12px",
      },
      boxShadow: {
        // "3xl": "0 35px 50px -9px rgba(0, 0, 0, 0.8)",
        "3xl": "0 0 15px rgba(0, 0, 0, 0.5)",
        "4xl": "0 0 25px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
  // tự động watch lại tailwind khi config lại nó
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/App.css",
    // Thêm đường dẫn tới các tệp tin CSS của bạn nếu cần thiết
  ],
};
