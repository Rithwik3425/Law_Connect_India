import { Link } from "react-router-dom";

function PageNav() {
  return (
    <div className="navbar">
      <div className="logo"></div>
      <Link to="/" className="linkss">
        Home
      </Link>
      <Link to="/aboutus" className="linkss">
        About us
      </Link>
      <Link to="/services" className="linkss">
        Services
      </Link>
      <Link to="/collabrations" className="linkss">
        Collabrations
      </Link>
      <Link to="/contactus" className="linkss">
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
