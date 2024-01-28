import { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LawyerContext = createContext();

function LawyerProvider({ children }) {
  const navigate = useNavigate();
  const [lawyer, setLawyer] = useState([]);
  const [ratingsearch, setRatingSearch] = useState();
  const [legalExperience, setLegalExperience] = useState(0);
  const [search, setSearch] = useState("");

  function handleSearchSumbit(e) {
    e.preventDefault();
    console.log(search);
  }

  function handleSelectRatings(e) {
    if (e.target.value == " ") return;
    console.log(e.target.value);
    setRatingSearch(e.target.value);
  }

  function handleSelectLegalExperience(e) {
    if (e.target.value == " ") return;
    console.log(e.target.value);
    setLegalExperience(e.target.value);
  }

  function handleFilter(e) {
    e.preventDefault();
  }
  function handleLawyer(e) {
    navigate(`/lawyers/${e.target.value}`);
  }

  return (
    <LawyerContext.Provider
      value={{
        lawyer,
        ratingsearch,
        legalExperience,
        search,
        setLawyer,
        setSearch,
        handleSearchSumbit,
        handleSelectRatings,
        handleSelectLegalExperience,
        handleFilter,
        handleLawyer,
      }}
    >
      {children}
    </LawyerContext.Provider>
  );
}
export { LawyerProvider, LawyerContext };
