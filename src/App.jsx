import React from 'react';
import Star from './assets/Star';
import Badges from './assets/Badges';
// import Menu from './Menu/Menu';

function App() {
  return (
    // <Star onChange={() => { }} />
    <main>
    <h1>React Component Library</h1>
    <h2>Badges</h2>
    <h3>Square</h3>
    <Badges color={'gray'}>Badges</Badges>
    <h3>Pill</h3>
    </main>
  );
}

export default App;
