import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/collabrations" element={<Collabrations />} />
      <Route path="/contactus" element={<ContactUs />} /> */}
    </Routes>
  );
}

export default App;
