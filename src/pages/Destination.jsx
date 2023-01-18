import React, { useEffect } from "react";

export default function Destination(props) {
  const { path, setPath } = props.pathState;
  useEffect(() => {
    setPath("/destination");
  });
  console.log("render destination");
  return (
    <div id="destination">
      <h1 className="text-7xl font-bold">Hello World</h1>
      <div className="flex flex-col">
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p className="max-w-lg">
          Let's face it:if you want to go to space, you might as well genuinely
          go to outer space and not hover koind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          expreience
        </p>
      </div>
    </div>
  );
}
