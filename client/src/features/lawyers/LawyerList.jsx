import { useContext } from "react";
import { LawyerContext } from "../../contexts/LawyerContext";

function LawyerList() {
  const { lawyer, handleLawyer } = useContext(LawyerContext);
  return (
    <div className="lawyer-page">
      <h2 className="list-heading">List of Lawyers</h2>
      <div className="lawyer-list">
        {lawyer.map((law) => (
          <div className="lawyer-conatiner">
            <div key={law._id} className="lawyer">
              <img
                src="https://img.freepik.com/premium-vector/lawyer-avatar-vector-illustration_822301-12.jpg"
                className="lawyer-image"
              />
              <br />

              <div className="d-flex flex-row justify-content-center">
                <span className="lawyer-name">{law.name} </span>
                <div className="verify-con">
                  <img
                    src="https://www.citypng.com/public/uploads/preview/hd-green-round-tick-check-mark-vector-icon-png-11640782287qc29zlw0at.png"
                    className="verified-image"
                  />
                </div>
              </div>

              <hr></hr>
              <div className="container">
                <div className="d-flex flex-row mt-2">
                  <span className="lawyer-exp">
                    Experience: {law.legalExperience}
                    <br />
                    Rating:
                    {law.rating}
                    <br />
                    {law.officeLocation}
                  </span>
                  <br />
                  <button
                    className="law-button"
                    onClick={handleLawyer}
                    value={law._id}
                  >
                    Contact Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LawyerList;
