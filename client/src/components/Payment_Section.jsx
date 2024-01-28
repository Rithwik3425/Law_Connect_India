import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment_Section() {
  const [payment, setpayment] = useState(false);
  const navigate = useNavigate();

  function handlePayment(e) {
    e.preventDefault();
    setpayment(true);
    navigate("/user/dashboard");
  }
  return (
    <div>
      <form action="">
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" />
        <div>
          <label htmlFor="creditCard">Credit Card: </label>
          <input
            type="text"
            name="creditCard"
            id="creditCard"
            placeholder="123 1243 1234 12"
          />
          <label htmlFor="expiration">Expiration</label>
          <input
            type="month"
            name="expiration"
            id="expiration"
            placeholder="MM/YYYY"
          />
          <label htmlFor="cvc">CVC</label>
          <input type="number" name="cvc" id="cvc" placeholder="*******" />
        </div>
        <label htmlFor="country">Country</label>
        <input type="text" name="country" id="country" value={"India"} />
        <button type="submit" onClick={handlePayment}>
          Pay now
        </button>
      </form>
      <p>{payment && `Payment done`}</p>
    </div>
  );
}

export default Payment_Section;
