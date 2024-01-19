import { useEffect, useState } from "react";
// const LawyerList = ({ lawyerdata }) => {
//   return (
//     <div>
//       <h2>List of Lawyers</h2>
//       <ul>
//         {/* {lawyers.map((lawyer) => (
//           <li key={lawyer._id}>{lawyer.name}</li>
//         ))} */}
//         {lawyerdata.map((sublawyer, index) => {
//           {
//             sublawyer.map((lawyer, subindex) => {
//               console.log(lawyer);
//             });
//           }
//         })}
//       </ul>
//     </div>
//   );
// };

function Lawyer() {
  const [lawyer, setLawyer] = useState({});
  let lawyerdata = [];

  function Lawyer() {
    const [lawyers, setLawyer] = useState([]);

    useEffect(function () {
      async function getLawyer() {
        try {
          const response = await fetch("/api/Lawyers", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          const res = await response.json();
          setLawyer(res);
          // console.log(res.data.alllawyers);
          // console.log(typeof res.data.alllawyers);
          lawyerdata.push(res.data.alllawyers);
          console.log(lawyerdata);
          // const lawyerArray = Object.entries(res.data.alllawyers);
          // console.log(lawyerArray);
          // {
          //   lawyerdata.map((sublawyer, index) => {
          //     {
          //       sublawyer.map((lawyer, subindex) => {
          //         console.log(lawyer);
          //       });
          //     }
          //   });
          // }
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
      // <div>
      //   {Array.isArray(lawyer) &&
      //     lawyer.map((law) => (
      //       <div key={law._id}>
      //         <h2>{law.name}</h2>
      //         <p>Office Location: {law.officeLocation}</p>
      //         <p>Legal Experience: {law.legalExperience}</p>
      //         <p>Practice Areas: {law.practiceArea.join(", ")}</p>
      //       </div>
      //     ))}
      // </div>
      // <LawyerList data={lawyer.data.alllawyers} />
      <div>
        List of lawyers
        {/* <div>
        {Object.keys(lawyerdata).map((key, index) => (
          <div key={index}>
            <strong>{key}:</strong> {obj[key]}
          </div>
        ))}
      </div> */}
        {/* <div>{lawyerArray}</div> */}
        {Array.isArray(lawyers) &&
          lawyers.map((lawyer) => (
            <div key={lawyer._id}>
              <h2>{lawyer.name}</h2>
              <p>Office Location: {lawyer.officeLocation}</p>
              <p>Legal Experience: {lawyer.legalExperience}</p>
              console.log(lawyer.officeLocation)
              <p>Practice Areas: {lawyer.practiceArea.join(", ")}</p>
            </div>
          ))}
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
}

export default Lawyer;
