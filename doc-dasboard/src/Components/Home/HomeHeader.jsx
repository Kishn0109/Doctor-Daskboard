import React from "react";
import {
  BellFill,
  ChevronUp,
  PencilSquare,
  Person,
  PlusLg,
  PrinterFill,
  Search,
} from "react-bootstrap-icons";

export default function HomeHeader({ paitent }) {
  return (
    <div className="flex-2 flex flex-col">
      <div className="top flex justify-between items-center flex-5">
        <div className="paitaintInfo flex items-center gap-2">
          <Person fill="blue" className="w-8 h-8" />
          <h3 className="text-black font-bold text-lg">{paitent.name}</h3>
        </div>
        <div className="Search flex gap-2">
          <div className="searchbar flex items-center rounded-2xl justify-center gap-2 px-1 text-lg pl-4 border-slate-400 border-2 w-32 overflow-hidden">
            <Search />
            <input
              type="text"
              className="search border-none outline-none text-gray-500 max-w-fit"
              placeholder="Search"
              width="100%"
              style={{ width: "100%", backgroundColor: "transparent" }}
            />
          </div>
          <div className="add bg-blue-700 w-8 h-8 rounded-full flex items-center justify-center">
            <PlusLg />
          </div>
          <div className="notfication w-8 h-8 rounded-full flex items-center justify-center border-slate-400 border-2">
            <BellFill />
          </div>
        </div>
      </div>
      <div className="navigate flex-5 flex justify-between items-center ">
        <div className="folders gap-4 flex items-center ">
          <a href="#">Paitent List</a>
          <div className=" rotate-90">
            <ChevronUp />
          </div>
          <a href="#">{paitent.name}</a>
        </div>
        <div className="Editpaitaint gap-4 flex items-center">
          <div className="print flex justify-center items-center rounded-md px-3 h-8 bg-white">
            <PrinterFill />
          </div>
          <div className="edit-paitiant-button flex justify-center items-center rounded-md px-3 h-8 gap-2 bg-white">
            <PencilSquare />
            <p>Edit Paitent</p>
          </div>
        </div>
      </div>
    </div>
  );
}
