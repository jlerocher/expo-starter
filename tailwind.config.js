/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                sunset: "#f65b4E",
                twilight: "#29319F",
                morning: "#FFBA7C",
                fog: "#FFDEEF",
                eclipse: "#573353",
            },
            fontFamily: {
                mregular: ["Manrope-Regular", "sans-serif"],
                mbold: ["Manrope-Bold", "sans-serif"],
            },
        },
    },
    plugins: [],
};
