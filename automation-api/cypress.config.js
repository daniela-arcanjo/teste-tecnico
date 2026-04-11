const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,
  video: true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: true, // 🔥 importante (não sobrescrever)
    html: true,      // vamos gerar depois
    json: true        // 🔥 precisa estar true
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
