import React from 'react';
import ReactDOM from 'react-dom';
// import "regenerator-runtime/runtime";
import * as Flex from '@twilio/flex-ui';
import App from './App';
// import registerServiceWorker from "./registerServiceWorker";
import './styles.css'

const mountNode = document.getElementById("root");

// window.onload = () => {
//   const predefinedConfig = window.appConfig || {};

//   const configuration = {
//     ...predefinedConfig,
//   };

//   Flex
//     .progress(mountNode)
//     .provideLoginInfo(configuration, mountNode)
//     .then(() => Flex.Manager.create(configuration))
//     .then(manager => renderApp(manager))
//     .catch(error => handleError(error));
// };

function renderApp(manager) {
  ReactDOM.render(
    <App />,
    mountNode
  );
}

function handleError(error) {
  Flex.errorPage(error, mountNode);
  console.error("Failed to initialize Flex", error);
}

renderApp();

// registerServiceWorker();
