const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // contoh menambahkan env variable programmatically
      config.env.USERNAME = config.env.USERNAME || process.env.CYPRESS_USERNAME || "default_user";
      config.env.PASSWORD = config.env.PASSWORD || process.env.CYPRESS_PASSWORD || "default_pass";

      return config;
    },
  },
});