import { Actions } from '@twilio/flex-ui';

export const selectActiveTask = (tasks) => {
  for (const task of tasks.values()) {
    Actions.invokeAction('SelectTask', { task });
  }
};

export const placeOutboundCall = (destination, taskAttributes) => {
  Actions.invokeAction('StartOutboundCall', { destination, taskAttributes });
};
