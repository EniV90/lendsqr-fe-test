import user1 from "../../assets/icons/np_users.svg";
import user2 from "../../assets/icons/np_users 2.svg";
import icon1 from "../../assets/icons/icon-2.svg";
import icon2 from "../../assets/icons/icon-3.svg";
import "./cards.scss";
import type { JSX } from "react";

interface CardData {
  icon: string;
  iconClass: string;
  label: string;
  count: string;
}

export default function Cards(): JSX.Element {
  const cardData: CardData[] = [
    {
      icon: user1,
      iconClass: "user-icon",
      label: "users",
      count: "2,453",
    },
    {
      icon: user2,
      iconClass: "user-icon1",
      label: "active users",
      count: "2,453",
    },
    {
      icon: icon1,
      iconClass: "user-icon2",
      label: "users with loans",
      count: "12,453",
    },
    {
      icon: icon2,
      iconClass: "user-icon3",
      label: "users with savings",
      count: "102,453",
    },
  ];

  return (
    <div className="card-row">
      {cardData.map((card, index) => (
        <div key={index} className="cards">
          <div className={card.iconClass}>
            <img src={card.icon} alt={`${card.label} icon`} />
          </div>
          <p>{card.label}</p>
          <h3>{card.count}</h3>
        </div>
      ))}
    </div>
  );
}
