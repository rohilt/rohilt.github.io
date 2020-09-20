module.exports = {
  purge: [],
  theme: {
    extend: {
      opacity: {
        '95': '0.95'
      }
    },
    fontFamily: {
        'display': ['Neuton'],
        'body': ['Open Sans'],
        'subtitle': ['Playfair Display']
    },
    backgroundColor: theme => ({
       ...theme('colors'),
       'card-bg': '#fffefe',
    })
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
