// import user1 from "../../assets/icons/np_users.svg";
// import user2 from "../../assets/icons/np_users 2.svg";
// import icon1 from "../../assets/icons/icon-2.svg";
// import icon2 from "../../assets/icons/icon-3.svg";
// import "./cards.scss";
// export default function Cards() {
//   return (
//     <div className="card-row">
//       <div className="cards">
//         <div className="user-icon">
//           <img src={user1} alt="icon" />
//         </div>
//         <p>users</p>
//         <h3>2,453</h3>
//       </div>
//       <div className="cards">
//         <div className="user-icon1">
//           <img src={user2} alt="icon" />
//         </div>
//         <p>active users</p>
//         <h3>2,453</h3>
//       </div>
//       <div className="cards">
//         <div className="user-icon2">
//           <img src={icon1} alt="icon" />
//         </div>
//         <p>users with loans</p>
//         <h3>12,453</h3>
//       </div>
//       <div className="cards">
//         <div className="user-icon3">
//           <img src={icon2} alt="icon" />
//         </div>
//         <p>users with savings</p>
//         <h3>102,453</h3>
//       </div>
//     </div>
//   );
// }

import user1 from "../../assets/icons/np_users.svg";
import user2 from "../../assets/icons/np_users 2.svg";
import icon1 from "../../assets/icons/icon-2.svg";
import icon2 from "../../assets/icons/icon-3.svg";
import "./cards.scss";

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
