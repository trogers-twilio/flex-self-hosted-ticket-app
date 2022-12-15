import React from 'react';
import { Actions } from '@twilio/flex-ui';
import Button from '@material-ui/core/Button';
import Phone from '@material-ui/icons/Phone';
import PhonePaused from '@material-ui/icons/PhonePaused';

const ToggleHoldButton = (props) => {
  const { isCallOnHold, selectedTask } = props;

  const handleClick = () => {
    isCallOnHold 
      ? Actions.invokeAction('UnholdCall', { task: selectedTask })
      : Actions.invokeAction('HoldCall', { task: selectedTask })
  }

  return (
    <Button
      variant='contained'
      color='secondary'
      startIcon={isCallOnHold ? <PhonePaused /> : <Phone />}
      onClick={handleClick}
      className='call-control-button'
    >
      {isCallOnHold ? 'Unhold' : 'Hold'}
    </Button>
  )
}

export default ToggleHoldButton;
