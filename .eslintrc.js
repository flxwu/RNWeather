module.exports = {
    "extends": "airbnb",
    "plugins": [
      "react",
      "react-native"
    ],
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
    },
    "env": {
      "react-native/react-native": true,
      "es6": true
    },
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/prefer-stateless-function": [0, { "ignorePureComponents": true }]
    }
};