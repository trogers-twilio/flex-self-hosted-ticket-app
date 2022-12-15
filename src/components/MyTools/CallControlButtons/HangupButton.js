import React from 'react';
import { Actions } from '@twilio/flex-ui';
import Button from '@material-ui/core/Button';
import CallEnd from '@material-ui/icons/CallEnd';

const HangupButton = (props) => {
  const { selectedTask } = props;

  const handleClick = () => {
    Actions.invokeAction('HangupCall', { task: selectedTask });
  }

  return (
    <Button
      variant='contained'
      startIcon={<CallEnd />}
      onClick={handleClick}
      className='call-control-button hangup-button'
    >
      Hangup
    </Button>
  )
}

export default HangupButton;