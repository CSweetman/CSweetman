/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "csweet-dark-font": "#040316",
                "csweet-light-font": "#eae9fc",
            },
            gridTemplateColumns: {
                auto: "repeat(auto-fill, minmax(400px, 1fr))",
            },
        },
    },
    plugins: [],
}
