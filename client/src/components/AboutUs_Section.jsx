import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs_Section() {
  return (
    <>
    <div className="container">
      <div className="row">
      <h1 className="col-12 headingaboutus">About us</h1>
      {/* <div className="container2"> */}

<div className="d-flex flex-row">
        <div className="col-12 col-md-6">
        <div className="box">
          <div className="boxmatter">
            <h3>Access legal services easily</h3>
            <p>
              LegalMarket makes it easy for citizens in India to access legal
              services. 
              <br/>Our platform connects you with experienced legal service
              providers
              <br/> in your area.
            </p>
          </div>
          <div className="boxmatter">
            <h3>Incentivized onboarding for providers</h3>
            <p>
              We incentivize legal service providers such as advocates,
              arbitrators, mediators, notaries, and document writers to join our
              platform and extend their services to citizens
            </p>
          </div>
          <div className="boxmatter">
            <h3>Transparent and reliable service</h3>
            <p>
              With LegalMarket, you can expect transparent and reliable legal
              services. Our platform ensures that you can find the right legal
              service provider for your needs.
            </p>
          </div>

        </div>
        </div>

        <div className="col-12 col-md-6">
        <div className="box1"></div>
        </div>
      </div>
      </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default AboutUs_Section;
