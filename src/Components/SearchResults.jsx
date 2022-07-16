import React from "react";
import { Column } from "./Column";

export const SearchResults = (props) => {
  const slike1 = props.slike;
  const colNum = 4;



  return (
    <div className="main-div">
      <Column slike={slike1.filter((e, i) => i % colNum === 0)} />
      <Column slike={slike1.filter((e, i) => i % colNum === 1)}/>
      <Column slike={slike1.filter((e, i) => i % colNum === 2)}/>
      <Column slike={slike1.filter((e, i) => i % colNum === 3)}/>
    </div>
  );
};
