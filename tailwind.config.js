const enablePurge = process.env.ENABLE_PURGE || false;

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.ts'],
  theme: {
    extend: {
      spacing: {
        '1/2': '50%',
      },
      height: theme => ({
        //"90": "90vh",
        "95": "95vh",
      }),
      minHeight: theme => ({
        "90": "90vh",
        "95": "95vh",
      }),
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}
