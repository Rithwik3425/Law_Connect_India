import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { LawyerContext } from "../../contexts/LawyerContext";

function LawyerProfile() {
  const { lawyerid } = useParams();
  const { lawyer, setLawyer } = useContext(LawyerContext);
  let lawyerdata = [];
  let lawyerArray = [];

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
  // console.log(lawyerid);
  return (
    <div className="lawyer-about-con2">
      <div className="lawyer-profile-con">
        <div className="lsp-con">
          <img
            src="https://img.freepik.com/premium-vector/lawyer-avatar-vector-illustration_822301-12.jpg"
            className="lawyer-image"
          />
          <div className="lawyer-profile">
            <h3 className="lawyer-about-heading">{lawyer[1]}</h3>
            <div className="container d-flex flex-row justify-content-center lawyer-exp2">
              <p>{lawyer[3]} Years of Experience</p>
              <div className="vertical-line"></div>
              <p>{lawyer[6]} Rating</p>
              <div className="vertical-line"></div>
              <p>{lawyer[7]} Reviews</p>
            </div>
          </div>
        </div>

        <div className="lawyer-pg-con">
          <h4 className="lawyer-about-heading">About Lawyer</h4>
          <div className="lawyer-loc">
            <span className="lawyer-span">Location: </span>
            {lawyer[2]}
          </div>
          <div className="lawyer-loc">
            <span className="lawyer-span">Description: </span>
            {lawyer[8]}
          </div>
          <div className="lawyer-loc">
            <span className="lawyer-span">Area of expertise:</span>
            <p>{lawyer[4]}</p>
          </div>
          <p className="lawyer-loc">
            <span className="lawyer-span">Fluent in </span>
            {lawyer[5]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LawyerProfile;
