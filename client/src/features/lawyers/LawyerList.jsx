import { useNavigate } from "react-router-dom";

function LawyerList({ lawyer }) {
  const navigate = useNavigate();
  function handleLawyer(e) {
    e.preventDefault();
    navigate(`/lawyers/${e.target.value}`);
  }
  return (
    <div>
      <h2 className="list-heading">List of Lawyers</h2>
      <ul>
        {lawyer.map((law) => (
          <div className="lawyer-container">
            <div key={law._id} className="lawyer">
              <div className="verify-con">
                <img
                  src="https://th.bing.com/th/id/OIP.rIpPnTCjSMIu3As7enoaAgAAAA?rs=1&pid=ImgDetMain"
                  className="verified-image"
                />
              </div>

              <img
                src="https://img.freepik.com/premium-vector/lawyer-avatar-vector-illustration_822301-12.jpg"
                className="lawyer-image"
              />
              <br />
              <span className="lawyer-name">{law.name} </span>
              <hr></hr>
              <div className="container">
                <div className="d-flex flex-row mt-2">
                  <span className="lawyer-exp">
                    Experience: {law.legalExperience}
                    <br />
                    Rating:
                    {law.rating}
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
      </ul>
    </div>
  );
}

export default LawyerList;
