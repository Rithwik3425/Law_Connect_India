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

  useEffect(function () {
    async function getLawyer() {
      try {
        const response = await fetch("/api/Lawyers", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const res = await response.json();
        setLawyer(res);
       // console.log(res);
        let c=0;
        // console.log(res.data.alllawyers);
        // console.log(typeof res.data.alllawyers);
        lawyerdata.push(res.data.alllawyers);
       console.log(lawyerdata);
        // const lawyerArray = Object.entries(res.data.alllawyers);
        // console.log(lawyerArray);
        {
          lawyerdata.map((sublawyer, index) => {
            {
              sublawyer.map((lawyer, subindex) => {
                //console.log(lawyer);
                c++;
              });
            }
          });
        }
     //   console.log(c);
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
      List of lawyers
      {/* <div>
        {Object.keys(lawyerdata).map((key, index) => (
          <div key={index}>
            <strong>{key}:</strong> {obj[key]}
          </div>
        ))}
      </div> */}
      {/* <div>{lawyerArray}</div> */}
    </div>
  );
}

export default Lawyer;