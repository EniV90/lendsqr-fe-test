import { useState, type FormEvent, type ChangeEvent, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.scss";
import Logo from "../assets/icons/Group.svg";
import Illustration from "../assets/icons/pablo-sign-in 1.svg";
import type { LoginFormData } from "../types";



export default function Login(): JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const navigate = useNavigate();

  const togglePassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof LoginFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginFormData> = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept any valid email/password
      if (formData.email && formData.password) {
        // Store user session (you can use localStorage, context, etc.)
        localStorage.setItem('userToken', 'demo-token');
        localStorage.setItem('userEmail', formData.email);
        
        // Navigate to dashboard
        navigate("/Dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrors({ email: "Login failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = (): void => {
    // Add forgot password logic here
    alert("Forgot password functionality would be implemented here");
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
            
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
              
              <div className="input-group">
                <div className="password">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={errors.password ? "error" : ""}
                    style={{ paddingLeft: "16px" }}
                  />
                  <span onClick={togglePassword} className="password-toggle">
                    {showPassword ? "HIDE" : "SHOW"}
                  </span>
                </div>
                {errors.password && <span className="error-text">{errors.password}</span>}
              </div>
              
              <span className="forgot-password" onClick={handleForgotPassword}>
                Forgot password?
              </span>
              
              <div className="btn">
                <button 
                  type="submit" 
                  className="btn login-btn"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Log in"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}