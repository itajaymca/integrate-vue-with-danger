module.exports = {
    env: {
        "node": true,
        "commonjs": true,
        "jest": true
    },
    extends: [
      '@vue/typescript',
      // add more generic rulesets here, such as:
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:cypress/recommended'
    ],
    rules: {
      // override/add rules settings here, such as:
      'vue/no-unused-vars': 'error'
    }
  }