import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const base =
    "px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200";

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">

        {/* LEFT — LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Carelink logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-xl font-bold text-teal-700">
            Carelink
          </span>
        </NavLink>

        {/* RIGHT — NAV (PUSHED HARD RIGHT) */}
        <div className="ml-auto flex items-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${base} ${
                isActive
                  ? "bg-teal-100 text-teal-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink to="/blood" className={`${base} text-red-600 hover:bg-red-50`}>
            Blood
          </NavLink>

          <NavLink to="/clinics" className={`${base} text-teal-600 hover:bg-teal-50`}>
            Clinics
          </NavLink>

          <NavLink to="/medicine" className={`${base} text-green-600 hover:bg-green-50`}>
            Medicine
          </NavLink>

          <NavLink to="/emergency" className={`${base} text-red-700 hover:bg-red-100`}>
            Emergency
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${base} ${
                isActive
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
}
