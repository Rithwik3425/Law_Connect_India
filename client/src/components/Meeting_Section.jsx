import { useState } from "react";

function Meeting_Section() {
  const [page, setpage] = useState("all");
  function handleSubPage(e) {
    console.log(e.target.value);
    setpage(e.target.value);
  }
  return (
    <div className="meetings-con">
      <div className="meetings-heading">Meetings</div>
      <div>
        <button value={"all"} onClick={handleSubPage} className="meetings-items">
          All
        </button>
        <button value={"upcoming"} onClick={handleSubPage} className="meetings-items">
          Upcoming
        </button>
        <button value={"completed"} onClick={handleSubPage} className="meetings-items">
          Completed
        </button>
        <div>

          <hr className="horizontal-line"></hr>


          {page === "all" && <div>All Meetings</div>}
          {page === "upcoming" && <div>Upcoming Meetings</div>}
          {page === "completed" && <div>Completed Meetings</div>}
        </div>
      </div>
    </div>
  );
}

export default Meeting_Section;
