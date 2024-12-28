/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "csweet-dark-font": "#31234a",
                "csweet-light-font": "#eae9fc",
            },
            gridTemplateColumns: {
                auto: "repeat(auto-fill, minmax(400px, 1fr))",
                card: "repeat(auto-fill, minmax(400px, 1fr))",
            },
            screens: {
                xs: "310px",
            },
        },
    },
    plugins: [],
}
