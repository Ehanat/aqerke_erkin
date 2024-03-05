import React from "react";
import { navLinks } from "../constants";

const ToggleNav = ({ toggle }) => {
  const handleClick = () => {
    toggle = "hidden";
    console.log(toggle);
  };
  return (
    <ul
      className={`${toggle} px-4 py-4 shadow-2xl w-[150px] flex items-start gap-2 flex-col absolute top-12 right-0 z-10 bg-white`}
    >
      {navLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="font-montserrat leading-normal text-lg text-slate-gray font-semibold"
            onClick={handleClick}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ToggleNav;
