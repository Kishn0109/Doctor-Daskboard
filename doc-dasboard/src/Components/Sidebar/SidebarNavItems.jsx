import React, { useState } from "react";
import NavItem from "./NavItem";
import {
  CalendarEvent,
  Chat,
  Wallet,
  InfoCircle,
  Person,
  Sliders2,
} from "react-bootstrap-icons";
function SidebarNavItems({ activeidx, setidx }) {
  return (
    <div className="SidebarNavItems flex-7 ">
      <NavItem
        icon={<InfoCircle className="text-light font-light" />}
        title="Overview"
        idx={1}
        activeidx={activeidx}
        setidx={setidx}
      />
      <NavItem
        icon={<CalendarEvent />}
        title="Calendar"
        idx="2"
        activeidx={activeidx}
        setidx={setidx}
      />
      <NavItem
        icon={<Person />}
        title="Patiant List"
        idx="3"
        activeidx={activeidx}
        setidx={setidx}
      />
      <NavItem
        icon={<Chat />}
        title="Messages"
        idx="4"
        activeidx={activeidx}
        setidx={setidx}
      />
      <NavItem
        icon={<Wallet />}
        title="Payment Information"
        idx="5"
        activeidx={activeidx}
        setidx={setidx}
      />
      <NavItem
        icon={<Sliders2 />}
        title="Setting"
        idx="6"
        activeidx={activeidx}
        setidx={setidx}
      />
    </div>
  );
}

export default SidebarNavItems;
