import React, { useEffect, useState } from "react";
import data from "../../public/assets/destination/data";
function DescriptionDestination(props) {
  return (
    <div
      id="descriptiondestination"
      className="flex flex-col items-center"
    >
      <h1 className="mt-4">{props.descData.title}</h1>
      <p className="mt-4 max-w-lg">{props.descData.desc}</p>
      <div className="underline"></div>
      <div className="flex flex-col md:flex-row items-center md:mt-10  md:w-full max-lg: justify-between">
        <div className="mt-10 md:mt-0 mx-4">
          <h5>AVG. DISTANCE</h5>
          <h4>{props.descData.avgdistance}</h4>
        </div>
        <div className="mt-5 md:mt-0 mx-4">
          <h5>EST. TRAVEL TIME</h5>
          <h4>{props.descData.travtime}</h4>
        </div>
      </div>
    </div>
  );
}
export default function Destination(props) {
  const { path, setPath } = props.pathState;
  const [indexState, setIndexState] = useState(0);
  useEffect(() => {
    setPath("/destination");
  });
  return (
    <div id="destination">
      <div className="container mx-auto flex flex-col xl:items-center lg:flex-row lg:items-start items-center px-8 py-11 lg:justify-between xl:justify-around">
        <div>
          <h2>
            <span className="mr-4">01</span>PICK YOUR DESTINATION
          </h2>
          <img
            src={data[indexState].path}
            alt={data[indexState].title}
            className="w-52 h-52 mt-10 xl:w-72 xl:h-72"
          />
        </div>
        <div className="flex flex-col items-center lg:w-[60%] min-w-fit">
          <nav className="mt-8 lg:mt-0 w-full max-w-md">
            <ul className="mx-auto flex w-[90%] justify-around">
              {data.map((el, index) => {
                return (
                  <div className="w-20 flex flex-col items-center overflow-hidden group">
                    <li>
                      <button
                        onClick={() => {
                          setIndexState(index);
                        }}
                      >
                        {el.title}
                      </button>
                    </li>
                    <div
                      className={`list-underline h-1 bg-stone-300 w-full ${
                        index === indexState
                          ? "translate-x-0"
                          : "-translate-x-full"
                      } group-hover:translate-x-0 transition-transform duration-200`}
                    ></div>
                  </div>
                );
              })}
            </ul>
          </nav>
          <DescriptionDestination descData={data[indexState]} />
        </div>
      </div>
    </div>
  );
}
