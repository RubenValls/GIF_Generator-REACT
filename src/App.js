import React from 'react';
import './App.css';
import GifRender from './container/GifRender';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './container/pure/footer';
import Nav from './container/pure/nav';

function App() {

  return (
    <div className='App-content'>
      <Nav/>
      <GifRender/>
      <Footer/>
    </div>
  );
}

export default App;
