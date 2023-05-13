import { useState } from "react";
import axios from "axios";
import { Slide } from 'react-reveal';
import addon from '../styles/images/addon.jpg'


const Services = () => {
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
    <div className="flex flex-col w-full">
    <div className="divider "></div>
    <div><h1 className="text-3xl font-bold text-center">Mobile & Drop Off Services Available</h1></div>

    <div>
      <div className="flex justify-center">
        {typeof services1 === 'object' && !services1.then ? services1.map((service, index) => (
          <Slide key={index} left duration={500}>
            <div className="card w-96 bg-base-100 shadow-xl image-full m-20" key={index}>
              <figure><img src={service.img_url} alt={service.name} /></figure>
              <div className="card-body">
                <h2 className="card-title">{service.name}:</h2>
                <p>{service.details1}</p>
                <p>{service.details2}</p>
                <p>{service.details3}</p>
                <p>{service.details4}</p>
                <p>{service.details5}</p>
                <p>{service.details6}</p>
                <p>{service.details7}</p>
                <p>{service.details8}</p>
                <br></br>
                <p>Starting at ${service.price}</p>
                <div className="card-actions justify-end">
                <a href="/contact" className="btn btn-primary">Book Now</a>
                </div>
              </div>
            </div>
          </Slide>
        )) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="flex justify-center">
        {typeof services2 === 'object' && !services2.then ? services2.map((service, index) => (
          <Slide key={index} left duration={500}>
          <div className="card card-side bg-base-100 shadow-xl" id="addon" key={index}>
            <figure><img id="add" src={addon} alt="addons"/></figure>
            <div className="card-body">
              <h2 className="card-title">Add-Ons</h2>
              <p>{service.det1}</p>
              <p>{service.det2}</p>
              <p>{service.det3}</p>
              <p>{service.det4}</p>
              <br></br>
              <div className="card-actions justify-end">
              <a href="/contact" className="btn btn-primary mt-2">Book Now</a>
              </div>
            </div>
          </div>
          </Slide>
        )) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
    </div>
  );

};

export default Services;
