import { useState } from "react";

function Meeting_Section() {
  const [page, setpage] = useState("all");
  function handleSubPage(e) {
    console.log(e.target.value);
    setpage(e.target.value);
  }
  return (
    <div>
      <div>Meetings</div>
      <div>
        <button value={"all"} onClick={handleSubPage}>
          All
        </button>
        <button value={"upcoming"} onClick={handleSubPage}>
          Upcoming
        </button>
        <button value={"completed"} onClick={handleSubPage}>
          Completed
        </button>
        <div>
          {page === "all" && <div>All Meetings</div>}
          {page === "upcoming" && <div>Upcoming Meetings</div>}
          {page === "completed" && <div>Completed Meetings</div>}
        </div>
      </div>
    </div>
  );
}

export default Meeting_Section;
