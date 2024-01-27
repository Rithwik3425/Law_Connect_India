import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function LawyerProfile() {
  const { lawyerid } = useParams();
  const [lawyer, setLawyer] = useState([]);
  let lawyerdata = [];
  let lawyerArray = [];

  useEffect(function () {
    async function getLawyer() {
      try {
        const response = await fetch(`/api/lawyers/${lawyerid}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const res = await response.json();
        lawyerdata = res.data.lawyerbyid;
        lawyerArray = Object.values(lawyerdata);
        setLawyer([...lawyer, ...lawyerArray]);
      } catch (error) {
        console.log(error);
      }
    }
    getLawyer();
  }, []);
  return (
    <div className="lawyer-about-con2">
    <div className="lawyer-profile-con">
      <div className="lsp-con">
      <img
        src="https://img.freepik.com/premium-vector/lawyer-avatar-vector-illustration_822301-12.jpg"
          className="lawyer-image"
      />
      <h3 className="lawyer-name2">{lawyer[1]}</h3>
      <div className="lawyer-exp2 d-flex flex-row justify-content-center">
      <p>{lawyer[3]} Years</p>
      <div class="vertical-line"></div>
      <p>{lawyer[6]} Rating</p>
      <div class="vertical-line"></div>
      <p>{lawyer[7]} Reviews</p>
      </div>
      </div>

      <div className="lawyer-pg-con">
        <h4 className="lawyer-about-heading">About Lawyer</h4>
        <div className="lawyer-loc"><span className="lawyer-span">Location: </span>{lawyer[2]}</div>
        <div className="lawyer-loc"><span className="lawyer-span">Description: </span>{lawyer[8]}</div>
        <div className="lawyer-loc">
          <span className="lawyer-span">Area of expertise:</span>
          <p>{lawyer[4]}</p>
        </div>
        <p className="lawyer-loc"><span className="lawyer-span">Fluent in </span>{lawyer[5]}</p>
      </div>

    </div>
    </div>
  );
}

export default LawyerProfile;
