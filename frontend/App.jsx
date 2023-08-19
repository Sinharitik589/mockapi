import { useEffect, useState } from "preact/hooks";
import Anim from "./components/Anim.jsx";
import "./index.css"
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Router from "preact-router";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {

  return (
    <>
      <Nav/>
      <div className="container bg-gray-main overflow-x-hidden">
        <Router>
        <Home path="/" />
        <Dashboard path="/dash" />
        </Router>
      </div>
    
    </>
  )
}
