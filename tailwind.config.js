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
      'sm': '340px',
      'md': '640px',
      'lg': '720px',
    },
    typography: {
      default: {
        css: {
          a: {
            color: 'inherit',
            '&:hover': {
              color: '#20232a'
            }
          },
          pre: {
            'background-color': '#20232a',
            color: '#1ec503',
            code: {
              a: {
                color: '#1ec503',
                'text-decoration': 'underline'
              }
            },
          },
          p: {
            a: {
              'background-color': 'rgba(187,239,253,0.3)',
              'border-bottom': '1px',
              'border-color': '#20232a',
              '&:hover': {
                'background-color': '#bbeffd',
                color: '#20232a'
              },
              '&:visited': {
                'background-color': '#ffffff'
              }
            }
          }
        }
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'visited', 'hover'],
    margin: ['first', 'last', 'responsive'],
    overflow: ['responsive'],
    textColor: ['responsive', 'hover',],
    textDecoration: ['responsive', 'hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  purge: [
    './src/**/*.tsx',
    './src/**/*.ts'
  ],
}
