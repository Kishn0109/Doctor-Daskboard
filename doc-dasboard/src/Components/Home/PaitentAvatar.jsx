import React, { useState, useEffect } from "react";
import axios from "axios";
import PaitentBio from "./PaitentBio";
function PaitentAvatar({ paitentDetail }) {
  return (
    <>
      <div className="photosection flex-4 border-r-2 border-gray-100 ">
        <div className="Avatar flex justify-center  items-center py-2">
          <img
            src="https://i0.wp.com/rohayati.com/wp-content/uploads/2020/01/Curly-long-hair-for-men.jpg?resize=1024%2C908"
            alt=""
            className="avatar w-24 h-24 rounded-full"
          />
        </div>
        <div className="AvatarIno py-2 text-center">
          <h2 className="font-bold text-lg text-black">{paitentDetail.name}</h2>
          <p className="text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="Social py-2 flex justify-center  items-center  ">
          <div className="post flex-5 border-r-2 border-slate-900 text-center">
            <p className="font-bold text-black">{paitentDetail.Past}</p>
            <p>Past</p>
          </div>
          <div className="Upcoming flex-5 text-center">
            <p className="font-bold text-black">{paitentDetail.Upcoming} </p>
            <p>Upcoming</p>
          </div>
        </div>
        <div className="sendmessage flex justify-center  items-center py-2">
          <button
            className="w-3/4 py-2 border-2 border-gray-200 text-black font-bold"
            onClick={() => {
              console.log(paitentDetail);
            }}
          >
            Send Message
          </button>
        </div>
      </div>
      <div className="photosection flex-6 flex flex-wrap pl-4">
        <PaitentBio field="Gender" title={paitentDetail.Gender} />
        <PaitentBio field="Birthday" title={paitentDetail.Birthday} />
        <PaitentBio
          field="Phone Number"
          title={paitentDetail["Phone Number"]}
        />
        <PaitentBio
          field="Street Address"
          title={paitentDetail["Street Address"]}
        />
        <PaitentBio field="City" title="Cliocap" />
        <PaitentBio field="ZIP Code" title={paitentDetail["ZIP Code"]} />
        <PaitentBio
          field="Member Status"
          title={paitentDetail["Member Status"]}
        />
        <PaitentBio
          field="Register Date"
          title={paitentDetail["Register Date"]}
        />
      </div>
    </>
  );
}

export default PaitentAvatar;
