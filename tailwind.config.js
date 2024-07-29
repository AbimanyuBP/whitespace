/** @type {import('tailwindcss').Config} */ 
export default { 
  content: [ 
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ], 
  theme: { 
    extend: {
      backgroundImage:{
        'swirly-pattern': "url('assets/svgs/swirly.svg')",
      },
      backgroundColor:{
        'yale-blue': "#043873",
      },
    }, 
  }, 
  plugins: [], 
} 
