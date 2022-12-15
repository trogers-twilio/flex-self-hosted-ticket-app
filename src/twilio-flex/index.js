import * as Flex from '@twilio/flex-ui';

import { loadComponentHooks } from './hooks/components'
import { registerEventListeners } from './hooks/events';

const initializeCustomizations = (manager) => {
  loadComponentHooks(manager);
  registerEventListeners(manager);
}

export const initializeTwilioFlex = () => new Promise(resolve => {
  const flexLoadingNode = document.getElementById("flex-loading");

  const predefinedConfig = window.appConfig || {};

  const configuration = {
    ...predefinedConfig,
  };

  Flex
    .provideLoginInfo(configuration, flexLoadingNode)
    .then(() => Flex.Manager.create(configuration))
    .then(manager => {
      initializeCustomizations(manager);
      resolve(manager);
    })
    .catch(error => {
      Flex.errorPage(error, flexLoadingNode);
      console.error("Failed to initialize Flex", error);
    });
});
