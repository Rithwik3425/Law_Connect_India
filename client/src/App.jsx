
// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import HomePage from "./pages/HomePage";
// import AboutUs from "./pages/AboutUs";
// import Services from "./pages/Services";
// import Collabrations from "./pages/Collabrations";
// import ContactUs from "./pages/ContactUs";
import Axios from "axios";

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";


function App() {
  const [backdata,setbackdata]=useState("");

  const fetchlaw=async()=>{
    const {data}=await Axios.get("/api/law");
    console.log(data);
  }
  useEffect(()=>{
    fetchlaw();
  },[]);
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/collabrations" element={<Collabrations />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes> */}
      <h1>hello</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/collabrations" element={<Collabrations />} />
        <Route path="/contactus" element={<ContactUs />} /> */}
      </Routes>
    </div>
  );
}

export default App;
