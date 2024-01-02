/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./components.html",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    colors: {
      'primary': '#4335DE',
      'secondary': '#FFC247',
      'darkblue': '#02033B',
      'hoverblue': '#3528BE',
      'skyblue': '#EFF5FD',
      'white': '#ffffff',

    },
    backgroundImage: {
      'hero-banner1': "url('/src/images/hero-banner.png')",
      'triangleimg': "url('/src/images/hero-triangle-image.png')",
      'circleimg' : "url('/src/images/circular image.png)",
      'letterlogo':"url("    },
    // extends{

    // },
    // spacing: {
    //   'lg': '630px',
    // }
    extend: {
      spacing :{
        '97': '400px',
        '98':'450px',
        '99': '330px',
        '100': '900px',
        '101': '560px',
        '102': '840px',
        '111': '700px',
      },
      backgroundImage :{
        'gradient-to-t': 'linear-gradient(to top, #E9F0FB, #F4F9FF, #E9F0FB)',
        'gradient-yellow': 'linear-gradient(to top, #FDB235, #F7C95F)',
      },
      borderRadius:{
        'lg': '48px',
      },
      dropShadow:{
        '7xl': '12px 12px 20px 0px rgba(0, 0, 0, 0.10)',
        '3xl': '0px 20px 20px 20px rgba(0, 0, 0, 0.25)',
      }
    }

  },
  plugins: [],
}

