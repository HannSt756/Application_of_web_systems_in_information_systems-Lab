import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="h-[100px] bg-gray-100 shadow-md flex items-center p-4 justify-between">
      <NavLink to="/" className="flex items-center p-5">
        <img
          className="w-16 h-16"
          src="/anchor-svgrepo-com.svg"
          alt="Website Logo"
        />

        <span className="ml-2 text-xl font-bold">Logo</span>
      </NavLink>
      <NavLink to="/Events" className="p-5 ">
        <span className="ml-2 text-xl font-bold">Events</span>
      </NavLink>
    </header>
  );
}

export default Header;
