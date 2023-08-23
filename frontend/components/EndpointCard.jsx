import { useStore } from "../context/StoreContext";
import Button from "./Button";


export default function EndpointCard({url="",endp=""}) {

  const {userId,setCurrentEndpoint,setModalVisible,currentEndpoint} = useStore();

  const addData = () => {
    setCurrentEndpoint(endp);
    setModalVisible(true);
  }

  return (
    <div className="w-full rounded-md h-40 border-2 px-2 py-1 flex flex-col justify-between">
        <div>
        <div className="w-full text-right">
            <Button text="Copy Endpoint" classList="text-xs font-light py-1 px-1"  />
        </div>
        <h2 className="text-2xl text-gray-500 break-words">{endp}</h2>
        <h6 className="text-sm text-gray-400 break-words">{url}</h6>
        </div>
        <div className="w-full flex gap-1">
        <a href={import.meta.env.PROD?`/api/${userId}/${endp}`:`http://localhost:5000/api/${userId}/${endp}`} target="blank">
        <Button text="View Endpoint" type={"bordered"} classList="text-xs px-1 py-1 font-light"/>
        </a>
        <Button  text="Add data" onClick={addData} type={"bordered"} classList="text-xs px-1 py-1 font-light"/>
        </div>
    </div>
  )
}
