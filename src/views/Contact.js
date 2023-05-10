import { useEffect } from "react";

const Contact = () => {
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


    return (
      <div>
        <div className="text-center">
          <h1>Request An Appointment</h1>
        </div>
        <div className="flex gap-2 p-2">
          <div className="flex-1">
            <form className="flex flex-col gap-0.5">
              <div className="flex gap-0.5">
                <div className="flex-1">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Name" className="input input-bordered w-full max-w-md" />
                </div>
                <div className="flex-1">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" id="phone" placeholder="Phone" className="input input-bordered w-full max-w-md" />
                </div>
              </div>
              <div className="flex gap-0.5">
                <div className="flex-1">
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="flex-1">
                  <label htmlFor="services">Services</label>
                  <input type="text" id="services" placeholder="Services" className="input input-bordered w-full max-w-xs" />
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <label htmlFor="message">Message</label>
                <input type="text" id="message" placeholder="Message" className="input input-bordered input-lg w-full max-w-lg mx-auto" />
              </div>
              <a role="button" className="btn btn-outline btn-successbtn">Submit</a>
            </form>
          </div>
          <div className="flex-1">
          <div className="card w-96 bg-base-100 shadow-xl mx-auto">
              <div className="card-body">
                <h1 className="card-title">RGJ Solutions LLC</h1>
                
                <p>Business Hours: Open Everyday 8am-5pm Mobile Appointments Or Drop Offs</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div id="map" style={{ width: "100%", height: "400px", paddingRight:"50px" }}></div>
          </div>
        </div>
      </div>
    );
    
  
  
};

export default Contact;
