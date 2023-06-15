import React from 'react';
import rgj from '../styles/images/rgj.jpg'

const AboutUs = () => {
  return (
    <div className="flex flex-col w-full my-28 pb-11">
    
    <div className="card card-side bg-base-100 shadow-xl my-10">
    <figure  style={{ paddingLeft: '20px' }}><img id="about" src={rgj} alt="RGJ Solutions LLC"/></figure>
      <div className="card-body">
      <h2 className="card-title">About RGJ Solutions</h2>
    <p>RGJ Solutions is a family-owned and operated car detailing business serving the Central Valley and surrounding areas from Visalia, California. Since our founding in 2020, we have been committed to providing exceptional detailing services with a personal touch.</p>

    <p>We understand that your vehicle is more than just a mode of transportation, which is why we take pride in offering a wide range of services to keep your car looking and running its best. Whether you need a thorough interior and exterior cleaning, paint correction, or ceramic coating, our experienced professionals use only the best products and techniques to deliver outstanding results.</p>

    <p>At RGJ Solutions, we prioritize communication and strive to exceed your expectations. That's why we take the time to understand your unique needs and preferences before beginning any work on your vehicle. Our team is dedicated to providing personalized attention and exceptional service to ensure your complete satisfaction.</p>

    <p>To make our services as convenient as possible, we offer both mobile detailing and drop-off options. Our mobile service allows us to come to you, whether you're at home or work, while our drop-off location in Visalia provides a convenient option for those who prefer to leave their vehicle with us.</p>

    <p>At RGJ Solutions, we are not only dedicated to providing exceptional service to our customers, but we are also committed to giving back to our community. We support local charities and organizations, and we strive to make a positive impact in the world.</p>

    <p>Thank you for choosing RGJ Solutions LLC for all of your car detailing needs. We look forward to serving you and exceeding your expectations.</p>
  </div>
    </div>
    </div>
  );
};

export default AboutUs;

