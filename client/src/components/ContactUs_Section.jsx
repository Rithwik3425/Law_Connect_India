import { useEffect } from "react";
import { TileLayer, MapContainer } from "react-leaflet";
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactUs_Section() {
  let pos = [18.0158464, 79.5475968];
  useEffect(function () {
    navigator.geolocation.getCurrentPosition((position) => {
      pos = [position.coords.latitude, position.coords.longitude];
    });
  }, []);
  return (
    <div className="contactuscontainer">
       
      
      <div className="forRight">
      <div className="container">
        <div className="row">


      <div className="col-12"> 
        <h1>Contact Us</h1>
       
        <p className="forRight-p">
          How you can reach us
          </p>
          </div> 

<div className="container d-flex flex-row justify-content-center">
        <div className="col-6">
          <div className="d-flex flex-column">
            <div className="con-center">
          <form action="" method="get">
            
            <label htmlFor="name"></label>
            <input type="text" name="name" id="name" placeholder="Name" className="input-el1 mt-3" />
            
            <br />
            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" placeholder="Email" className="input-el" />
            <br />
            <label htmlFor="message"></label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              className="ml-3 input-el input-el-msg"
            ></textarea>

            <button className="send-button">Send</button>
          </form>
        </div>
        </div>
        </div>
      



      <div className="col-6">
        <div className="p-5 container">
<div className="d-flex flex-column">
        <div className="d-flex flex-row">
          <img src="https://i.pinimg.com/564x/d4/ef/2d/d4ef2dc3bfbffda3503f2e7674d5f6b7.jpg" className="contact-icon"
          />
          <div className="details-con">
            <h6 className="details-con-head">Phone</h6>
            <p className="details-con-para">+91 9876543210</p>
          </div>
        </div>



        <div className="d-flex flex-row">
          <img src="https://i.pinimg.com/564x/19/4c/4a/194c4a81c031413e0958fc08bb8d7c44.jpg" className="contact-icon"
          />
          <div className="details-con">
            <h6 className="details-con-head">Email</h6>
            <p className="details-con-para">lawconnectindia@gmail.com</p>
          </div>
        </div>



        <div className="d-flex flex-row">
          <img src="https://i.pinimg.com/564x/1f/6a/70/1f6a700bdaa75c5eca2d016c870e7994.jpg" className="contact-icon"
          />
          <div className="details-con">
            <h6 className="details-con-head">Location</h6>
            <p className="details-con-para">Warangal</p>
          </div>
        </div>

</div>
</div>


      </div>

      </div>

</div>

    </div>
    </div>
    </div>
     
  );
}

export default ContactUs_Section;
