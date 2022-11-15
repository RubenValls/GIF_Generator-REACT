import React from 'react';
import './App.css';
import GifRender from './container/GifRender';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './container/pure/footer';
import Nav from './container/pure/nav';
import { Helmet } from 'react-helmet';

function App() {

  return (
    <div className='App-content'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gif Generator</title>
      </Helmet>
      <Nav/>
      <GifRender/>
      <Footer/>
    </div>
  );
}

export default App;
