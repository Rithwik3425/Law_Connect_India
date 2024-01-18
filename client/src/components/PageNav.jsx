// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

function PageNav() {
  return (
    <div>
    <div className="navbar">
      <div className="logo"></div>
      <Link to="/" className="linkss link1">
        Home
      </Link>
      <Link
        to="headingaboutus"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="linkss link1"
      >
        About us
      </Link>
      <Link
        to="headingServices"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="linkss link1"
      >
        Services
      </Link>
      <Link
        to="collabheading"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="linkss link1"
      >
        Collaborations
      </Link>
      <Link
        to="/"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="linkss link1"
      >
        Contact us
      </Link>
      <button className="btn-logout">
        <Link to="/login" className="linkss">
          Login
        </Link>
      </button>
    </div>
    </div>
  );
}

export default PageNav;
