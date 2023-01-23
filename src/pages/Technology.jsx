import React from "react";
import { useEffect } from "react";

export default function Technology(props) {
  const { setPath } = props.pathState;
  useEffect(() => {
    setPath("/technology");
  });
  return <div>Hello World</div>;
}
