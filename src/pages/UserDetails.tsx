import Nav from "../components/Nav/nav";
import Sidebar from "../components/Sidebar/sidebar";
import back from "../assets/icons/np_back.svg";
import Profile from "../components/Profile/profile";
import PersonalInfo from "../components/PersonalInfo/personalinfo";

import "../styles/userdetails.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { UserDetail } from "../types";

// Keep storage utilities (we still cache)
import { saveUserToStorage, getUserFromStorage } from "../utils/Storage";

// API base
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function UserDetails(): JSX.Element {
  const [data, setData] = useState<UserDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { userId } = useParams<{ userId: string }>();
  const currentUserId = userId || "3";

  // Fetch user from API
  const fetchUserFromAPI = async (id: string): Promise<UserDetail> => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  };

  // Load user (try cache first, then API)
  const loadUser = async (forceRefresh: boolean = false): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      if (!forceRefresh) {
        const cachedUser = getUserFromStorage(currentUserId);
        if (cachedUser) {
          setData(cachedUser);
          setLoading(false);
          return;
        }
      }

      const user = await fetchUserFromAPI(currentUserId);
      saveUserToStorage(user);
      setData(user);
    } catch (err) {
      console.error("Error loading user:", err);
      setError(err instanceof Error ? err.message : "Failed to load user");

      // Fallback to cache if available
      const cachedUser = getUserFromStorage(currentUserId);
      if (cachedUser) setData(cachedUser);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, [currentUserId]);

  if (loading) {
    return (
      <div className="dashboard">
        <div className="dashboard-nav">
          <Nav />
        </div>
        <div className="home">
          <div className="dash_sidebar">
            <div className="bar">
              <Sidebar />
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <h2>Loading user details...</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-nav">
        <Nav />
      </div>
      <div className="home">
        <div className="dash_sidebar">
          <div className="bar">
            <Sidebar />
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <a href="/Dashboard" className="arrow">
              <img src={back} alt="leftarrow" />
              <p>Back to Users</p>
            </a>

            <div className="user">
              <h2>User Details</h2>
              <div className="arrow-btn">
                <button>BlackList User</button>
                <button>Activate User</button>
              </div>
            </div>

            {data ? (
              <div className="dash-contact">
                <div className="user-profile">
                  <Profile data={data} />
                </div>
                <div className="user-profile">
                  <PersonalInfo data={data} />
                </div>
              </div>
            ) : (
              <div className="no-data">
                <h3>No user data available</h3>
                {error && (
                  <div className="error-details">
                    <p>Error: {error}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
