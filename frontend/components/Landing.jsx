import Anim from "./Anim"
import Button from "./Button"



export default function Landing() {
  return (
    <div className="text-center flex flex-col items-center mt-24  justify-center">
            <h1 className="text-7xl text-gray-500 font-bold mb-6">INSTANT REST API</h1>
            <h3 className="text-5xl w-4/5 text-gray-400 mb-12 ">Rest API Endpoints without the need to code and no worry for a backend</h3>
            <Button onClick={() =>{}} classList={"mb-12"} text={"Create Endpoint"}/>
            <Anim/> 
    </div>
  )
}
