const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://localhost:8080/',
    "defaultCommandTimeout": 10000,
    setupNodeEvents(on, config) {
    },
  },
    env:{
      requestMode: true,   
      allure: true,
      allureResultsPath: 'cypress/reports/allure-results'
    }
});
