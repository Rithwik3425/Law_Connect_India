import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h3>{lawyer[1]}</h3>
      <p>{lawyer[3]}</p>
      <p>{lawyer[6]}</p>
      <p>{lawyer[7]} Reviews</p>
      <div>
        About
        <div>{lawyer[2]}</div>
        <div>{lawyer[8]}</div>
        <div>
          Area of expertise
          <p>{lawyer[4].join(" | ")}</p>
        </div>
        <p>Fluent in {lawyer[5].join(", ")}</p>
      </div>
    </div>
  );
}

export default LawyerProfile;
