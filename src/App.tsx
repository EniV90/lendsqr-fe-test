import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/UserDetails" element={<UserDetails />} />
        <Route path="/UserDetails/:pid" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
