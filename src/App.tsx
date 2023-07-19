import React from 'react';

import './App.css';
import ButtonComponent from './component/button';
import Profiles from './component/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ButtonComponent /> */}
        <Profiles></Profiles>
      </header>
    </div>
  );
}

export default App;
