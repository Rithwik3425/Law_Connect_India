import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function LawyerProfile() {
  const { id } = useParams();
  const [lawyer, setLawyer] = useState([]);
  let lawyerdata = [];
  let lawyerArray = [];

  useEffect(function () {
    async function getLawyer() {
      try {
        const response = await fetch(`/api/Lawyers/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const res = await response.json();
        lawyerdata = res.data.alllawyers;
        lawyerArray = Object.values(lawyerdata);
        setLawyer([...lawyer, ...lawyerArray]);
        console.log(lawyer);
      } catch (error) {
        console.log(error);
      }
    }
    getLawyer();
  }, []);
  console.log(id);
  return (
    <div>
      {lawyer.map((lawy) => (
        <div key={lawy._id}>{lawy}</div>
      ))}
    </div>
  );
}

export default LawyerProfile;
