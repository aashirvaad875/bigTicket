module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Roboto,Helvetica,Arial,sans-serif'],
    },
    rotate: {
      135: '135deg',
    },

    extend: {
      width: {
        '5/7': '70%',
      },
      // screens: {
      //   'sm': {'min': '414px', 'max': '767px'},
      //   'md': {'min': '768px', 'max': '1023px'},
      //   'lg': {'min': '1024px', 'max': '1279px'},
      //   'xl': {'min': '1280px', 'max': '1535px'},
      //   '2xl': {'min': '1536px'},
      // },
      colors: {
        rt: {
          light: '#aadfe3',
          base: '#15b1b8',
          dark: '#003f67',
        },
      },
      spacing: {
        70: '17.5erm',
        83: '22rem',
      },

      inset: {
        31: '31%',
      },
    },
  },
  variants: {
    extend: {
      tableLayout: ['hover', 'focus'],
    },
  },
  plugins: [],
}
