import React, { useEffect, useState } from "react";
// Local component
import dataCrew from "../../public/assets/crew/dataCrew";
const DescriptionCard = (props) => {
  return (
    <div
      id="descriptionCard"
      className="mt-3"
    >
      <h5 className="mt-3">{props.descData.title}</h5>
      <h3 className="mt-1">{props.descData.name}</h3>
      <p className="mt-2 max-w-md">{props.descData.text}</p>
    </div>
  );
};
export default function Crew(props) {
  const { path, setPath } = props.pathState;
  const [index, setIndex] = useState(0);
  const translateImage = () => {
    switch (index) {
      case 0:
        return "translate-x-0";
      case 1:
        return "-translate-x-[25%]";
      case 2:
        return "-translate-x-[50%]";
      case 3:
        return "-translate-x-[75%]";
    }
  };
  useEffect(() => {
    setPath("/crew");
  });
  return (
    <div
      id="crew"
      className=""
    >
      <div className="container mx-auto flex flex-col  py-5 mt-10 xl:px-40 xl:pb-14">
        <h2>
          <span className="mr-4 text-gray-400">02</span>MEET YOUR CREW
        </h2>
        <div className="flex flex-col md:flex-col-reverse items-center lg:flex-row-reverse lg:justify-between">
          <div className="h-52 md:h-72 lg:h-96 xl:w-[50vw] xl:h-[60vh] border-b-2 w-[60%]  mt-10 max-w-xs overflow-hidden">
            <ul
              className={`h-full mx-auto  w-[400%] flex justify-around transition-transform duration-200 ${translateImage()}`}
            >
              {/* List component */}
              {dataCrew.map((el, i) => {
                return (
                  <li className="">
                    <img
                      src={`${el.path}`}
                      alt={el.title}
                      className="w-52 h-52 md:h-72 lg:h-96 lg:w-96 xl:h-[60vh] xl:w-[50vw] md:w-72 block mx-auto"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col md:flex-col-reverse items-center lg:items-start  mt-8">
            <nav className="">
              {/* List component */}
              <ul className="flex w-32 justify-between items-center">
                {dataCrew.map((el, i) => {
                  return (
                    <li>
                      <button
                        onClick={() => {
                          setIndex(i);
                        }}
                        className={`w-2.5 h-2.5 ${
                          i === index ? "bg-white" : null
                        } border-2 border-white rounded-full`}
                      ></button>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <DescriptionCard descData={dataCrew[index]} />
          </div>
        </div>
      </div>
    </div>
  );
}
