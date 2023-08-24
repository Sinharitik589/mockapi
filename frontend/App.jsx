import { useCallback, useEffect, useState } from "preact/hooks";
import "./index.css"
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Router from "preact-router";
import Dashboard from "./pages/Dashboard.jsx";
import Footer from "./components/Footer.jsx";
import {  useStore } from "./context/StoreContext.jsx";
import { axios } from "./utils/utils.js";

export default function App() {

  const {setUserId} = useStore();

  const manageUid = async () => {
    let userId = localStorage.getItem("userid")
    if(userId) setUserId(userId)
    else {
      let res = await axios.get("stats/userid");
      setUserId(res.data);
      localStorage.setItem("userid",res.data);
    }
  }

  useEffect(() => {
    manageUid();
  },[])

  return (
    <>
    <div className="text-4xl text-gray-500 ph-cont vh-100 vw-100 text-center">Please open in desktop</div>
    <div className="main-cont">
        
        <Nav/>
       <div className="container bg-gray-main mx-auto sm:p-3">
         <Router>
         <Home path="/" />
         <Dashboard path="/dash/:type?" />
         </Router>
       </div>
       <Footer/>
     </div>
    </>
  )
}
