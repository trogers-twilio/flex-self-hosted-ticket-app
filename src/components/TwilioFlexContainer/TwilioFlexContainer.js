import React, { useEffect, useState } from 'react';
import * as Flex from '@twilio/flex-ui';
import { CirclesWithBar } from  'react-loader-spinner'

import { initializeTwilioFlex } from '../../twilio-flex';

const TwilioFlexContainer = () => {
  const [manager, setManager] = useState(undefined);

  useEffect(() => {
    initializeTwilioFlex().then(manager => setManager(manager));
  }, []);

  return (
    <div className='flex-container bg-light'>
      { manager
        ? <div id="flex" className="flex">
            <Flex.ContextProvider manager={manager}>
              <Flex.RootContainer />
            </Flex.ContextProvider>
          </div>
        : <div id="flex-loading" className="flex-loading">
            <CirclesWithBar
              height="100"
              width="100"
              color="#0046BE"
              visible={true}
              innerCircleColor="red"
              ariaLabel='circles-with-bar-loading'
            />
          </div>
      }
    </div>
  )
};

export default TwilioFlexContainer;