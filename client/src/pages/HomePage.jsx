import Home_Section from "../components/Home_Section";
import PageNav from "../components/PageNav";
import AboutUs_Section from "../components/AboutUs_Section";
import Services_Section from "../components/Services_Section";
import Collab_Section from "../components/Collab_Section";
import ContactUs_Section from "../components/ContactUs_Section";
import Footer_Section from "../components/Footer_Section";

function HomePage() {
  return (
    <>
      <PageNav />
      <Home_Section />
      <AboutUs_Section />
      <Services_Section />
      <Collab_Section />
      <ContactUs_Section />
      <Footer_Section />
    </>
  );
}

export default HomePage;
