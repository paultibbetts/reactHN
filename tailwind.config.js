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
          '200': 'rgb(247, 247, 247)',
          '300': 'rgb(190, 190, 190)',
          '400': 'rgb(130, 130, 130)',
          '500': '#6E7991',
          '600': '#282c34',
          '700': '#20232a'
        }
      },
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' }
      }
    },
    screens: {
      'sm': '320px',
      'md': '640px',
      'lg': '720px',
    }
  },
  variants: {
    backgroundColor: ['responsive', 'visited', 'hover'],
    margin: ['first', 'last', 'responsive'],
    overflow: ['responsive'],
    textColor: ['responsive', 'hover',],
    textDecoration: ['responsive', 'hover'],
  },
  plugins: [],
  purge: [
    './src/**/*.tsx',
    './src/**/*.ts'
  ],
}
