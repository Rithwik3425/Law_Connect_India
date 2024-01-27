import { useState } from "react";
import SideBar from "./SideBar";
import Meeting_Section from "../../components/Meeting_Section";
import Payment_Section from "../../components/Payment_Section";
import Reviews_Section from "../../components/Reviews_Section";
import My_Profile_Section from "../../components/My_Profile_Section";
function Dashboard() {
  const [page, setpage] = useState("meetings");
  return (
    <div>
      <SideBar page={page} setpage={setpage} />
      <div className="rightpart">
        {page === "meetings" && <Meeting_Section />}
        {page === "payment" && <Payment_Section />}
        {page === "reviews" && <Reviews_Section />}
        {page === "profile" && <My_Profile_Section />}
      </div>
    </div>
  );
}

export default Dashboard;
