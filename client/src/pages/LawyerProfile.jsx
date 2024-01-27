import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
  // console.log(lawyerid);
  return (
    <div className="lawyer-profile-con">
       <img
                src="https://img.freepik.com/premium-vector/lawyer-avatar-vector-illustration_822301-12.jpg"
                className="lawyer-image"
              />
      <div className="lawyer-profile">
      <h3>{lawyer[1]}</h3>
      <div className="container d-flex flex-row">
      <p className="experience">{lawyer[3]}</p>
      <p>{lawyer[6]}</p>
      <p>{lawyer[7]} Reviews</p>
      </div>
      <div>
        About
        <div>{lawyer[2]}</div>
        <div>{lawyer[8]}</div>
        <div>
          Area of expertise
          <p>{lawyer[4]}</p>
        </div>
        <p>Fluent in {lawyer[5]}</p>
      </div>
    </div>
    </div>
  );
}

export default LawyerProfile;
