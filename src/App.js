import React from 'react';
import './App.css';
import Logo from './components/CartLink/CartLink';
import Nav from './components/nav/nav';
import CartLink from './components/CartLink/CartLink';

function App() {
  return (
    <div className="App">
      <nav>
        <Logo />
        <Nav />
        <CartLink />
      </nav>
      <main>
        Shop by Tinatin Iusupova
      </main>
    </div>
  );
}

export default App;
