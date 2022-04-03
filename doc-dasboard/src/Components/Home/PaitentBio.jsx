import React from "react";

function PaitentBio({ field, title }) {
  return (
    <>
      <div className="paitentbio">
        <div className="title">{field}</div>
        <div className="title text-black font-bold">{title}</div>
      </div>
    </>
  );
}

export default PaitentBio;
