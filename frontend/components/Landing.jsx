import { useStore } from "../context/StoreContext"
import { Link } from 'preact-router/match';
import Anim from "./Anim"
import Button from "./Button"

export default function Landing() {
  const {userId} = useStore();

  return (
    <div className="text-center flex flex-col items-center mt-20  justify-center">
            <h1 className="text-gray-500 font-bold mb-3 text-7xl">INSTANT REST API</h1>
            <h3 className="text-5xl w-4/5 text-gray-400 mb-3 ">Rest API Endpoints without the need to code and no worry for a backend</h3>
            <h4 className="text-xl break-words w-full text-gray-400 mb-6">Your INSTAPI unique url is <span className="text-gray-500">https://instapi.sinha.website/api/{userId}</span></h4>
            <Link href="/dash/new"><Button onClick={() =>{}} classList={"mb-12"} text={"Create Endpoint"}/></Link>
            <Anim/> 
    </div>
  )
}
