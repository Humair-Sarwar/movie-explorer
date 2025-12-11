import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo-om.png";

const Navbar = ({ setSearch, switchColor }) => {
  return (
    <div>
      <div className="bg-[#282929] ">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto! py-3! px-3!">
          <ul className="flex gap-2 ">
            <li className="text-[13px] font-medium text-[#d1cbc1] hover:text-white transition duration-300">
              <NavLink>Home</NavLink>
            </li>
            <li className="text-[13px] font-medium text-[#d1cbc1] hover:text-white transition duration-300">
              <NavLink>FAQs</NavLink>
            </li>
            <li className="text-[13px] font-medium text-red-500">
              <NavLink>How To Download</NavLink>
            </li>
          </ul>
          <p className="text-[13px] text-[#d1cbc1] font-medium">
            December 11, 2025
          </p>
        </div>
      </div>
      <header
        className={`${
          switchColor ? "bg-[#242525]" : "bg-white"
        }  transition duration-800 shadow-[var(--dracula-background-0000004d,rgba(13,13,13,0.3))_0px_4px_8px_0px]`}
      >
        <div className="flex justify-between items-center max-w-[1200px] mx-auto! py-3! px-3!">
          <NavLink to="/" className={'hidden lg:inline-block'}>
            <img src={logo} alt="" className="w-full h-[50px]" />
          </NavLink>
          <nav className="hidden sm:inline-block">
            <ul className="flex gap-8">
              <li
                className={`${
                  switchColor ? "text-[#dbd7d0]" : "text-black"
                } font-bold hover:text-blue-500 transition duration-300`}
              >
                <NavLink>Collection</NavLink>
              </li>
              <li
                className={`${
                  switchColor ? "text-[#dbd7d0]" : "text-black"
                } font-bold hover:text-blue-500 transition duration-300`}
              >
                <NavLink>IMDB Top</NavLink>
              </li>
              <li
                className={`${
                  switchColor ? "text-[#dbd7d0]" : "text-black"
                } font-bold hover:text-blue-500 transition duration-300`}
              >
                <NavLink>Quality</NavLink>
              </li>
              <li
                className={`${
                  switchColor ? "text-[#dbd7d0]" : "text-black"
                } font-bold hover:text-blue-500 transition duration-300`}
              >
                <NavLink>More</NavLink>
              </li>
            </ul>
          </nav>
          
            <input
              onChange={(e) => setSearch(e.target.value.trim())}
              type="text"
              placeholder="Search here..."
              className={`
                w-full sm:w-auto
    text-[#dbd7d0] 
    transition! duration-800!
    placeholder:text-[#dbd7d0] 
    outline-0 
    ${
      switchColor
        ? "bg-[linear-gradient(60deg,var(--dracula-background-4776e6,#26458f),var(--dracula-background-9c66f0,#451d80))]"
        : "bg-[linear-gradient(60deg,rgba(71,118,230,1),rgba(156,102,240,1))]"
    } 
    text-[14px] 
    font-medium 
    shadow-none 
    px-3! py-3!
  `}
            />
          
        </div>
      </header>
    </div>
  );
};

export default Navbar;
