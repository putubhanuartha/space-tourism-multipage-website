import React, { useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default function Mainpage(props) {
  const { path, setPath } = props.pathState;
  useEffect(() => {
    setPath("/");
  });
  return (
    <div id="mainpage">
      <div className="container mx-auto mt-20 md:mt-10 lg:mt-20 px-6 flex flex-col lg:flex-row md:items-center md:justify-around items-center ">
        <div className="flex flex-col">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p className="max-w-lg">
            Let's face it:if you want to go to space, you might as well
            genuinely go to outer space and not hover koind of on the edge of
            it. Well sit back, and relax because we'll give you a truly out of
            this world expreience
          </p>
        </div>

        <Link
          id="homebtn"
          to="/"
          className="bg-white rounded-full w-40 h-40 lg:w-52 lg:h-52 flex mt-24 lg:mt-0 transition-shadow duration-300 justify-center items-center hover:shadow-[0px_0px_0px_20px_rgba(151,151,151,0.8)]"
        >
          <h4>EXPLORE</h4>
        </Link>
      </div>
    </div>
  );
}
