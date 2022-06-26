/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#FA8907",
                secondary: "#174674",
                nav: "#ffebc1",
                hover: "#ff6b01",
            },
        },
    },
    plugins: [],
};