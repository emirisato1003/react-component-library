// import React from 'react';
// import Star from './assets/Star';
import Badges from './assets/Badges';
import Banner from './assets/components/Banner/index';
import { bannerData } from './assets/components/Banner/bannerData';
import Card from './assets/components/Cards/index';
import Testimonial from './assets/components/Testimonials/index';
import Tooltip from './assets/components/ToolTips/Tooltip';

//icon import
import { DiCodeBadge } from "react-icons/di";
import { FaReact } from "react-icons/fa";
// import { IoIosInformationCircle } from "react-icons/io";
import { BsArchive } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";

function App() {
  const badges = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
  return (
    // <Star onChange={() => {}} />
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
            <Banner onOpen={() => console.log("open/close banner")} key={data.status} status={data.status}>
              <Banner.Title>{data.icon}{data.title}</Banner.Title>
              <Banner.Dropdown>{data.text}</Banner.Dropdown>
            </Banner>
          )
        }
      </section>

      <section className="cards">
        <h2>Cards</h2>
        <div className="card">
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
        </div>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <h3>With Pic</h3>
        <Testimonial imgUrl="https://ben-custom-components.netlify.app/images/testimonial.jpeg">
          <Testimonial.Body>
            <Testimonial.Content name="May Andersons" role="Workcation, CTO">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit incidunt numquam atque sed aliquid quisquam harum excepturi nam nostrum sapiente?</Testimonial.Content>
          </Testimonial.Body>
        </Testimonial>

        <h3>No Pic</h3>
        <Testimonial imgUrl="">
          <Testimonial.Body>
            <Testimonial.Content name="May Andersons" role="Workcation, CTO">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit incidunt numquam atque sed aliquid quisquam harum excepturi nam nostrum sapiente?</Testimonial.Content>
          </Testimonial.Body>
        </Testimonial>
      </section>

      <section className="tooltips">
        <Tooltip text="Click me" theme="bold-blue">
          <BsArchive className='archive-icon icon' />
          <div className="tooltip-text">
            <p className='tooltip-title'>Archive notes</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officiis!</p>
          </div>
        </Tooltip>

        <Tooltip text="hover me" >
          <BsArchive className='archive-icon icon' />
          <div className="tooltip-text">
            <p className='tooltip-title'>Archive notes</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officiis!</p>
          </div>
        </Tooltip>

        <Tooltip text="hover me" >
          <BsArchive className='archive-icon icon' />
          <div className="tooltip-text">
            <p className='tooltip-title'>Archive notes</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officiis!</p>
          </div>
        </Tooltip>

        <Tooltip text="hover me" >
          <BsArchive className='archive-icon icon' />
          <div className="tooltip-text">
            <p className='tooltip-title'>Archive notes</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officiis!</p>
          </div>
        </Tooltip>

        <Tooltip text="hover me" >
          <BsArchive className='archive-icon icon' />
          <div className="tooltip-text">
            <p className='tooltip-title'>Archive notes</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officiis!</p>
          </div>
        </Tooltip>

        <Tooltip text="hover me" >
          <BsArchive className='archive-icon icon' />
          <div className="tooltip-text">
            <p className='tooltip-title'>Archive notes</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officiis!</p>
          </div>
        </Tooltip>

        <Tooltip text="hover me" >
          <BsArchive className='archive-icon icon' />
          <div className="tooltip-text">
            <p className='tooltip-title'>Archive notes</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officiis!</p>
          </div>
        </Tooltip>

        <Tooltip text="hover me" >
          <BsArchive className='archive-icon icon' />
          <div className="tooltip-text">
            <p className='tooltip-title'>Archive notes</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officiis!</p>
          </div>
        </Tooltip>
      </section>

      <section className="toast">
        <div className="pop-up">
          <CiCircleCheck className='popup-icon' />
          <div className="pop-up-text">
            <p>Success</p>
            <p>Your work has been saved.</p>
          </div>
        </div>
      </section>

    </main >
  );
}

export default App;




