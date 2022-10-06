import { Route, Routes } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import { Landing } from "../pages/Landing";
import { Login } from "../pages/Login";
import { Records } from "../pages/Records";
import { PrivateRoute } from "./PrivateRoute";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute roleUser="admin" redirectTo="/login">
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/meus-registros"
        element={
          <PrivateRoute roleUser="user" redirectTo="/login">
            <Records />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
