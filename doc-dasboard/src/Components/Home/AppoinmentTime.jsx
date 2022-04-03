import React, { useState, useEffect } from "react";
function AppoinmentTime({ obj, idx, active }) {
  const [addactive, setaddactive] = useState("");
  useEffect(() => {}, []);

  return (
    <>
      <div
        className={`appoinmentDataInfo bg-white h-16 flex px-2 my-2 ${
          idx == active && "active"
        }`}
      >
        <div className="dateAndtime w-1/5">
          <p className="font-bold text-lg">{obj.Date}</p>
          <p>{obj.Time}</p>
        </div>
        <div className="Treatment w-1/5">
          <p>Treatment</p>
          <p className="font-bold w-1/5">{obj.Treatment}</p>
        </div>
        <div className="Dentist w-1/5">
          <p>Dentist</p>
          <p className="font-bold">{obj.Dentist}</p>
        </div>
        <div className="name w-1/5">
          <p>Nurse</p>
          <p className="font-bold">{obj.Nurse}</p>
        </div>
        <div className="note  w-1/5 font-bold text-blue-700">new Note</div>
      </div>
    </>
  );
}

export default AppoinmentTime;
