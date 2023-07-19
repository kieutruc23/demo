import React from 'react';

import './App.css';
import ButtonComponent from './component/button';
import Profiles from './component/Profile';
import ExampleComponent from './component/Example';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ButtonComponent /> */}
        {/* <Profiles></Profiles> */}
        <ExampleComponent></ExampleComponent>
      </header>
    </div>
  );
}

export default App;
