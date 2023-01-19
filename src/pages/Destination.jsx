import React, { useEffect } from "react";

export default function Destination(props) {
  const { path, setPath } = props.pathState;
  useEffect(() => {
    setPath("/destination");
  });
  return <div id="destination"></div>;
}
