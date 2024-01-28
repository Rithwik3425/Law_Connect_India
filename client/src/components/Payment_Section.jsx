import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Payment_Section() {
  const [payment, setpayment] = useState(false);
  const navigate = useNavigate();

  function handlePayment(e) {
    e.preventDefault();
    setpayment(true);
    navigate("/user/dashboard");
  }
  return (
    <>
    <h2 className="payment-heading">Payment</h2>
    <div className="container">
      <div className="d-flex flex-column justify-content-center">
    <div className="payment-con">
      <form action="">
        <div className="d-flex flex-row">
        <label htmlFor="email" className="mt-2">Email: </label>
        <input type="email" name="email" id="email" className="input-el-pay" />
        </div>
        <div className="d-flex flex-row">
          <label htmlFor="creditCard">Credit Card: </label>
          <br></br>
          <input
            type="text"
            name="creditCard"
            id="creditCard"
            className="input-el-pay2"
            placeholder="123 1243 1234 12"
          />
          <br></br>
          <label htmlFor="expiration" className="mt-2">Expiration: </label>
          <br></br>
          <input
            type="month"
            name="expiration"
            id="expiration"
            className="input-el-pay3"
            placeholder="MM/YYYY"
          />
          <br></br>
          <label htmlFor="cvc" className="mt-2">CVC: </label>
          <br></br>
          <input type="number" name="cvc" id="cvc" placeholder="*******" className="input-el-pay2" />
        </div>
        <div className="d-flex flex-row mt-5">
        <label htmlFor="country" className="mt-2">Country: </label>
        <br></br>
        <input type="text" name="country" id="country" className="input-el-pay2" value={"India"} />
        <br></br>
        </div>
        <div className="center-con">
        <button type="submit" onClick={handlePayment} className="pay-button">
          Pay now
        </button>
        </div>
      </form>
      <p>{payment && `Payment done`}</p>
    </div>
    </div>
    </div>
    </>
  );
}

export default Payment_Section;
