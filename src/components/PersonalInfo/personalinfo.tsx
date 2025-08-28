import "./personalinfo.scss"
import type { UserDetail } from "../../types";
import type { JSX } from "react";



interface PersonalInfoProps {
  data: UserDetail;
}

export default function PersonalInfo({ data }: PersonalInfoProps): JSX.Element {
  const guarantor = data.guarantor;
  const profile = data.profile;
  const education = data.education;
  const socials = data.socials;

  return (
    <div className="info">
      <h3>Personal Information</h3>
      <div className="infotable">
        <table>
          <tbody>
            <tr>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>BVN</th>
              <th>Gender</th>
            </tr>
            <tr>
              <td>
                {profile?.firstName} {profile?.lastName}
              </td>
              <td>{profile?.phoneNumber || "N/A"}</td>
              <td>{profile?.personalEmail || "N/A"}</td>
              <td>{profile?.bvn || "N/A"}</td>
              <td>{profile?.gender || "N/A"}</td>
            </tr>
            <tr>
              <th>Marital Status</th>
              <th>Children</th>
              <th>Type of Residence</th>
            </tr>
            <tr>
              <td>Single</td>
              <td>None</td>
              <td>Parent's Apartment</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Education and Employment</h3>
      <div className="infotable">
        <table>
          <tbody>
            <tr>
              <th>Level of Education</th>
              <th>Employment Status</th>
              <th>Sector of Employment</th>
              <th>Duration of Employment</th>
            </tr>
            <tr>
              <td>{education?.level || "N/A"}</td>
              <td>{education?.employmentStatus || "N/A"}</td>
              <td>{education?.sector || "N/A"}</td>
              <td>{education?.duration || "N/A"}</td>
            </tr>
            <tr>
              <th>Office Email</th>
              <th>Monthly Income</th>
              <th>Loan Repayment</th>
            </tr>
            <tr>
              <td>{education?.officeEmail || "N/A"}</td>
              <td>
                {education?.monthlyIncome && education.monthlyIncome.length > 0
                  ? `₦${education.monthlyIncome[0]} - ₦${
                      education.monthlyIncome[1] || education.monthlyIncome[0]
                    }`
                  : "₦200,000.00 - ₦400,000.00"}
              </td>
              <td>₦{data.loanRepayment || "40,000"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Socials</h3>
      <div className="infotable">
        <table>
          <tbody>
            <tr>
              <th>Twitter</th>
              <th>Facebook</th>
              <th>Instagram</th>
            </tr>
            <tr>
              <td>{socials?.twitter || "N/A"}</td>
              <td>{socials?.facebook || "N/A"}</td>
              <td>{socials?.instagram || "N/A"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Guarantor</h3>
      <div className="infotable">
        <table>
          <tbody>
            <tr>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Relationship</th>
            </tr>
            <tr>
              <td>
                {guarantor?.firstName || "N/A"} {guarantor?.lastName || ""}
              </td>
              <td>{guarantor?.phoneNumber || "N/A"}</td>
              <td>{guarantor?.address || "N/A"}</td>
              <td>Sister</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="infotable">
        <table>
          <tbody>
            <tr>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>BVN</th>
              <th>Gender</th>
            </tr>
            <tr>
              <td>
                {profile?.firstName || "N/A"} {profile?.lastName || ""}
              </td>
              <td>{profile?.phoneNumber || "N/A"}</td>
              <td>{data.email || "N/A"}</td>
              <td>{profile?.bvn || "N/A"}</td>
              <td>{profile?.gender || "N/A"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
