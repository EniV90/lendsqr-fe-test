import { customers, buisnesses, settings, logout } from "../../utils/Sidebar";
import briefCase from "../../assets/icons/briefcase 1.svg";
import arrowDown from "../../assets/icons/np_arrowDown 2.svg";
import home from "../../assets/icons/home 1.svg";
import "./sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="title">
        <img src={briefCase} alt="icon" style={{ marginRight: "10px" }} />
        <h4>Switch Organization</h4>
        <img src={arrowDown} alt="icon" style={{ marginRight: "5px" }} />
      </div>
      <div className="title2">
        <img src={home} alt="icon" style={{ marginRight: "10px" }} />
        <h4>DASHBOARD</h4>
      </div>
      <div className="head">
        <h4>CUSTOMERS</h4>
      </div>
      <ul>
        {customers.map((link, index) => (
          <li key={index} style={{ color: "3e4c67" }}>
            {link.icon}
            <div className="name">{link.name}</div>
          </li>
        ))}
      </ul>
      <div className="head">
        <h4>BUISNESSES</h4>
      </div>
      <ul>
        {buisnesses.map((link, index) => (
          <li key={index} style={{ color: "3e4c67" }}>
            {link.icon}
            <div className="name">{link.name}</div>
          </li>
        ))}
      </ul>
      <div className="head">
        <h4>SETTINGS</h4>
      </div>
      <ul>
        {settings.map((link, index) => (
          <li key={index} style={{ color: "3e4c67" }}>
            {link.icon}
            <div className="name">{link.name}</div>
          </li>
        ))}
      </ul>
      <div className="logout-section">
        <ul className="log-out">
          {logout.map((link, index) => (
            <li key={index} style={{ color: "3e4c67" }}>
              {link.icon}
              <div className="name">{link.name}</div>
            </li>
          ))}
          <span>v.1.2.0</span>
        </ul>
      </div>
    </div>
  );
}
