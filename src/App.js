import React, { useState } from 'react'
import UseEffectCodeExample from './useEffect/01-code-example'
import UserEffectFetchExample from './useEffect/02-code-fetch'
import TestUseEffect from './useEffect/testUseEffect';
import CleanUpFunction from './useEffect/03-cleanUpFunction';
import CleanupFunction from './useEffect/01-cleanUpFunc';
import Posts from './useEffect/04-clean-up-fetch';
import './App.css';

function App() {


  return (
    <div>
      {/* <UseEffectCodeExample />  */}
      {/* <UserEffectFetchExample />  */}
      {/* <TestUseEffect />  */}
      {/* <CleanUpFunction />  */}
      {/* <CleanupFunction /> */}
      <Posts />
    </div>
  );
}

export default App;
