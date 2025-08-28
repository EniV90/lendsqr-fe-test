/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, type JSX } from "react";
import dropdown from "../../assets/icons/filter-results-button.svg";
import Contactform from "../ContactForm/contactform";
import viewIcon from "../../assets/icons/Vector.svg";
import blackList from "../../assets/icons/np_blacklist.svg";
import activate from "../../assets/icons/np_activate.svg";
import view from "../../assets/icons/np_view.svg";
import type { UserListItem } from "../../types";
import "./contact.scss";


interface ContactProps {
  data: UserListItem[];
}

export default function Contact({ data }: ContactProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | number | null>(
    null
  );

  const handleOpen = (): void => {
    setOpen(!open);
  };

  const handleDropdownClick = (userId: string | number): void => {
    setActiveDropdown(activeDropdown === userId ? null : userId);
  };

  const getStatusClass = (status: string): string => {
    switch (status?.toLowerCase()) {
      case "active":
        return "active";
      case "inactive":
        return "inactive";
      case "pending":
        return "pend";
      case "blacklisted":
        return "black";
      default:
        return "inactive"; // default fallback
    }
  };

  const formatStatus = (status: string): string => {
    if (!status) return "Inactive";
    return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
  };

  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);

      // Format the date as "MAY 15, 2020 10:00 AM"
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };

      return date
        .toLocaleDateString("en-US", options)
        .replace(/,/g, "") 
        .toUpperCase() 
        .replace(/(\w{3}) (\d+) (\d{4}) (\d+:\d+ [AP]M)/, "$1 $2, $3 $4"); 
    } catch (error) {
      return dateString; 
    }
  };

  return (
    <>
      <div className="contact">
        <table>
          <thead className="some">
            <tr>
              <th className="column1">
                ORGANIZATION
                <img src={dropdown} alt="icon" onClick={handleOpen} />
              </th>
              <th className="column2">
                USERNAME
                <img src={dropdown} alt="icon" />
              </th>
              <th className="column3">
                EMAIL
                <img src={dropdown} alt="icon" />
              </th>
              <th className="column4">
                PHONE NUMBER
                <img src={dropdown} alt="icon" />
              </th>
              <th className="column5">
                DATE JOINED
                <img src={dropdown} alt="icon" />
              </th>
              <th className="column6">
                STATUS
                <img src={dropdown} alt="icon" />
              </th>
              <th className="column7"></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user: UserListItem, index: number) => (
              <tr key={user.id || index}>
                <td>{user.organization || "N/A"}</td>
                <td>{user.userName || "N/A"}</td>
                <td>{user.email || "N/A"}</td>
                <td>{user.phoneNumber || "N/A"}</td>
                <td>{formatDate(user.dateJoined) || "N/A"}</td>
                <td>
                  <span className={getStatusClass(user.status || "inactive")}>
                    {formatStatus(user.status || "inactive")}
                  </span>
                </td>
                <td>
                  <img
                    src={viewIcon}
                    alt="icon"
                    onClick={() => handleDropdownClick(user.id)}
                    style={{
                      fontSize: "12px",
                      cursor: "pointer",
                      padding: "5px",
                    }}
                  />

                  <ul className="dropdown-content">
                    <a
                      href={`/UserDetails/${user.id}`}
                      style={{ textDecoration: "none" }}
                      onClick={() => setActiveDropdown(null)}
                    >
                      <li>
                        <img
                          src={view}
                          alt="icon"
                          style={{
                            fontSize: "16px",
                            color: "#545F7D",
                            marginRight: "8px",
                          }}
                        />
                        <span>View Details</span>
                      </li>
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      <li>
                        <img
                          src={blackList}
                          alt="icon"
                          style={{
                            fontSize: "16px",
                            color: "#545F7D",
                            marginRight: "8px",
                          }}
                        />
                        <span>Blacklist User</span>
                      </li>
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      <li>
                        <img
                          src={activate}
                          alt="icon"
                          style={{
                            fontSize: "16px",
                            color: "#545F7D",
                            marginRight: "8px",
                          }}
                        />
                        <span>Activate User</span>
                      </li>
                    </a>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {open && <Contactform />}
      </div>
    </>
  );
}
