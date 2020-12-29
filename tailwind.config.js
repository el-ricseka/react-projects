module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "2/3": "66.666667%",
        "1/2": "50%",
        "1/3": "30%",
      },

      height: {
        400: "400px",
        "h-57": "10%",
      },

      width: {
        57: "10%",
      },

      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
