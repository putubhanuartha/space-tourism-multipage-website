import React, { useEffect, useRef, useState } from "react";
import humbtn from "/assets/icon/icon-hamburger.svg";
import closebtn from "/assets/icon/icon-close.svg";
import { Link } from "react-router-dom";
export default function Header(props) {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const ulSidebar = useRef(null);
  const ulTopbar = useRef(null);
  function getList(ul) {
    const li = ul.current.getElementsByTagName("li");
    Array.from(li).forEach((el) => {
      if (el.dataset.path === props.path) {
        el.classList.add("active");
      } else if (el.classList.contains("active")) {
        el.classList.remove("active");
      }
    });
  }
  useEffect(() => {
    getList(ulSidebar);
    getList(ulTopbar);
  });
  return (
    <div
      id="header"
      className="bg-transparent relative md:bg-transparent md:backdrop-blur-sm"
    >
      <div className="container mx-auto flex justify-between px-7 lg:px-20 items-center md:mt-6 mt-4">
        <div id="logo">
          <Link to="/">
            <img
              src="/assets/icon/logo.svg"
              alt="logo"
              className="w-9 h-9"
            />
          </Link>
        </div>
        <div
          id="topbar"
          className="hidden md:block"
        >
          <ul
            ref={ulTopbar}
            className="flex"
          >
            <li data-path={"/"}>
              <Link to="/">
                <span>00</span> Home
              </Link>
            </li>
            <li data-path={"/destination"}>
              <Link to="/destination">
                <span>01</span> Destination
              </Link>
            </li>
            <li data-path={"/crew"}>
              <Link to="/crew">
                <span>02</span> Crew
              </Link>
            </li>
            <li data-path={"/technology"}>
              <Link to="/technology">
                <span>03</span> Technology
              </Link>
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
          <ul ref={ulSidebar}>
            <li data-path={"/"}>
              <Link to="/">
                <span>00</span> Home
              </Link>
            </li>
            <li data-path={"/destination"}>
              <Link to="/destination">
                <span>01</span> Destination
              </Link>
            </li>
            <li data-path={"/crew"}>
              <Link to="/crew">
                <span>02</span> Crew
              </Link>
            </li>
            <li data-path={"/technology"}>
              <Link to="/technology">
                <span>03</span> Technology
              </Link>
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
