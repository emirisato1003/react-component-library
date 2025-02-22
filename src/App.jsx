import React from 'react';
import Star from './assets/Star';
import Badges from './assets/Badges';
// import Menu from './Menu/Menu';

function App() {
  const badges = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
  return (
    // <Star onChange={() => { }} />
    <main>
      <h1>React Component Library</h1>
      <h2>Badges</h2>
      <h3>Square</h3>
      <div className="square-badges">
        {
          badges.map(color =>
            <Badges color={color}>Badges</Badges>)
        }
      </div>

      <h3>Pill</h3>
    </main>
  );
}

export default App;
