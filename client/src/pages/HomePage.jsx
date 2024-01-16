import Home_Section from "../components/Home_Section";
import PageNav from "../components/PageNav";
import AboutUs_Section from "../components/AboutUs_Section";
import Services_Section from "../components/Services_Section";
import Collab_Section from "../components/Collab_Section";

function HomePage() {
  return (
    <div>
      <PageNav />
      <Home_Section />
      <AboutUs_Section />
      <Services_Section />
      <Collab_Section />
    </div>
  );
}

export default HomePage;
