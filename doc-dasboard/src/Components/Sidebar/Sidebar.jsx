import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarNavItems from "./SidebarNavItems";
import SidebarDocInfo from "./SidebarDocInfo";
function Sidebar({ activeidx, setidx }) {
  return (
    <div className="sidebar flex-one flex flex-col bg-white ">
      <SidebarHeader />
      <SidebarNavItems activeidx={activeidx} setidx={setidx} />
      <SidebarDocInfo />
    </div>
  );
}

export default Sidebar;
