const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kn3ie6',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video:true
  },
});
