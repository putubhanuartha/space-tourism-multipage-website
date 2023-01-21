import React, { useEffect } from "react";

export default function Crew(props) {
  const { path, setPath } = props.pathState;
  useEffect(() => {
    setPath("/crew");
  });
  return (
    <div
      id="crew"
      className=""
    >
      <div className="container mx-auto">
        <h2>
          <span className="mr-4">02</span>MEET YOUR CREW
        </h2>
      </div>
    </div>
  );
}
