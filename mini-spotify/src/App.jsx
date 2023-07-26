import React from 'react';
import { Sidebar, Header, Banner, Content, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <section>
        <Header />
        <Banner />
        <Content />
      </section>
      <Footer />
    </div>
  );
}

export default App;
