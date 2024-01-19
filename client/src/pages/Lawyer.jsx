import { useEffect, useState} from "react";

function Lawyer() {
  const [lawyer, setLawyer] = useState([]);

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

  useEffect(function () {
    async function postLawyer() {
      try {
        const response = await fetch("/api/Lawyers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "John Doe",
            officeLocation: "123 Main St",
            legalExperience: 5,
            practiceArea: ["Family Law", "Criminal Law"],
          }),
        });
        const data = await response.json();
        setLawyer(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    postLawyer();
  }, []);

  return (
    <div>
      {Array.isArray(lawyer) &&
        lawyer.map((law) => (
          <div key={law._id}>
            <h2>{law.name}</h2>
            <p>Office Location: {law.officeLocation}</p>
            <p>Legal Experience: {law.legalExperience}</p>
            <p>Practice Areas: {law.practiceArea.join(", ")}</p>
          </div>
        ))}
    </div>
  );
}

export default Lawyer;
