import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Lawyers from "./features/lawyers/Lawyers";
import LawyerProfile from "./features/lawyers/LawyerProfile";
import PageNotFound from "./pages/PageNotFound";
import AboutUs_Section from "./components/AboutUs_Section";
import Collab_Section from "./components/Collab_Section";
import PageNav from "./components/PageNav";
import ContactUs_Section from "./components/ContactUs_Section";
import Dashboard from "./features/lawyers/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/aboutUs"
        element={
          <>
            <PageNav />
            <AboutUs_Section />
          </>
        }
      />
      <Route
        path="/collabwithus"
        element={
          <>
            <PageNav />
            <Collab_Section />
          </>
        }
      />
      <Route
        path="/contactUs"
        element={
          <>
            <PageNav />
            <ContactUs_Section />
          </>
        }
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/lawyers" element={<Lawyers />} />
      <Route path="/lawyers/:lawyerid" element={<LawyerProfile />} />
      <Route path="/lawyers/dashboard" element={<Dashboard />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
