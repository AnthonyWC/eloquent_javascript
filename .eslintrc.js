module.exports = {
  "extends": "airbnb-base",
   "parserOptions": {
     "ecmaVersion": 6,
     "sourceType": "script"
   },
  "rules": {
    "arrow-parens": ["error", "always"],
    'no-console': 'off',
    "import/prefer-default-export": "off",
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
    "no-trailing-spaces": ["error", { "skipBlankLines": true }]
  },
  "overrides": [{
    "files": ["fizzbuzz.js", "test/**.js"],
    "parserOptions": {
      "sourceType": "module"
    }
  }]
};
