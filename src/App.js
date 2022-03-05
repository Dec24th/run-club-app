import React from 'react'
import './App.css';
import AddComment from '../src/components/AddComment'
import Header from '../src/components/Header'
import Main from '../src/components/Main'
import Footer from '../src/components/Footer'


function App() {
  return (
    <>
      <div className='grid-container'>
        <Header />
        <Main /> 
        <Header />
        <Main />
        <Footer />
      </div>

    </>

  );
}

export default App;
