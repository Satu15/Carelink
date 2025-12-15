import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Emergency from "./pages/Emergency";
import Medicine from "./pages/Medicine";
import Clinics from "./pages/Clinics";
import Blood from "./pages/Blood";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Router>
      <Navbar />

      <div className="pt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blood" element={<Blood />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}
