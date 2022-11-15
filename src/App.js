import React from 'react';
import './App.css';
import GifRender from './container/GifRender';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <div className='container-fluid App-content'>
      <div className='container'>
        <GifRender></GifRender>
      </div>
    </div>
  );
}

export default App;
