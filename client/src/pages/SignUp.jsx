import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [formdata, setFormdata] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }
      setLoading(false);
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }
  return (
    <div className="sign-con">
          <div className="d-flex flex-column"> 
          <div className="sign-card">
          <h1>Sign up</h1>
       <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="sign-el"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="sign-el"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="sign-el"
          onChange={handleChange}
        />
        <br/>
        <button className="sign-btn" disabled={loading}>{loading ? `loading` : `Sign up`}</button>
      </form>
      <div>
        <p>Have an account?</p>
        <Link to={"/signin"}>
          <span>Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
     
      
      </div>
      </div>
      </div>





  );
}

export default SignUp;
