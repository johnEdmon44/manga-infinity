import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import PropTypes from "prop-types";
import { fetchUser } from "../services/fetchUser";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const syncUser = async () => {
      const backendUser = await fetchUser();
      if (backendUser) {
        setUser(backendUser);
        localStorage.setItem("user", JSON.stringify(backendUser));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
      setLoading(false);
    };
    syncUser();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/logout`, {
        method: "POST",
        credentials: "include",
      });
      if (res.ok) {
        setUser(null);
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ user, setUser, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = { children: PropTypes.node.isRequired };

export default AuthProvider;