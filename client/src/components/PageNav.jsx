import { Link } from "react-router-dom";
//import { Link } from "react-scroll";

function PageNav() {
  return (
    <div>
    <div className="navbar">
    <Link to="/"><div className="logo"></div></Link>
      <Link to="/" className="linkss link1">
        Home
      </Link>
      
      <Link
        to="/lawyers"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="linkss link1"
      >
        Find A LSP
      </Link>
      <Link
        to="/aboutUs"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="linkss link1"
      >
        About us
      </Link>
      <Link
        to="/collabwithus"
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
        <Link to="/signin" className="linkss">
          Login
        </Link>
      </button>
    </div>
    </div>
  );
}

export default PageNav;
