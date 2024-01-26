import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchLawyer({ lawyer }) {
  const [search, setSearch] = useState("");
  function handleSearchSumbit(e) {
    e.preventDefault();
    console.log(search);
    console.log(lawyer);
  }
  return (
    <div className="law-con">
      <h2 className="law-head2">Search Lawyer</h2>
      <form onSubmit={handleSearchSumbit}>
        <input
          type="text"
          placeholder="Search Lawyer"
          className="search-law-el"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className="search-button" type="submit" onSubmit={handleSearchSumbit}>
          Search
        </button>
      </form>
    </div>
  );
}

function LawyerList({ lawyer }) {
  const navigate = useNavigate();
  function handleLawyer(e) {
    e.preventDefault();
    console.log(e.target.value);
    console.log(lawyer);
    navigate(`/lawyers/${e.target.value}`);
  }
  return (
    <div>
      <h2 className="list-heading">List of Lawyers</h2>
      <ul>
        {lawyer.map((lawyer) => (
          <div className="lawyer-container">
           
           
           
          <div
            key={lawyer._id}
            className="lawyer"
            onClick={handleLawyer}
            value={lawyer._id}
          >
            <div className="verify-con">
             {/* <div className="d-flex flex-row justify-content-center"> */}
              <img src="https://th.bing.com/th/id/OIP.rIpPnTCjSMIu3As7enoaAgAAAA?rs=1&pid=ImgDetMain" className="verified-image"
              />
            {/* </div> */}
            </div>

             <img src="https://img.freepik.com/premium-vector/lawyer-avatar-vector-illustration_822301-12.jpg" className="lawyer-image"
            />
            <br/>
            <span className="lawyer-name">
            {lawyer.name} </span>
            <hr></hr>
            <div className="container">
              
              <div className="d-flex flex-row mt-2">
            <span class="lawyer-exp">
            Experience: {lawyer.legalExperience}
            <br/>
             Rating:
            {lawyer.rating}
            </span>
            <br/>
            <button className="law-button">Contact Now</button>
          </div>
          </div>
          </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

function Lawyers() {
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
      <SearchLawyer lawyer={lawyer} />
      <LawyerList lawyer={lawyer} />
    </div>
  );
}

export default Lawyers;
