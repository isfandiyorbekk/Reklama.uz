import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function GuestRoute() {
  const [authStatus, setAuthStatus] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setAuthStatus(false);
        return;
      }

      try {
        const res = await fetch(
          "https://reklama-backend-ax7j.onrender.com/api/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (res.ok) {
          setAuthStatus(true);
        } else {
          if ([401, 403, 404].includes(res.status)) {
            localStorage.removeItem("token");
          }

          setAuthStatus(false);
        }
      } catch (error) {
        console.error("Auth xatosi:", error);
        setAuthStatus(false);
      }
    };

    checkAuth();
  }, []);

  if (authStatus === null) {
    return <div className="text-center py-10">Tekshirilmoqda...</div>;
  }

  if (authStatus) {
    return <Navigate to="/profil" replace />;
  }

  return <Outlet />;
}
