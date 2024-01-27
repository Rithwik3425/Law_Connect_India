import { useContext } from "react";
import { LawyerContext } from "../../contexts/LawyerContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchLawyer() {
  const {
    search,
    setSearch,
    handleSearchSumbit,
    handleSelectRatings,
    handleSelectLegalExperience,
    handleFilter,
  } = useContext(LawyerContext);
  return (
    <div className="law-con">
      <form onSubmit={handleSearchSumbit}>
        <input
          type="text"
          placeholder="Search Lawyer"
          className="search-law-el"
          value={search}
          onSelect={(e) => {
            setSearch(e.target.value);
          }}
        />
        <label htmlFor="rating" className="search-label">Rating above: </label>
        <select name="rating" id="rating" onChange={handleSelectRatings}>
          <option value=" "></option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <label htmlFor="legalExperience" className="search-label">legalExperience: </label>
        <select
          name="legalExperience"
          id="legalExperience"
          onChange={handleSelectLegalExperience}
        >
          <option value=" "></option>
          <option value="1-10">1-10</option>
          <option value="11-20">11-20</option>
          <option value="21-30">21-30</option>
          <option value="31-40">31-40</option>
          <option value="41-50">41-50</option>
        </select>
        <button className="filter-button" type="submit" onClick={handleFilter}>
          Filter
        </button>
      </form>
    </div>
  );
}

export default SearchLawyer;
