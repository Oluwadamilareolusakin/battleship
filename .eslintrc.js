module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
      "parserOptions": { "ecmaVersion": 6 },
      "extends": "airbnb-base",
        rules: {
        'no-shadow': 0,
        'no-param-reassign': 0,
        'eol-last': 0,
      }
    
};