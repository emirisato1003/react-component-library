import React from 'react';
import Star from './assets/Star';
import Badges from './assets/Badges';
import Banner from './assets/components/Banner/index';
import { bannerData } from './assets/components/Banner/bannerData';
import Card from './assets/components/Cards/index';

//temporary import
import { DiCodeBadge } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

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
              <Badges key={color} color={color}>Badges</Badges>)
          }
        </div>
      </section>

      <section className="banners">
        <h2>Banners</h2>
        {
          bannerData.map(data => data.text &&
            <Banner key={data.status} status={data.status}>
              <Banner.Title>{data.icon}{data.title}</Banner.Title>
              <Banner.Dropdown>{data.text}</Banner.Dropdown>
            </Banner>
          )
        }
      </section>

      <h2>Cards</h2>
      <section className="cards">

        <Card>
          <Card.Title>Easy Deployment</Card.Title>
          <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
        </Card>

        <Card icon={<FaReact />} iconBgColor='blue'>
          <Card.Title>Easy Deployment</Card.Title>
          <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
        </Card>

        <Card icon={<DiCodeBadge />} iconBgColor='purple'>
          <Card.Title>Easy Deployment</Card.Title>
          <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
        </Card>
      </section>

      <section className="testimonials">
        <div className="testimonial-container">
          <img src="https://ben-custom-components.netlify.app/images/testimonial.jpeg" alt="" />
          <div className="testimonial-content">
            <div className="icon">
              <FaQuoteLeft />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit incidunt numquam atque sed aliquid quisquam harum excepturi nam nostrum sapiente?</p>
            <div className="content-footer">
              <p className='footer-name'>May Andersons</p>
              <p className='footer-role'>Workcation, CTO</p>
            </div>
          </div>
        </div>

        {/* <div className="testimonial-container">

        </div> */}
      </section>

    </main >
  );
}

export default App;




