module.exports = {
  important: false,
  separator: ':',
  theme: {
    extend: {
      colors: {
        black: {
          '700' : 'rgb(26, 26, 26)',
          '600': '#20232a',
        },
        hacker: '#1ec503',
        blue: {
          '100': 'rgba(187,239,253,0.3)',
          '150': '#bbeffd',
          '500': '#61dafb', 
        },
        gray: {
          '100': '#f7f7f7',
          '400': 'rgb(247, 247, 247)',
          '500': '#ececec',
          '600': 'rgb(130, 130, 130)',
          '700': '#20232a'
        }
      }
    },
    screens: {
      'sm': '320px',
      'md': '640px',
      'lg': '720px'
    }
  },
  variants: {
    backgroundColor: ['visited', 'hover'],
    margin: ['first', 'last']
  },
  plugins: [],
}
