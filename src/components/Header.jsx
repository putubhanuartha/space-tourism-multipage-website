import React, { useState } from "react";
import humbtn from "/assets/icon/icon-hamburger.svg";
import closebtn from "/assets/icon/icon-close.svg";

export default function Header() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  return (
    <div
      id="header"
      className="bg-transparent relative md:bg-transparent md:backdrop-blur-sm"
    >
      <div className="container mx-auto flex justify-between px-7 lg:px-20 items-center md:mt-6 mt-4">
        <div id="logo">
          <a href="#index.html">
            <img
              src="/assets/icon/logo.svg"
              alt="logo"
              className="w-9 h-9"
            />
          </a>
        </div>
        <div
          id="topbar"
          className="hidden md:block"
        >
          <ul className="flex">
            <li>
              <a href="#">
                <span>00</span> Home
              </a>
            </li>
            <li>
              <a href="#">
                <span>01</span> Destination
              </a>
            </li>
            <li>
              <a href="#">
                <span>02</span> Crew
              </a>
            </li>
            <li>
              <a href="#">
                <span>03</span> Technology
              </a>
            </li>
          </ul>
        </div>
        <div
          id="sidebar"
          className={`bg-transparent absolute top-[9vh] right-0 rounded-lg backdrop-blur-sm md:hidden transition-all duration-300 ${
            isSidebarActive
              ? "translate-x-0 opacity-1"
              : "translate-x-48  opacity-0"
          }`}
        >
          <ul>
            <li>
              <a href="#">
                <span>00</span> Home
              </a>
            </li>
            <li>
              <a href="#">
                <span>01</span> Destination
              </a>
            </li>
            <li>
              <a href="#">
                <span>02</span> Crew
              </a>
            </li>
            <li>
              <a href="#">
                <span>03</span> Technology
              </a>
            </li>
          </ul>
        </div>
        <button
          onClick={() => {
            setIsSidebarActive(!isSidebarActive);
          }}
          id="hum-btn"
          className="md:hidden"
        >
          <img
            src={isSidebarActive ? closebtn : humbtn}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
