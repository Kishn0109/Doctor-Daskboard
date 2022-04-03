import React,{useState,useEffect} from "react";
import "./App.css";
import "./index.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import axios from "axios";
function App() {
  const [paitentDetail, setpaitentDetail] = useState({});
   const [activeidx, setidx] = useState(3);
  useEffect(() => {
    let arr = [];
    axios
      .get("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
      .then((response) => {
        arr.push(response.data);

        console.log(paitentDetail);
      })
      .then(() => {
        setpaitentDetail(arr[0][0]);
        console.log(arr[0]);
      });

    console.log(paitentDetail);
  }, []);
  return (
    <div
      className="App flex h-screen"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <Sidebar activeidx={activeidx} setidx={setidx} />
      {activeidx == 3 && <Home paitent={paitentDetail} />}
    </div>
  );
}

export default App;
