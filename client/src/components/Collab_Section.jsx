import 'bootstrap/dist/css/bootstrap.min.css';

function Collab_Section() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div classname="col-12">
      <div className="collabheading" name="collabheading">
        Testimonials
      </div>
      </div>

  
      {/* <div className="collabcontainer"> */}
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
        <div className="collabbox m-5">
          <div className="collabimg1"></div>
          <p className="collab-para">
            Legal aid clinics collaborate with the platform and provide pro Bono
            services for clients of poor socioeconomic backgrounds
          </p>
        </div>
        </div>
         

        <div className="col-12 col-md-4">
        <div className="collabbox m-5">
          <div className="collabimg2"></div>
          <p className="collab-para">
            Bar associations collab with the platform and verify the identity
            and profile of the legal service provider
          </p>
        </div>
        </div>

        <div className="col-12 col-md-4">
        <div className="collabbox m-5">
          <div className="collabimg3"></div>
          <p className="collab-para">
            For feasible connection to the courts we are using e-courts to track
            down the nearest court to help us with the case.
          </p>
        </div>
        </div>

        </div>
        </div>
      {/* </div> */}
      <div className="col-12">
      <div className="btncontainer">
        <button className="collabbtn">Collab with us</button>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Collab_Section;
