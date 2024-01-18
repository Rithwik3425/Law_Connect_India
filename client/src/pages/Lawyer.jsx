import { useEffect, useState} from "react";

function Lawyer() {
  const [lawyers, setLawyer] = useState([]);

  useEffect(function () {
    async function getLawyer() {
      try {
        const response = await fetch("/api/Lawyers", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setLawyer(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getLawyer();
  }, []);

  return (
    <div>
      {Array.isArray(lawyers) && lawyers.map((lawyer) => (
        <div key={lawyer._id}>
          <h2>{lawyer.name}</h2>
          <p>Office Location: {lawyer.officeLocation}</p>
          <p>Legal Experience: {lawyer.legalExperience}</p>
          console.log(lawyer.officeLocation)
          <p>Practice Areas: {lawyer.practiceArea.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default Lawyer;
