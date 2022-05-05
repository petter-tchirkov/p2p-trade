const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        violet: "#5156A6",
        blue: "#2F54EB",
        light: "#CCCFF9",
        green: "#52C41A",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-focus"],
    },
  },
};
