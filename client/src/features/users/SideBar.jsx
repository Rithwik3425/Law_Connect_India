import { Link } from "react-router-dom";

function SideBar({ page, setpage }) {
  function handlePageChange(e) {
    e.preventDefault();
    e.style["background-color"] = "red";
    setpage(e.target.value);
  }
  return (
    <div className="sidebar2">

      <div>
      <div className="user-logo">
        {/* <img src="./LawConnectIndia.jpeg" className="user-logo"
        /> */}
      </div>

      <div className="btncon">
        <button value={"meetings"} onClick={handlePageChange} className="sidebtn" >
          Meetings
        </button>
        <button value={"payment"} onClick={handlePageChange} className="sidebtn">
          Payment
        </button>
        <button value={"reviews"} onClick={handlePageChange} className="sidebtn">
          Reviews
        </button>
        <button value={"profile"} onClick={handlePageChange} className="sidebtn">
          My Profile
        </button>
      </div>
      </div>
      <button className="sidebtn">Log out</button>
    </div>
  );
}

export default SideBar;
