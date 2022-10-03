import { Route, Routes } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { Login } from "../pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
