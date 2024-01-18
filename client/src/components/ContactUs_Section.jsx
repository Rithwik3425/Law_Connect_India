import { useEffect } from "react";
import { TileLayer, MapContainer } from "react-leaflet";

function ContactUs_Section() {
  let pos = [18.0158464, 79.5475968];
  useEffect(function () {
    navigator.geolocation.getCurrentPosition((position) => {
      pos = [position.coords.latitude, position.coords.longitude];
    });
  }, []);
  return (
    <div className="contactuscontainer">
      <div className="forMapleft">
        <MapContainer center={pos} zoom={5} scrollWheelZoom={false}>
          <TileLayer
            attribution='<a href="https://www.openstreetmap.org/copyright"></a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
      <div className="forRight">
        <h1>Contact Us</h1>
        <p>
          For inquiries, use the form above. Include your name, email, phone,
          and your message. We'll get back to you soon.
          <form action="" method="get">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email :</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </form>
        </p>
      </div>
    </div>
  );
}

export default ContactUs_Section;
