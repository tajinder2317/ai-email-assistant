import { NavLink } from "react-router-dom";

const linkBase =
  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-900";

export default function Navbar() {
  return (
    <header className="border-b border-slate-900 bg-slate-950/60 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="text-sm font-semibold tracking-wide">
          AI Email Assistant
        </NavLink>

        <nav className="flex items-center gap-1 text-slate-200">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-slate-900 text-white" : ""}`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-slate-900 text-white" : ""}`
            }
          >
            Dashboard
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

