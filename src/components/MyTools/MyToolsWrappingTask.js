import React from 'react';
import { Actions } from '@twilio/flex-ui';
import Button from '@material-ui/core/Button';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

const MyToolsWrappingTask = (props) => {
  const { selectedTask } = props;

  const handleClick = () => {
    Actions.invokeAction('CompleteTask', { task: selectedTask });
  }

  return (
    <div className='my-tools-wrapping-task'>
      <p>Wrapping up. Complete Task when finished.</p>
      <Button
        fullWidth
        variant='contained'
        color='primary'
        startIcon={<AssignmentTurnedInIcon />}
        onClick={handleClick}
      >
        Complete Task
      </Button>
    </div>
  )
}

export default MyToolsWrappingTask;
