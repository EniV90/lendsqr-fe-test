import { useState } from "react";
import "../styles/login.scss";
import Logo from "../assets/icons/Group.svg";
import Illustration from "../assets/icons/pablo-sign-in 1.svg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-img">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="illustration">
            <img src={Illustration} alt="image" />
          </div>
        </div>
        <div className="login-signin">
          <div className="container">
            <h1>Welcome!</h1>
            <p>Enter Details to login.</p>
            <input type="email" placeholder="Email" />
            <div className="password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                style={{ paddingLeft: "16px" }}
              />
              <span onClick={togglePassword}>SHOW</span>
            </div>
            <span>Forgot password?</span>
            <div className="btn">
              <a href="/Dashboard">
                <button type="button" className="btn">
                  Log in
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
