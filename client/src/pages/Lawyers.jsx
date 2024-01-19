import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchLawyer({ lawyer }) {
  const [search, setSearch] = useState("");
  function handleSearchSumbit(e) {
    e.preventDefault();
    console.log(search);
    console.log(lawyer);
  }
  return (
    <div>
      <h2>Search Lawyer</h2>
      <form onSubmit={handleSearchSumbit}>
        <input
          type="text"
          placeholder="Search Lawyer"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit" onSubmit={handleSearchSumbit}>
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
      <h2>List of Lawyers</h2>
      <ul>
        {lawyer.map((lawyer) => (
          <button
            key={lawyer._id}
            className="lawyer"
            onClick={handleLawyer}
            value={lawyer._id}
          >
            {lawyer.name}, Experience: {lawyer.legalExperience} , rating:
            {lawyer.rating}
          </button>
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
