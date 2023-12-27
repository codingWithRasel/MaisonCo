import React from "react";
import logo from "../assets/Image/logo2.svg";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className=" z-50 bg-navBg py-4">
      <div className="  px-3 md:px-12 mx-auto flex items-center gap-x-2 justify-between">
        <div>
          <img src={logo} />
        </div>
        <div className=" flex-1  max-w-[940px]">
          <ul className=" text-white flex gap-x-20 gap-y-5 flex-wrap uppercase text-sm font-medium">
            <Link to={'/'} className="">Home</Link>
            <Link className="">About</Link>
            <Link to={"/apartment"} className="">
              Apartments
            </Link>
            <Link className="">Avaibility</Link>
            <Link className="">Blog</Link>
            <Link className="">Pages</Link>
            <Link to={'/gallery'} className="">Gallery</Link>
          </ul>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
