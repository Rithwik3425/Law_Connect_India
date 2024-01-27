import { useContext, useEffect, useState } from "react";
import LawyerList from "./LawyerList";
import SearchLawyer from "./SearchLawyer";
import "bootstrap/dist/css/bootstrap.min.css";
import { LawyerContext } from "../../contexts/LawyerContext";

function Lawyers() {
  const { setLawyer, ratingsearch } = useContext(LawyerContext);
  let lawyerdata = [];
  let lawyerArray = [];

  useEffect(function () {
    async function getLawyer() {
      try {
        if (ratingsearch) {
          const response = await fetch(
            `/api/lawyers/?rating[gte]=${ratingsearch}`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }
          );
          const res = await response.json();
          lawyerdata = res.data.alllawyers;
          lawyerArray = Object.values(lawyerdata);
          setLawyer(lawyerArray);
        } else {
          const response = await fetch("/api/lawyers", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          const res = await response.json();
          lawyerdata = res.data.alllawyers;
          lawyerArray = Object.values(lawyerdata);
          setLawyer(lawyerArray);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getLawyer();
  }, []);

  return (
    <div>
      <SearchLawyer />
      <LawyerList />
    </div>
  );
}

export default Lawyers;
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
