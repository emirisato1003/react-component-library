import React from 'react';
import Star from './assets/Star';
import Badges from './assets/Badges';
import Banner from './assets/components/Banner/index';
import { bannerData } from './assets/components/Banner/bannerData';

// import { IoIosCheckmarkCircle } from "react-icons/io";

// import Menu from './Menu/Menu';

function App() {
  const badges = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
  return (
    // <Star onChange={() => { }} />
    <main>
      <h1>React Component Library</h1>

      <section className='badges'>
        <h2>Badges</h2>
        <h3>Square</h3>
        <div className="square-badges">
          {
            badges.map(color =>
              <Badges key={color} color={color}>Badges</Badges>)
          }
        </div>
        <h3>Pill</h3>
        <div className="pill-badges">
          {
            badges.map(color =>
              <Badges key={color} color={color} className='pill'>Badges</Badges>)
          }
        </div>
      </section>
      <h2>Banners</h2>
      <section className="banners">
        {/* <div className="multi-line">
          <h3>multi line</h3>
          {
            bannerData.map(data => data.text &&
              <Banner status={data.status}>
                <Banner.Title>{data.title}</Banner.Title>
                <Banner.Text>{data.text}</Banner.Text>
              </Banner>
            )
          }
        </div>
        <div className="single-line">
          <h3>single line</h3>
          {bannerData.map(data => !data.text &&
            <Banner status={data.status}>
            <Banner.Title>{data.title}</Banner.Title>
          </Banner>
          )}
        </div> */}
      </section>
    </main>
  );
}

export default App;
