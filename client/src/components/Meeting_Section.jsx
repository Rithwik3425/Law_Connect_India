import { useState } from "react";

function Meeting_Section() {
  const [page, setpage] = useState("all");
  function handleSubPage(e) {
    setpage(e.target.value);
  }
  return (
    <div className="meetings-con">
      <div className="meetings-heading">Meetings</div>
      <div>
        <button
          value={"all"}
          onClick={handleSubPage}
          className="meetings-items"
        >
          All
        </button>
        <button
          value={"upcoming"}
          onClick={handleSubPage}
          className="meetings-items"
        >
          Upcoming
        </button>
        <button
          value={"completed"}
          onClick={handleSubPage}
          className="meetings-items"
        >
          Completed
        </button>
        <div>
          <hr className="horizontal-line"></hr>

          {page === "all" && (
            <div>
              All Meetings
              <div className="container">
                <div className="d-flex flex-row">
                  <div className="meeting-con">
                    <div className="center-con">
                      <img
                        src="https://img.freepik.com/premium-vector/lawyer-avatar-vector-illustration_822301-12.jpg"
                        className="lawyer-image-user"
                      />
                    </div>
                    <h4>
                      Meeting with: <span>Advocate Rajat Verma</span>
                    </h4>
                    <h4>
                      On: <span className="span-user">3rd February 2024</span>
                    </h4>
                    <h4>
                      Time:{" "}
                      <span className="span-user">6:00 PM to 7:00 PM</span>
                    </h4>
                  </div>

                  <div className="meeting-con">
                    <div className="center-con">
                      <img
                        src="https://img.freepik.com/premium-vector/lawyer-avatar-vector-illustration_822301-12.jpg"
                        className="lawyer-image-user"
                      />
                    </div>
                    <h4>
                      Meeting with: <span>Advocate Rajat Verma</span>
                    </h4>
                    <h4>
                      On: <span className="span-user">25th January 2024</span>
                    </h4>
                    <h4>
                      Time:{" "}
                      <span className="span-user">5:00 PM to 6:00 PM</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          )}
          {page === "upcoming" && (
            <div>
              Upcoming Meetings
              <div className="meeting-con">
                <div className="center-con">
                  <img
                    src="https://img.freepik.com/premium-vector/lawyer-avatar-vector-illustration_822301-12.jpg"
                    className="lawyer-image-user"
                  />
                </div>
                <h4>
                  Meeting with: <span>Advocate Rajat Verma</span>
                </h4>
                <h4>
                  On: <span className="span-user">3rd February 2024</span>
                </h4>
                <h4>
                  Time: <span className="span-user">6:00 PM to 7:00 PM</span>
                </h4>
              </div>
            </div>
          )}

          {page === "completed" && (
            <div>
              Completed Meetings
              <div className="meeting-con">
                <div className="center-con">
                  <img
                    src="https://img.freepik.com/premium-vector/lawyer-avatar-vector-illustration_822301-12.jpg"
                    className="lawyer-image-user"
                  />
                </div>
                <h4>
                  Meeting with: <span>Advocate Rajat Verma</span>
                </h4>
                <h4>
                  On: <span className="span-user">25th January 2024</span>
                </h4>
                <h4>
                  Time: <span className="span-user">5:00 PM to 6:00 PM</span>
                </h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Meeting_Section;
