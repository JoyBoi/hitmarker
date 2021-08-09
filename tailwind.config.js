module.exports = {
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            herobg: "#19191B",
            primary: "#FF6810",
            textdark: "#2E2E46",
            textlight: "#FFFFFF",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};