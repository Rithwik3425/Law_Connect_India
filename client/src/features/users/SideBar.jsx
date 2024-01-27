import { Link } from "react-router-dom";

function SideBar({ page, setpage }) {
  function handlePageChange(e) {
    e.preventDefault();
    setpage(e.target.value);
  }
  return (
    <div className="sidebar">
      <button value={"meetings"} onClick={handlePageChange}>
        Meetings
      </button>
      <button value={"payment"} onClick={handlePageChange}>
        Payment
      </button>
      <button value={"reviews"} onClick={handlePageChange}>
        Reviews
      </button>
      <button value={"profile"} onClick={handlePageChange}>
        My Profile
      </button>
      <button>Log out</button>
    </div>
  );
}

export default SideBar;
