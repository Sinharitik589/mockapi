import { useState } from "preact/hooks"
import { useStore } from "../context/StoreContext"
import Button from "./Button"
import { axios } from "../utils/utils";


export default function Model({onClose}) {
  
  const {userId,currentEndpoint,setModalVisible} = useStore();
  const [jsonValue,setJsonValue] = useState("");
  const [endpoint,setEndpoint] = useState(currentEndpoint);
  const [jsonError,setJsonError] = useState(false);
  const [endpointError,setEndpointError] = useState(false);
  const [creating,setCreating] = useState(false);
  const editEndpoint = (e) => {
    setEndpointError(false);
    setEndpoint(e.target.value);
  }

  const editJsonVal = (e) => {
    setJsonError(false);
    setJsonValue(e.target.value);
  }
  
  const createEndpoint =async () => {
    try{
        setCreating(true)
        let patt = /^[a-z0-9]+$/i;
        if(!endpoint||!patt.test(endpoint)) {
            setEndpointError(true);
            setCreating(false);
            return;
        }
        let valJson = jsonValue;
        let js = await JSON.parse(valJson);
        await axios.post(`api/${userId}/${endpoint}`,js);
        setCreating(false);
        setModalVisible(false);
        onClose();
    }
    catch(e){
      console.log({e})
        setJsonError(true);
        setCreating(false);
    }
  }

  return (
    <div className="w-screen h-screen top-0 left-0 vh-100 vw-100 model fixed ">
        <div className="container h-full flex justify-center items-center p-3 md:p-0">
            <div className="w-full md:w-1/2 p-3 bg-white rounded-sm">
            <div className="w-full text-right">
            <Button onClick={() => setModalVisible(false)} text="Close" type="bordered" classList="text-xs font-light py-1 px-1"  />
           </div>
            <h1 className="text-2xl font-semibold text-gray-500 text-center mb-2">Add Endpoint</h1>
            <div className="mb-2">
            <input disabled={currentEndpoint?true:false} value={endpoint} onChange={editEndpoint} placeholder="Enter Endpoint Name" type="text" className=" w-full border-2 rounded-md h-10 focus:border-gray-500 focus-visible:border-gray-500 outline-none text-gray-400 p-2" />
            {endpointError&&<h4 className="text-sm text-red-500 font-semibold">Endpoint not valid .Endpoint should contain only alphanumeric value ! !</h4>}
            
            </div>
            <div className="mb-2">
            <textarea rows={8} 
             className="w-full border-2 rounded-md focus:border-gray-500 focus-visible:border-gray-500 outline-none text-gray-400  p-2"
             placeholder="//Enter Valid JSON payload
             {
                'name':'Ritik',
                'email':'sinharitik18112835@gmail.com'
                'age':24,
             }
             "
             value={jsonValue}
             onChange={editJsonVal}
             />
            {jsonError&&<h4 className="text-sm text-red-500 font-semibold">Please enter a valid json payload ! !</h4>}
            </div>
             <div className="w-full text-center">
                <Button disabled={creating} text={creating?"Creating ...":"Create"} onClick={createEndpoint}/>
             </div>
            </div>
        </div>
    </div>
  )
}
