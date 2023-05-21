const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const { initPlugin } = require("cypress-plugin-snapshots/plugin");

const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}
module.exports = defineConfig({
  projectId: "xqw19k",

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
      //jakby nie dzialalo to wersja "return getConfigurationByFile(file)" a kolejne 2 linie wylaczyc
      getConfigurationByFile(file)

      initPlugin(on, config);
      return config;

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
    },
    "retries": {
      "runMode": 2,
      "openMode": 0
    },
    "excludeSpecPattern": [
      "**/__snapshots__/*",
      "**/__image_snapshots__/*"
    ],
    "cypress-plugin-snapshots": {
      "autoCleanUp": false,            // Automatically remove snapshots that are not used by test
      "autopassNewSnapshots": true,    // Automatically save & pass new/non-existing snapshots
      "diffLines": 3,                  // How many lines to include in the diff modal
      "excludeFields": [],             // Array of fieldnames that should be excluded from snapshot
      "ignoreExtraArrayItems": false,  // Ignore if there are extra array items in result
      "ignoreExtraFields": false,      // Ignore extra fields that are not in `snapshot`
      "normalizeJson": true,           // Alphabetically sort keys in JSON
      "prettier": true,                // Enable `prettier` for formatting HTML before comparison
      "imageConfig": {
        "createDiffImage": true,       // Should a "diff image" be created, can be disabled for performance
        "resizeDevicePixelRatio": true,// Resize image to base resolution when Cypress is running on high DPI screen, `cypress run` always runs on base resolution
        "threshold": 0.01,             // Amount in pixels or percentage before snapshot image is invalid
        "thresholdType": "percent"     // Can be either "pixels" or "percent"
      }
    }
  },
});
