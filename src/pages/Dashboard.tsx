import Nav from "../components/Nav/nav";
import Sidebar from "../components/Sidebar/sidebar";
import "../styles/dashboard.scss";
export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-nav">
        <Nav />
      </div>
      <div className="home">
        <div className="dash-sidebar">
          <div className="bar">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
