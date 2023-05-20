const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}
module.exports = defineConfig({


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),

      });
//ustawienia dla roznych srodowisk
      const file = config.env.configFile || 'development'
      return getConfigurationByFile(file)

    },
    
    "baseUrl": "http://automationpractice.pl",
    "testIsolation": false,
    "includeShadowDom": true,
    "chromeWebSecurity": true,
    //"viewportHeight": 1080,
    //"viewportWidth": 1920
    "video": false,
      //config do reporterow
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    }
  },
});
