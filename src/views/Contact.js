import { useState } from "react";
import { useEffect } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch('http://127.0.0.1:5000/api/contact', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        window.location.reload();
      })
      .catch(error => {
        console.error(error)
        ;
      });
  };

  useEffect(() => {
    const position = { lat: 36.30692, lng: -119.33297 };

    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: position,
    });

    const marker = new window.google.maps.Marker({
      map,
      position,
      title: "RGJ Solutions LLC",
    });
  }, []);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };




  return (
    <div className="flex flex-col w-full py-28">
      <h1 className="text-3xl font-bold text-center pb-9">Request An Appointment</h1>
      <div className="flex gap-2 p-2">
        <div className="flex-1">
        <form id="form" className="flex flex-col gap-2 mx-6" onSubmit={handleSubmit}>
  <div className="flex gap-0.5">
    <div className="flex-1">
      <label htmlFor="name" className="m-3">
        Name
      </label>
      <input type="text" id="name" name="name" placeholder="Name" className="input input-bordered w-full max-w-md" />
    </div>
    <div className="flex-1">
      <label htmlFor="phone" className="m-3">
        Phone
      </label>
      <input type="text" id="phone" name="phone" placeholder="Phone" className="input input-bordered w-full max-w-md" />
    </div>
  </div>
  <div className="flex gap-0.5">
    <div className="flex-1">
      <label htmlFor="email" className="m-3">
        Email
      </label>
      <input type="text" id="email" name="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
    </div>
    <div className="flex-1">
      <label htmlFor="services" className="m-3">
        Services
      </label>
      <input type="text" id="services" name="services" placeholder="Services" className="input input-bordered w-full max-w-xs" />
    </div>
  </div>
  <div className="flex flex-col gap-0.5">
    <label htmlFor="message" className="m-3">
      Message
    </label>
    <input type="text" id="message" name="message" placeholder="Message" className="input input-bordered input-lg w-full px max-w-lg mx-auto" />
  </div>
  <button type="submit" className="btn btn-outline mx-auto" id="submit">
    Submit
  </button>
</form>

        </div>
        <div className="flex-1">
          <div id="contact-card" className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
              <h2 className="text-xl font-bold mb-2">Business Hours:</h2>
              <p className="mb-4">Open Everyday 8am-5pm</p>
  
              <h2 className="text-xl font-bold mb-2">Contact:</h2>
              <p className="mb-1">
                Email: <a href="mailto:rgjsolutionsllc21@gmail.com">rgjsolutionsllc21@gmail.com</a>
              </p>
              <p className="mb-1">
                Phone Number: <a href="tel:5599209509">559-920-9509</a>
              </p>
              <p className="mb-4">Address: 3811 W Evergreen Ave, Visalia CA 93277</p>
            </div>
          </div>
        </div>
        <div className="flex-1 mx-6">
          <div id="map" style={{ width: "100%", height: "350px" }}></div>
        </div>
      </div>
    </div>
  );
  



};

export default Contact;
