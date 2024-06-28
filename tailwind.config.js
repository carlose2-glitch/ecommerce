/** @type {import('tailwindcss').Config} */

module.exports = {

  content: ['./views/**/*.{html,js}'],

  theme: {

    extend: {
      fontFamily:{
        'principal':['"Roboto"', 'sans-serif']
      },
      animation: {
        hamburguer: 'bounce 1.5s backwards',
        bouncetwo:'bouncetwo 1s backwards',
        spinn: 'spinn 1s linear infinite',
        menuh: 'menuh 0.2s ease 0s 1 normal forwards',
        slider:'slider 20s infinite normal linear',
      },
      keyframes:{
        bouncetwo:{
          '0%':{ transform:'translateY(-20%)' },
          '100%':{ transform:'translateY(0%)' }
        },
        spinn:{
          '0%':{ transform: 'rotate(0deg)' },
          '100%':{ transform: 'rotate(360deg)' }
        },
        menuh:{
          '0%':{ transform: 'scale(0.5)' },
          '100%':{ transform: 'scale(1)' }
        },
        slider:{
          '0%':{ transform: 'translateX(0%)' },
          '16%':{ transform: 'translateX(0%)' },

          '20%':{ transform: 'translateX(-20%)' },
          '36%':{ transform: 'translateX(-20%)' },

          '40%':{ transform: 'translateX(-40%)' },
          '56%':{ transform: 'translateX(-40%)' },

          '60%':{ transform: 'translateX(-60%)' },
          '76%':{ transform: 'translateX(-60%)' },

          '80%':{ transform: 'translateX(-80%)' },
          '100%':{ transform: 'translateX(-80%)' },

        }
      },
    },


  },

  plugins: [
    require('tailwind-scrollbar')
  ],

};



