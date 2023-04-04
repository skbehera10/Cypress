const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e:{
  viewportHeight: 660,
  viewportWidth: 1000,
  video: false,
  pageLoadTimeout:200000,
  specPattern: 'cypress/e2e/Tests/Story*',
  reporter: "mochawesome",
  reporterOptions: {
      charts: true,
      reportDir: "cypress/report",
      overwrite: false,
      html: false,
      json: true,
      timestamp: "ddmmyyyy_HHMMss",
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: "https://www.xe.com",
  },
});
