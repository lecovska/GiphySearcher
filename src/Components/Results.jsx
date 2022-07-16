import React from "react";

export const Results = (props) => {
  var slika = props.slika;

  if (!slika) return null;

  return (
    <div>
     <img src={slika && slika.images.original.url}></img>

    </div>
  );
};



