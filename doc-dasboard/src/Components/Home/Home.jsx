import React,{useState,useEffect} from "react";
import Dasboard from "./Dasboard";
import HomeHeader from "./HomeHeader";
import axios from "axios";
function Home({ paitent }) {
  const [AppoinmentDetail, setAppoinmentDetail] = useState({});
  axios
    .get("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details")
    .then((response) => {
      
      console.log(response.data,"appoinment");
    });
  return (
    <div className="flex-9 flex flex-col container">
      <HomeHeader paitent={paitent} />
      <Dasboard paitent={paitent} />
    </div>
  );
}

export default Home;
