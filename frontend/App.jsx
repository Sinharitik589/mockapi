import { useCallback, useEffect, useState } from "preact/hooks";
import Anim from "./components/Anim.jsx";
import "./index.css"
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Router from "preact-router";
import Dashboard from "./pages/Dashboard.jsx";
import Footer from "./components/Footer.jsx";
import { StoreProvider, useStore } from "./context/StoreContext.js";
import { axios } from "./utils/utils.js";

export default function App() {

  const {setUserId} = useStore();

  // const generateRand = useCallback((length) =>{
  //   let parentString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  //   let res = "";
  //   for(let x=0;x<length;x++) res+=parentString[parseInt(Math.random()*60)];
  //   return res;
  // },[])

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
       <Nav/>
      <div className="container bg-gray-main mx-auto">
        <Router>
        <Home path="/" />
        <Dashboard path="/dash" />
        </Router>
        <Footer/>
      </div>
    </>
  )
}
