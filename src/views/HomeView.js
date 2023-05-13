import { Zoom } from 'react-reveal';
import slide1 from '../styles/images/slide1.jpg'
import slide2 from '../styles/images/slide2.jpg'
import slide3 from '../styles/images/slide3.jpg'
import slide4 from '../styles/images/slide4.jpg'
import hero2 from '../styles/images/hero2.jpg'
import Slide from 'react-reveal/Slide';

function HomeView() {
  return (
    <div className="text-center">
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${hero2})`, marginBottom: '60px', marginTop:"5px" }}>
        <div className="hero-overlay bg-opacity-500"></div>
        <div className="hero-content text-center text-neutral-content">
          <Zoom left delay={500} duration={2000}>
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Auto Detailing Services</h1>
              <p className="mb-5 text-3xl font-bold">Providing top-quality detailing services at your doorstep</p>
              <a href="/contact" className="btn btn-primary">Contact Us</a>
            </div>
          </Zoom>
        </div>
      </div>

      <div><h1 className="text-lg font-bold text-center mb-4">Before & After</h1></div>
      <div className="flex flex-col w-full">
    <div className="divider "></div>
      <div className="card-container before" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <Slide bottom><div className="card w-96 bg-base-100 shadow-xl" id="x">
          <figure><img src={slide1} alt="before/after" id="y"/></figure>
        </div></Slide>
        <Slide bottom><div className="card w-96 bg-base-100 shadow-xl" id="x">
          <figure><img src={slide2} alt="before/after" id="y" /></figure>
        </div></Slide>
        <Slide bottom><div className="card w-96 bg-base-100 shadow-xl" id="x">
          <figure><img src={slide3} alt="before/after" id="y"/></figure>
        </div></Slide>
        <Slide bottom><div className="card w-96 bg-base-100 shadow-xl" id ="x">
          <figure><  img src={slide4} alt="before/after" id="y"/></figure>
        </div></Slide>
        </div>
      </div>
    </div>

  );
}

export default HomeView;


