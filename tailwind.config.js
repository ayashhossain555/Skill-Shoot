/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            'poppins': ['Poppins', 'sans-serif'],
        },
        colors: {
            primary: '#CB8461',
            secondary: '#245D51',
        },
        maxWidth: {
            'custom': '1480px',
        },
        padding: {
            'custom-mobile': '2rem',
        },
        // Heading styles for different screen sizes
        fontSize: {
            'heading-desktop': ['36px', '54px'], // [fontSize, lineHeight]
            'heading-mobile': ['18px', '27px'],
        },
        // Background color with opacity for the input field
        backgroundOpacity: {
            '15': '0.15',
        },
    },
},

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
