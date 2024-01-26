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
      {lawyer.map((lawy) => (
        <div key={lawy._id}>{lawy}</div>
      ))}
    </div>
  );
}

export default LawyerProfile;
