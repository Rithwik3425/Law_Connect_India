import 'bootstrap/dist/css/bootstrap.min.css';

function Services_Section() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12">
      <div className="headingServices">
        <h3>Our Services providers </h3>
        <p>Our verified legal service providers are</p>
      </div>
      </div>

      {/* <div className="servicesimg"> */}
        <div className="col-12 col-md-6">
        <div className="serviceimg1">
          <h4>Advocates</h4>
          <button>CLICK HERE</button>
        </div>
        </div>
        <div className="col-12 col-md-6">
        <div className="serviceimg2">
          <h4>Arbitators, Mediators, Document Writers, Notaries</h4>
          <button>CLICK HERE</button>
        </div>
        </div>
      </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Services_Section;
