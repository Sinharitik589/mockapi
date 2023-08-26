import {  useEffect, useState } from 'preact/hooks'
import {memo} from 'preact/compat'
import '../app.css'
import getrocket from "../assets/getrocket.svg"
import postrocket from "../assets/postrocket.svg"
import resrocket from "../assets/resrocket.svg"
import front from "../assets/fron.svg";
import back from "../assets/back.svg";



 function Anim() {
  const [tim,setTim] = useState(true);
  const [secondIn,setSecondIn] = useState(null);
  const [rocketCl,setRocketCl] = useState("");
  const [rocketCl2,setRocketCl2] = useState("");
  const [rocketCl3,setRocketCl3] = useState("");
  const [rocketCl4,setRocketCl4] = useState("");
  
  useEffect(() => {
    let setV = setRocketCl;
    let setV2 = setRocketCl2;
    setV("rocket-mov");
    setV2("rocket2-mov");
    setTimeout(() => setTim(false),8000)
    let val = setInterval(() =>{
      setV(c=> c==""?"rocket-mov":"");
      setV2(c=>c==""?"rocket2-mov":"")
    },[9000])

    return () => {
      clearInterval(val);
      if(secondIn) clearInterval(secondIn);
    }
  },[])

  useEffect(() => {
    let val = false;
    if(!tim){
      let setV = setRocketCl3;
      let setV2 = setRocketCl4;
      setV("rocket-mov");
      setV2("rocket2-mov");
      const val = setInterval(() =>{
        setV(c=> c==""?"rocket-mov":"");
        setV2(c=>c==""?"rocket2-mov":"")
      },[9000])
      setSecondIn(val);
    }
  },[tim])

  return (
    <>
    <div className='grid grid-cols-12 w-full  h-24 '>
          <div className="md:col-span-3 col-span-4 h-full w-full relative flex flex-col justify-center">
              <img src={getrocket} className={`${rocketCl} md:h-7 h-4 mb-2`} />
              <img src={postrocket} className={`${rocketCl3} md:h-7 h-4`} />
              <div className="w-full absolute h-full  bg-gray-main flex justify-end z-10">
                  <div className="w-max flex flex-col items-center">
                      <div className="md:h-5/6 h-4/6 ">
                          <img className='h-full' src={front}/>
                      </div>
                      <div className="md:h-5/6 h-2/6 w-full text-gray-400 flex justify-center items-center md:font-semibold sm:font-normal">
                        <span className="leading-none text-base">Your Application</span>  
                      </div>
                  </div>
              </div>
          </div>
          <div className="md:col-span-6 col-span-4" />
          <div className="md:col-span-3 col-span-4 h-full relative flex flex-col justify-center">
            <img src={resrocket} className={`${rocketCl2} md:h-7 h-4 mb-2`} />
            <img src={resrocket} className={`${rocketCl4} md:h-7 h-4`} />
            <div className="w-full absolute h-full  bg-gray-main flex justify-start ">
                 <div className="w-max flex flex-col items-center">
                      <div className="md:h-5/6 h-4/6">
                          <img className='h-full' src={back}/>
                      </div>
                      <div className="md:h-1/6 h-2/6 w-full text-gray-400 flex justify-center items-center md:font-semibold sm:font-normal">
                        <span className="leading-none text-base">Instapi Server</span>  
                      </div>
                  </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default memo(Anim);
