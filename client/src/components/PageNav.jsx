// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

function PageNav() {
  return (
    <div className="navbar">
      <div className="logo"></div>
      <Link to="/" className="linkss">
        Home
      </Link>
      <Link
        to="headingaboutus"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="linkss"
      >
        About us
      </Link>
      <Link
        to="headingServices"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="linkss"
      >
        Services
      </Link>
      <Link
        to="collabheading"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="linkss"
      >
        Collabrations
      </Link>
      <Link
        to=""
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="linkss"
      >
        Contact us
      </Link>
      <button className="btn-logout">
        <Link to="/login" className="linkss">
          Login
        </Link>
      </button>
    </div>
  );
}

export default PageNav;
