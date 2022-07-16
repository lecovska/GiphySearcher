import React from "react";
import { Results } from "./Results";

export const Column = (props) => {
  var nekeslike = props.slike;

  return (
    <div className="column">
      {nekeslike && nekeslike.map((e) => <Results slika={e} />)}
    </div>
  );
};
