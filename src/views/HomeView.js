import { useState } from "react";
import axios from "axios";
import hero from '../styles/images/hero.jpg'
import '../styles/home.css'

const HomeView = () => {
  const local_url_1 = 'http://127.0.0.1:5000/shop';
  const local_url_2 = 'http://127.0.0.1:5000/shops';

  const [services1, setServices1] = useState([]);
  const [services2, setServices2] = useState([]);

  const getServiceData = async (url) => {
    let response = await axios.get(url);
    return response.status === 200 ? response.data : null
  }

  const loadServiceData = async () => {
    let data1 = await getServiceData(local_url_1);
    let data2 = await getServiceData(local_url_2);
    console.log(data1, typeof data1);
    console.log(data2, typeof data2);
    setServices1(data1.data);
    setServices2(data2.data);
  }

  useState(() => loadServiceData());

  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${hero})`,marginBottom: '50px' }}>
        <div className="hero-overlay bg-opacity-500"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Auto Detailing Services</h1>
            <p className="mb-5 text-3xl font-bold">Providing top-quality detailing services at your doorstep</p>
            <a href="/contact" class="btn btn-primary">Contact Us</a>

          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        {console.log(services1, typeof services1)}
        {console.log(services2, typeof services2)}
        {typeof services1 === 'object' && !services1.then ? services1.map((service, index) => (
          <div className="card w-96 bg-base-100 shadow-xl m-10" key={index}>
            <div className="card-body">
              <h2 className="card-title">{service.name}</h2>
              <p>{service.details1}</p>
              <p>{service.details2}</p>
              <p>{service.details3}</p>
              <p>{service.details4}</p>
              <p>{service.details5}</p>
              <p>{service.details6}</p>
              <p>{service.details7}</p>
              <p>{service.details8}</p>
              <p>$ {service.price}</p>
              <div className="card-actions justify-end">
              </div>
            </div>
          </div>
        )) : (
          <div>Loading...</div>
        )}
        {typeof services2 === 'object' && !services2.then ? services2.map((service, index) => (
          <div className="card w-96 bg-base-100 shadow-xl m-10" key={index}>
            <div className="card-body">
              <h2 className="card-title">Add-Ons</h2>
              <p>-{service.det1}</p>
              <p>-{service.det2}</p>
              <p>-{service.det3}</p>
              <p>-{service.det4}</p>
              <div className="card-actions justify-end">
              </div>
            </div>
          </div>
        )) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default HomeView;