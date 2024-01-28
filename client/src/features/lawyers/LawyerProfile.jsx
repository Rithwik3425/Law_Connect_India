import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { LawyerContext } from "../../contexts/LawyerContext";

function LawyerProfile() {
  const { lawyerid } = useParams();
  const navigate = useNavigate();
  const { lawyer, setLawyer } = useContext(LawyerContext);
  let lawyerdata = [];
  let lawyerArray = [];

  function handleClickBook(e) {
    e.preventDefault();
    navigate("/user/payment");
  }

  useEffect(function () {
    async function getLawyer() {
      try {
        const response = await fetch(`/api/lawyers/${lawyerid}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const res = await response.json();
        lawyerdata = res.data.lawyerbyid;
        lawyerArray = Object.values(lawyerdata);
        setLawyer([...lawyer, ...lawyerArray]);
      } catch (error) {
        console.log(error);
      }
    }
    getLawyer();
  }, []);
  return (
    <div className="lawyer-about-con2">
    <div className="container">
    <div className="d-flex flex-row justify-content-center">
    
      <div className="lawyer-profile-con">
        <div className="lsp-con">
          <img
            src="https://img.freepik.com/premium-vector/lawyer-avatar-vector-illustration_822301-12.jpg"
            className="lawyer-image"
          />
          <div className="lawyer-profile">
            <h3 className="lawyer-about-heading">{lawyer[1]}</h3>
            <div className="container d-flex flex-row justify-content-center lawyer-exp2">
              <p>{lawyer[4]} Years of Experience</p>
              <div className="vertical-line"></div>
              <p>{lawyer[8]} Rating</p>
              <div className="vertical-line"></div>
              <p>{lawyer[9]} Reviews</p>
            </div>
          </div>

        <div className="lawyer-pg-con">
          <h4 className="lawyer-about-heading">About Lawyer</h4>
          <div className="lawyer-loc">
            <span className="lawyer-span">Office Location: </span>
            {lawyer[2]}
          </div>
          <div className="lawyer-loc">
            <span className="lawyer-span">Description: </span>
            {lawyer[10]}
          </div>
          <div className="lawyer-loc">
            <span className="lawyer-span">Area of expertise:</span>
            <p>{lawyer[6]}</p>
          </div>
          <p className="lawyer-loc">
            <span className="lawyer-span">Fluent in </span>
            {lawyer[7]}
          </p>
        </div>
      </div>
      </div>


    
      <div className="book-con">
        <h1 className="book-head">
          Book 1 on 1 service at, <br /><span className="book-span">{lawyer[5]}/-</span>
        </h1>
        <button onClick={handleClickBook} className="book-button">Book Now</button>
      </div>


    </div>
    </div>
    </div>
  );
}

export default LawyerProfile;
