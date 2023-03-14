import React, { useState } from 'react'
import UseEffectCodeExample from './useEffect/01-code-example'
import UserEffectFetchExample from './useEffect/02-code-fetch'
import TestUseEffect from './useEffect/testUseEffect';
import CleanUpFunction from './useEffect/03-cleanUpFunction';
import CleanupFunction from './useEffect/01-cleanUpFunc';
import Posts from './useEffect/04-clean-up-fetch';
import MultipleReturnsBasic from './conditional-rendering/01-multiple-returns'
import MultipleReturnsAdvance from './conditional-rendering/02-multiple-returns-fetch'
import UserChallengeTest from './conditional-rendering/user-challenge-ans';
import './App.css';
import ControlledInputs from './forms/01-controlled-inputs';
import Uncontrolled from './forms/02-un-controlled'
import FormsChallenge from './forms/03-forms-challenge'
function App() {


  return (
    <div>
      {/* <UseEffectCodeExample />  */}
      {/* <UserEffectFetchExample />  */}
      {/* <TestUseEffect />  */}
      {/* <CleanUpFunction />  */}
      {/* <CleanupFunction /> */}
      {/* <Posts /> */}
      {/* <MultipleReturnsBasic /> */}
      {/* <MultipleReturnsAdvance />  */}
      {/* <UserChallengeTest /> */}
      {/* <ControlledInputs /> */}
      <FormsChallenge />
    </div>
  );
}

export default App;
