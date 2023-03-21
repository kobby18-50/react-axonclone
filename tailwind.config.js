/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens : {
        sm: '270px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        black: "#212b36",
        dark: "#090E34",
        "dark-700": "#090e34b3",
        primary: "#005488",
        secondary: "#F8A527",
        neutral: "#5B5B5B",
        "body-color": "#637381",
        warning: "#FBBF24",
      },
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 60px 120px -20px #EBEFFD",
      },
      container: {
        center: true,
        padding: "16px",
      },

     
      
    },
  },
  plugins: [
    require('daisyui')
  ],
}
