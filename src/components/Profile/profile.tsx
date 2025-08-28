import { MdStar, MdStarBorder } from "react-icons/md";
import avatar from "../../assets/icons/avatar.svg"
import type { UserDetail } from "../../types";
import "./profile.scss";
import type { JSX } from "react";



interface ProfileProps {
  data: UserDetail;
}

export default function Profile({ data }: ProfileProps): JSX.Element {
  const profile = data.profile;

  return (
    <div className="userprofile">
      <div className="profile">
        <div className="general">
          <div className="image">
            <img src={avatar} alt="userProfile" />
          </div>
          <div className="name">
            <h3>
              {profile.firstName} {profile.lastName}
            </h3>
            <span>LSQFf587g90</span>
          </div>
        </div>
        <div className="rate">
          <span>User's Tier</span>
          <span className="star">
            <MdStar style={{ fontSize: "22px" }} />
            <MdStarBorder style={{ fontSize: "22px" }} />
            <MdStarBorder style={{ fontSize: "22px" }} />
          </span>
        </div>
        <div className="price">
          <h3>₦{data.accountBalance || "200,000.00"}</h3>
          <span>9912345678/Providus Bank</span>
        </div>
      </div>
      <ul>
        <li>General Details</li>
        <li>Document</li>
        <li>Bank Details</li>
        <li>Loans</li>
        <li>Savings</li>
        <li>App and Systems</li>
      </ul>
    </div>
  );
}
