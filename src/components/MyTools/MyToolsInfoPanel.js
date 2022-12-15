import React from 'react';
import Divider from '@material-ui/core/Divider';

const MyToolsInfoPanel = (props) => {
  const selectedTask = props.selectedTask || {};
  const { sid: reservationSid, taskSid } = selectedTask;
  const attributes = selectedTask.attributes || {};
  const {
    call_sid: callSid,
    called: calledNumber,
    caller: callerPhone,
    caller_state: callerState,
    conference,
    direction,
    from,
    from_city: callerCity,
    outbound_to: outboundTo,
    ticketNumber
  } = attributes;

  const customerCallSid = conference?.participants?.customer;

  const isOutboundCall = () => {
    return direction === 'outbound';
  }

  return (
    <div className='my-tools-info-panel'>
      <Divider className='my-tools-info-panel-divider' />
      <div className='my-tools-info-panel-row-title'>
        <div>Customer Information</div>
      </div>
      <div className='my-tools-info-panel-row'>
        <div>Phone:</div>
        <div>{isOutboundCall() ? outboundTo : callerPhone}</div>
      </div>
      { isOutboundCall()
        ? null
        : <div className='my-tools-info-panel-row'>
            <div>Location:</div>
            <div>{callerCity}, {callerState}</div>
          </div>
      }
      <div className='my-tools-info-panel-row'>
        <div>Ticket #:</div>
        <div>{ticketNumber}</div>
      </div>
      <Divider className='my-tools-info-panel-divider' />
      <div className='my-tools-info-panel-row-title'>
        <div>Call Information</div>
      </div>
      <div className='my-tools-info-panel-row'>
        <div>Direction:</div>
        <div>{isOutboundCall() ? 'Outbound' : 'Inbound'}</div>
      </div>
      <div className='my-tools-info-panel-row'>
        <div>{isOutboundCall() ? 'From #:' : 'Called #:'}</div>
        <div>{isOutboundCall() ? from : calledNumber}</div>
      </div>
      <div className='my-tools-info-panel-row'>
        <div>Call SID:</div>
        <div>{isOutboundCall() ? customerCallSid : callSid}</div>
      </div>
      <div className='my-tools-info-panel-row'>
        <div>Task SID:</div>
        <div>{taskSid}</div>
      </div>
      <div className='my-tools-info-panel-row'>
        <div>Reservation SID:</div>
        <div>{reservationSid}</div>
      </div>
    </div>
  )
}

export default MyToolsInfoPanel;
