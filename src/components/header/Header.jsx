import React from "react";
import ActiveLink from "../activeLink/ActiveLink";

const Header = () => {
  return (
    <nav className="bg-zinc-100 p-2 mb-5 flex justify-around px-20">
      <ActiveLink className="" to="/">
        Home
      </ActiveLink>
      <ActiveLink className="" to="/about">
        About
      </ActiveLink>
      <ActiveLink className="text-white" to="/users">
        Users
      </ActiveLink>
      <ActiveLink className="" to="/contact">
        Contact
      </ActiveLink>
    </nav>
  );
};

export default Header;
