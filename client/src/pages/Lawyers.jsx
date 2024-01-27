import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchLawyer({ lawyer }) {
  const [search, setSearch] = useState("");
  function handleSearchSumbit(e) {
    e.preventDefault();
    // console.log(search);
    // console.log(lawyer);
  }
  return (
    <>
      <button></button>
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
          <button
            className="search-button"
            type="submit"
            onSubmit={handleSearchSumbit}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

function LawyerList({ lawyer }) {
  const navigate = useNavigate();
  // console.log(lawyer.length);
  // console.log(lawyer);
  // {
  // lawyer.map((law) => console.log(law._id));
  // }
  function handleLawyer(e) {
    e.preventDefault();
    // navigate(`/lawyers/${e.target.value}`);
    console.log(e.target.value);
    navigate(`/lawyers/${e.target.value}`);
  }
  return (
    <div>
      <h2 className="list-heading">List of Lawyers</h2>
      <div className="lawyer-list">
        {lawyer.map((law) => (
          <div key={law._id} className="lawyer">
            <div className="verify-con">
              {/* <div className="d-flex flex-row justify-content-center"> */}
              <img
                src="https://th.bing.com/th/id/OIP.rIpPnTCjSMIu3As7enoaAgAAAA?rs=1&pid=ImgDetMain"
                className="verified-image"
              />
              {/* </div> */}
            </div>

            <img
              src="https://img.freepik.com/premium-vector/lawyer-avatar-vector-illustration_822301-12.jpg"
              className="lawyer-image"
            />
            <br />
            <span className="lawyer-name">{law.name} </span>
            {/* <span className="lawyer-name">{lawy._id} </span> */}
            <hr></hr>
            <div className="container">
              <div className="d-flex flex-row mt-2">
                <span className="lawyer-exp">
                  Experience: {law.legalExperience}
                  <br />
                  Rating:
                  {law.rating}
                </span>
                <br />
                <button
                  className="law-button"
                  onClick={handleLawyer}
                  value={law._id}
                >
                  Contact Now
                </button>
                {/* </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
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
        const response = await fetch("/api/lawyers", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const res = await response.json();
        lawyerdata = res.data.alllawyers;
        lawyerArray = Object.values(lawyerdata);
        setLawyer(lawyerArray);
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
