import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
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
      const response = await fetch("/api/auth/signin", {
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
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }
  return (
    <div className="sign-con">
    <div className="container">
      <div className="row">
        <div className="col-12">
    <div className="d-flex flex-column"> 
    <div className="sign-card">

<h1>Sign in</h1>
<form onSubmit={handleSubmit}>
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
  <button className="sign-btn" disabled={loading}>{loading ? `loading` : `Sign in`}</button>
</form>

  <p>Don't have an account?</p>
  <Link to={"/signup"}>
    <span>Sign up</span>
  </Link>

{error && <p className="text-red-500 mt-3">{error}</p>}
</div>
</div>
</div>
</div>
</div>
</div>

);
}

export default SignIn;