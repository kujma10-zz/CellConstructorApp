module.exports = {
  "extends": "google",
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins" : [
    "react"
  ],
  "rules": {
    "max-len" : "off",
    "one-var" : "off",
    "require-jsdoc" : "off",
    "camelcase": [
      "error",
      {properties: "never"}
    ],
    "no-else-return": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-console": "error",
    "no-alert": "error",
    "no-debugger": "error",
  }
};
