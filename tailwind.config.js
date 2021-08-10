module.exports = {
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            zIndex: {

                '-10': '-10',
            },
            // eslint-disable-line
            backgroundImage: () => ({
                // eslint-disable-line
                'wpt': "url('/src/assets/WPT2.png')",
            }),
        },
        colors: {
            herobg: "#19191B",
            primary: "#FF6810",
            textdark: "#2E2E46",
            textlight: "#FFFFFF",
            bggradientstart: "#FFEED9",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};