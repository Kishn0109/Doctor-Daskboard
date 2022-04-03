import React, { useState, useEffect } from "react";
import { InfoCircleFill, ThreeDotsVertical } from "react-bootstrap-icons";
import axios from "axios";
function SidebarDocInfo() {
  const [doctor, setdoctor] = useState({});
  useEffect(() => {
    let arr = [];
    let tobestore = [];
    axios
      .get("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
      .then((response) => {
        arr.push(response.data);
      })
      .then(() => {
        tobestore.push(arr[0][0]);
      })
      .then(() => {
        console.log(arr[0][0], tobestore);
        setdoctor(tobestore[0]);
      });
  }, []);
  return (
    <div className="SidebarDocInfo flex-2 px-4">
      <div className="help h-1/2 flex items-center gap-4 ">
        <InfoCircleFill />
        <p onClick={() => console.log("s")}>Help ?</p>
      </div>
      <div className="Information h-1/2 flex justify-between items-center text-gray-400">
        <div className="info flex justify-start items-center gap-4">
          <img
            src="https://i0.wp.com/rohayati.com/wp-content/uploads/2020/01/Curly-long-hair-for-men.jpg?resize=1024%2C908"
            alt=""
            className="avatar w-12 h-12 rounded-full"
          />
          <div className="text">
            <h4 className="paitaintName font-bold text-black">{doctor.name}</h4>
            <p className="paitaintRole">{doctor.specification}</p>
          </div>
        </div>
        <ThreeDotsVertical />
      </div>
    </div>
  );
}

export default SidebarDocInfo;
