function Collab_Section() {
  return (
    <>
      <div className="collabheading">Our Collaborators</div>
      <div className="collabcontainer">
        <div className="collabbox">
          <div className="collabimg1"></div>
          <p>
            Legal aid clinics collaborate with the platform and provide pro Bono
            services for clients of poor socioeconomic backgrounds
          </p>
        </div>
        <div className="collabbox">
          <div className="collabimg2"></div>
          <p>
            Bar associations collab with the platform and verify the identity
            and profile of the legal service provider
          </p>
        </div>
        <div className="collabbox">
          <div className="collabimg3"></div>
          <p>
            For feasible connection to the courts we are using e-courts to track
            down the nearest court to help us with the case.
          </p>
        </div>
      </div>
      <div className="btncontainer">
        <button className="collabbtn">Collab with us</button>
      </div>
    </>
  );
}

export default Collab_Section;
