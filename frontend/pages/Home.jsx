import { useEffect, useState } from "preact/hooks";
import Anim from "../components/Anim";
import Button from "../components/Button";

export default function Home() {
  console.log("rendered")

  const [val,setVal] = useState(0);

  return (
    <main>
        <section className="text-center flex flex-col items-center vh-nav justify-center">
            <h1 className="text-7xl text-gray-500 font-bold mb-3">INSTANT REST API</h1>
            <h3 className="text-5xl w-4/5 text-gray-400 mb-6 ">Rest API Endpoints without the need to code and no worry for a backend</h3>
            <Button onClick={() =>{setVal(v=>v+1)}} classList={"mb-6 mt-3"} text={"Create Endpoint"}/>
            <Anim/> 
        </section>
    </main>
  )
}
