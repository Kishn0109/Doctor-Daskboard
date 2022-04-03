import React, { useState, useEffect } from "react";
import { File } from "react-bootstrap-icons";
import Document from "./Document";
import AppoinmentTime from "./AppoinmentTime";
import PaitentAvatar from "./PaitentAvatar";
import axios from "axios";
function Dasboard({ paitent }) {
  const [appoinmens, setappoinment] = useState([]);
  const [whichappoinment, setwhichappoinment] = useState(
    "Upcomming Appoinment"
  );
  const [activate, setactivate] = useState(3);
  useEffect(() => {
    let arr = [];
    let tobestore = [];
    axios
      .get("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details")
      .then((response) => {
        arr.push(response.data);
      })
      .then(() => {
        tobestore.push(arr[0][0]["Post Appointment"]);
        tobestore.push(arr[0][0]["Upcoming Appointments"]);
      })
      .then(() => {
        setappoinment([...tobestore]);
      });
  }, []);
  const handelActive = (idx, appoinmentvalue) => {
    setwhichappoinment(appoinmentvalue);
    setactivate(idx);
  };
  return (
    <div className="flex gap-4 flex-78">
      <div className="paitentAlldata flex-7 flex flex-col gap-4">
        <div className="paitentCard flex-5 bg-white rounded-md flex text-gray-500">
          <PaitentAvatar paitentDetail={paitent} />
        </div>
        <div className="paitentApoinments flex-5 bg-white rounded-md p-2">
          <div className="appoinmentnav bg-slate-200 w-3/4 h-1/4 rounded-md p-3 flex">
            <div
              className={`upcommingApoinment  h-full w-4/12 rounded-md text-center ${
                activate == 3 && " bg-white font-bold text-black"
              }`}
              onClick={() => {
                handelActive(3, "Upcomming Appoinment");
              }}
            >
              Upcomming Appoinment
            </div>
            <div
              className={`upcommingApoinment  h-full w-4/12 rounded-md text-center ${
                activate == 2 && " bg-white font-bold text-black"
              }`}
              onClick={() => {
                handelActive(2, "Past Appoinment");
              }}
            >
              Past Appoinment
            </div>
            <div
              className={`upcommingApoinment  h-full w-4/12 rounded-md text-center ${
                activate == 1 && " bg-white font-bold text-black"
              }`}
              onClick={() => {
                handelActive(1, "Medical Appoinment");
              }}
            >
              Medical Appoinment
            </div>
          </div>
          <div className="Allapoinment h-3/4 w-full p-1 bg-slate-300 ">
            {whichappoinment == "Upcomming Appoinment" &&
              appoinmens.map((obj, idx) => <AppoinmentTime obj={obj} />)}
            {/* <AppoinmentTime /> */}
          </div>
        </div>
      </div>
      <div className="Notes&Documents flex-3 flex flex-col gap-4 ">
        <div className="NoteCard flex-5 bg-white rounded-md p-2">
          <div className="notehead flex justify-between items-center h-1/5">
            <p className="heading font-bold text-black">Notes</p>
            <p className="heading font-bold text-blue-700">see all</p>
          </div>
          <div className="noteDiv bg-gray-200 rounded-sm p-2 h-3/5">
            <div
              className=" bg-transparent outline-none border-none h-3/5 "
              contentEditable="true"
            >
              kishan is a good boy rahul is also I would like to say you some
              thind
            </div>
            <div className=" h-2/5 flex justify-end items-center">
              <button className="text-white bg-blue-700 rounded-md text-center align-middle px-2 h-8 mt-2">
                save notes
              </button>
            </div>
          </div>
          <div className="navBottom "></div>
        </div>
        <div className="FolderDocuments flex-5 bg-white rounded-md">
          <div className="top h-1/5 flex items-center justify-between py-4 px-3 font-bold">
            <p className="text-black">Files/Documents</p>
            <a href="# " className="text-indigo-700 flex gap-4 items-center ">
              <File /> Add files
            </a>
          </div>
          <Document />
          <Document />
        </div>
      </div>
    </div>
  );
}

export default Dasboard;
