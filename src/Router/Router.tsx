import { Route, Routes } from "react-router-dom";
import { Landing } from "../pages/Landing";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}
