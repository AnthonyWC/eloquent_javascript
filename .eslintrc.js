module.exports = {
  "extends": "airbnb-base",
   "parserOptions": {
     "ecmaVersion": 6,
     "sourceType": "script"
   },
  "rules": {
    'no-console': 'off',
    "import/prefer-default-export": "off",
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }]
  },
  "overrides": [{
    "files": ["fizzbuzz.js", "test/**.js"],
    "parserOptions": {
      "sourceType": "module"
    }
  }]
};