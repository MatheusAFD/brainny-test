import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
  redirectTo: string;
  roleUser: string;
}

export function PrivateRoute(props: PrivateRouteProps) {
  const isAuthenticated = localStorage.getItem("token") !== null;
  const role = localStorage.getItem("roleUser");

  return isAuthenticated && role === "user" ? (
    <>{props.children}</>
  ) : (
    <Navigate to={props.redirectTo} />
  );
}
