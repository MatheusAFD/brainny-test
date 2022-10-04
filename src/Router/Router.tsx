import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Records";
import { Landing } from "../pages/Landing";
import { Login } from "../pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/meus-registros" element={<Dashboard />} />
    </Routes>
  );
}
