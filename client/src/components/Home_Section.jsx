import 'bootstrap/dist/css/bootstrap.min.css';

function Home_Section() {
  return (
    <>
      <div className="homepage">
        <div className="container">
        <div className="row">
          <div className="col-12">
        <div className="bigHeading">
          Connect with Legal Service Providers in India
        </div>
        </div>

        <div className="col-12">
        {/* <div className="smallHeading">
          Our platform incentivizes legal service providers to offer their
          services to citizens in India, making legal assistance more accessible
        </div> */}
        </div>


        <div className="forButtons">
<div className="d-flex flex-row justify-content-center">
          <div className="col-12 col-md-6">
          <button className="btnhomepage">Find service provider</button>
          </div>

          <div className="col-12 col-md-6">
          <button className="btnhomepage1">Service provider signup</button>
          </div>
          </div>
        </div>
      </div>
    
      </div>


      <div>
        
      </div>
      </div>
    </>
  );
}

export default Home_Section;
