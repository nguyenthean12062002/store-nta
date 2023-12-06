/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundColor: {
        main: "#FEBD68",
      },
      colors: {
        main: "#FEBD68",
      },
      padding: {
        full: "24px",
        half: "12px",
      },
      margin: {
        full: "24px",
        half: "12px",
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
