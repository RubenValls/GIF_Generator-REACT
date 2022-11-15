import React from 'react';
import './App.css';
import GifRender from './container/GifRender';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <div className='App-content'>
      <div className='container-fluid'>
        <h1 className='text-center'>NAV BAR</h1>
      </div>
      <div className='container'>
        <GifRender></GifRender>
      </div>
      <div className='container-fluid'>
        <h1 className='text-center'>FOOTER</h1>
      </div>
    </div>
  );
}

export default App;
