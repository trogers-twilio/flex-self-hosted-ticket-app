import * as Flex from '@twilio/flex-ui';

import { history } from '../../../App';

export const registerEventListeners = (manager) => {
  manager.events.addListener('taskReceived', task => {
    if (Flex.TaskHelper.isIncomingCall(task)) {
      Flex.Actions.invokeAction('AcceptTask', { task });
    }

    const ticketNumber = task?.attributes?.ticketNumber;

    if (ticketNumber) {
      history.push(`/edit/${ticketNumber}`);
    }
  });

  Flex.Actions.addListener('afterAcceptTask', payload => {
    console.log('afterAcceptTask: Selecting task');
    const { task } = payload;

    if (Flex.TaskHelper.isIncomingCall(task)) {
      Flex.Actions.invokeAction('SelectTask', { task });
    }
  });

  Flex.Actions.addListener('afterCompleteTask', payload => {
    history.push('/');
  });
}