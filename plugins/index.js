/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

	module.exports = (on, config) => {
	allureWriter(on, config);
	on('before:browser:launch', (browser, launchOptions) => {

    if (browser.name === 'chrome') {
      // `args` is an array of all the arguments
      // that will be passed to Chrome when it launchers
      launchOptions.args.push('--disable-background-networking')
      launchOptions.args.push('--enable-features=NetworkService,NetworkServiceInProcess')
      launchOptions.args.push('--disable-background-timer-throttling')
      launchOptions.args.push('--disable-backgrounding-occluded-windows')
      launchOptions.args.push('--disable-breakpad')
      launchOptions.args.push('--disable-client-side-phishing-detection')
      launchOptions.args.push('--disable-default-apps')
      launchOptions.args.push('--disable-dev-shm-usage')
      launchOptions.args.push('--disable-extensions')
      launchOptions.args.push('--disable-features=site-per-process,TranslateUI')
      launchOptions.args.push('--disable-hang-monitor')
      launchOptions.args.push('--disable-ipc-flooding-protection')
      launchOptions.args.push('--disable-popup-blocking')
      launchOptions.args.push('--disable-prompt-on-repost')
      launchOptions.args.push('--disable-renderer-backgrounding')
      launchOptions.args.push('--disable-sync')
      launchOptions.args.push('--force-color-profile=srgb')
      launchOptions.args.push('--metrics-recording-only')
      launchOptions.args.push('--no-first-run')
      launchOptions.args.push('--safebrowsing-disable-auto-update')
      launchOptions.args.push('--enable-automation')
      launchOptions.args.push('--password-store=basic')
      launchOptions.args.push('--use-mock-keychain')
      launchOptions.args.push('--webview-disable-safebrowsing-support')
      // whatever you return here becomes the new args
      return launchOptions
    }
  })
}
