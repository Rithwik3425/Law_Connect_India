import { useEffect, useState } from "react";

const LawyerList = ({ lawyer }) => {
  return (
    <div>
      <h2>List of Lawyers</h2>
      <ul>
        {lawyer.map((lawyer) => (
          <li key={lawyer._id} className="lawyer">
            {lawyer.name}, Experience: {lawyer.legalExperience} , rating:
            {lawyer.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

function Lawyer() {
  const [lawyer, setLawyer] = useState([]);
  let lawyerdata = [];
  let lawyerArray = [];

  useEffect(function () {
    async function getLawyer() {
      try {
        const response = await fetch("/api/Lawyers", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const res = await response.json();
        lawyerdata = res.data.alllawyers;
        lawyerArray = Object.values(lawyerdata);
        setLawyer([...lawyer, ...lawyerArray]);
      } catch (error) {
        console.log(error);
      }
    }
    getLawyer();
  }, []);

  // useEffect(function () {
  //   async function postLawyer() {
  //     try {
  //       const response = await fetch("/api/Lawyers", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           name: "John Doe",
  //           officeLocation: "123 Main St",
  //           legalExperience: 5,
  //           practiceArea: ["Family Law", "Criminal Law"],
  //         }),
  //       });
  //       const data = await response.json();
  //       setLawyer(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   postLawyer();
  // }, []);

  return (
    <div>
      <LawyerList lawyer={lawyer} />
    </div>
  );
}

export default Lawyer;
