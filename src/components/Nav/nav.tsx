import Search from "../Search/search";
import logo from "../../assets/icons/Group.svg";
import { HiOutlineBell } from "react-icons/hi";
import { RiArrowDownSFill } from "react-icons/ri";
import image from "../../assets/icons/image 4.svg"
import "./nav.scss";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search">
          <Search />
        </div>
        <div className="userProfile">
          <a href="#">Docs</a>
          <div className="bell">
            <HiOutlineBell />
          </div>
          <img src={image} alt="logo" />
          <p>Adedeji</p>
          <RiArrowDownSFill />
        </div>
      </div>
    </div>
  );
}
