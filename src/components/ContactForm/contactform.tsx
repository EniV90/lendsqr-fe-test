import calenderIcon from "../../assets/icons/np_calendar.svg";
import nextIcon from "../../assets/icons/np_next.svg";

import "./contactform.scss";
export default function contactform() {
  return (
    <div className="contactForm">
      <label>Organization</label>
      <div className="select">
        <select>
          <option value="select">Select</option>
        </select>
        <img
          src={nextIcon}
          alt="icon"
          style={{
            fontSize: "20px",
            color: "#DEE3EB",
            marginLeft: "-30px",
            marginBottom: "-7px",
          }}
        />
      </div>
      <label>Username</label>
      <input type="text" placeholder="User" />
      <label>Email</label>
      <input type="text" placeholder="Email" />
      <label>Date</label>
      <div className="select">
        <input type="text" placeholder="Date" />
        <img
          src={calenderIcon}
          alt="icon"
          style={{
            fontSize: "18px",
            color: "#DEE3EB",
            marginLeft: "-30px",
            marginBottom: "-7px",
          }}
        />
      </div>
      <label>Phone Number</label>
      <input type="type" placeholder="Phone Number" />
      <label>Status</label>
      <div className="select">
        <select>
          <option value="select">Select</option>
        </select>
        <img
          src={nextIcon}
          alt="icon"
          style={{
            fontSize: "20px",
            color: "#DEE3EB",
            marginLeft: "-30px",
            marginBottom: "-7px",
          }}
        />
      </div>

      <div className="formButton">
        <button>Reset</button>
        <button>Filter</button>
      </div>
    </div>
  );
}
