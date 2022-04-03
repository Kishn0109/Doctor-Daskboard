import React from "react";
import { File } from "react-bootstrap-icons";

function Document() {
  return (
    <>
      <div className="document bg-white flex justify-between items-center px-2 my-2 shadow-slate-300">
        <div className="flex justify-between items-center h-12 gap-4">
          <File /> <p>Check-upresume.pdf</p>
        </div>
        <p className="size">20kb</p>
      </div>
    </>
  );
}

export default Document;
