import React from "react";
import "./Cardlist.css";

export default function Cardlist(props) {
  console.log(props);
  return <div className="card-list">{props.children}</div>;
}
