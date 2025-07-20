import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

interface PrivatePageProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivatePageProps> = ({ children }) => {
  const token = Cookies.get("token");  

  if (!token) {
    return <Navigate to="/loginPage" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
