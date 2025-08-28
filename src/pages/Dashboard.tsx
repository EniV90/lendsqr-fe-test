import Nav from "../components/Nav/nav";
import Sidebar from "../components/Sidebar/sidebar";
import Cards from "../components/Cards/cards";
import Contact from "../components/Contact/contact";
import Pagination from "../components/Pagination/pagination";
import "../styles/dashboard.scss";
import { useEffect, useState } from "react";

// Import simple storage utilities
import { saveUsersToStorage, getUsersFromStorage } from "../utils/Storage";
import type { UserListItem } from "../types";

// Get API URL from environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Dashboard(): JSX.Element {
  const [data, setData] = useState<UserListItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(9);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch users from API
  const fetchUsersFromAPI = async (): Promise<UserListItem[]> => {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  };

  // Load users (try cache first, then API)
  const loadUsers = async (forceRefresh: boolean = false): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      if (!forceRefresh) {
        const cachedUsers = getUsersFromStorage();
        if (cachedUsers.length > 0) {
          console.log(`Loaded ${cachedUsers.length} users from localStorage`);
          setData(cachedUsers);
          setLoading(false);
          return;
        }
      }

      const users = await fetchUsersFromAPI();
      saveUsersToStorage(users);
      setData(users);
      console.log(`Loaded ${users.length} users from API`);
    } catch (err) {
      console.error("Error loading users:", err);
      setError(err instanceof Error ? err.message : "Failed to load users");

      // Fallback to cache
      const cachedUsers = getUsersFromStorage();
      if (cachedUsers.length > 0) {
        console.log("Using cached data as fallback");
        setData(cachedUsers);
      }
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    loadUsers();
  }, []);

  // Reset to first page when data changes
  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  // Calculate pagination
  const indexOfLastPost: number = currentPage * itemsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - itemsPerPage;
  const currentItems: UserListItem[] = data.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  // Handle loading state
  if (loading) {
    return (
      <div className="dashboard">
        <div className="dashboard-nav">
          <Nav />
        </div>
        <div className="home">
          <div className="bar">
            <Sidebar />
          </div>

          <div className="card-container">
            <div className="card">
              <h2>Users</h2>
              <div className="loading">Loading users...</div>
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
        <div className="bar">
          <Sidebar />
        </div>

        <div className="card-container">
          <div className="card">
            <div className="header-section">
              <h2>Users</h2>
              <div className="controls">
                {error && <span className="error-indicator">⚠️ {error}</span>}
              </div>
            </div>

            <div className="dash-contact">
              <Cards />
              {data.length > 0 ? (
                <>
                  <Contact data={currentItems} />
                  <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={data.length}
                    paginate={paginate}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                </>
              ) : (
                <div className="no-data">
                  <p>No users found</p>
                  {error && <p className="error-message">⚠️ {error}</p>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
