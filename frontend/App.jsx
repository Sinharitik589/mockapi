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
       <Nav/>
      <div className="container bg-gray-main mx-auto main-cont sm:p-3">
        <Router>
        <Home path="/" />
        <Dashboard path="/dash/:type?" />
        </Router>
      </div>
      <Footer/>
    </>
  )
}
