import React, { useState, useEffect } from "react";

function NavItem({ icon, title, idx, activeidx, setidx }) {
  const handelactive = () => {
    setidx(idx);
  };
  console.log(idx, activeidx);
  return (
    <div
      className={`h-12 flex justify-start items-center pl-4 text-base font-semibold gap-4 ${
        idx == activeidx && "bg-blue-600"
      }`}
      onClick={() => handelactive()}
    >
      {icon}
      {title}
    </div>
  );
}

export default NavItem;
