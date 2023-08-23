import { useCallback, useEffect, useState } from "preact/hooks";
import AddEndpoint from "../components/AddEndpoint";
import DataCard from "../components/DataCard";
import EndpointCard from "../components/EndpointCard";
import EndpointUrl from "../components/EndpointUrl";
import Model from "../components/Modal";
import { useStore } from "../context/StoreContext";
import { axios } from "../utils/utils";


export default function Dashboard() {

  const {setModalVisible,modalVisible,setCurrentEndpoint,currentEndpoint,userId} = useStore();
  const [endpoints,setEndpoints] = useState([]);
  const [totalRequests,setTotalRequests] = useState(0);

  const getEndPoints = useCallback(async () => {
    try{
      if(userId){
      let url = `stats?usid=${userId}`;
      let res = await axios.get(url);
      let {endpoints,total_requests} = res.data.user;
      setEndpoints(endpoints);
      setTotalRequests(total_requests);
      }
    }
    catch(e){
      console.log({e})
    }
  },[userId])

  useEffect(() => {
    getEndPoints();
  },[getEndPoints])

  const closeModel = () => {
    getEndPoints();
  }

  return (
    <main className="p-3 vh-nav">
     <div className="w-3/4">
      <EndpointUrl url={`https://instapi.sinha.website/api/`}/>
    </div>
    <div className="grid grid-cols-12 dash-h w-full pt-2">
      <div className="col-span-9 h-full overflow-y-auto">
        <h1 className="text-2xl mb-3 text-gray-500 font-bold leading-5">Endpoints</h1>
        <div className="grid grid-cols-12 gap-4 border-t-2 pt-3">
          <div className="col-span-4"><AddEndpoint onClick={() => setModalVisible(true)}/></div>
          {
            endpoints.map(val=><div className="col-span-4"><EndpointCard endp={val} url={`https://instapi.sinha.website/api/${userId}/${val}`}/></div>)
          }
        </div>
      </div>
      <div className="col-span-3 p-2 flex flex-col items-center gap-4">
        <DataCard type="Requests Sent" data={totalRequests}/>
        <DataCard type="Endpoints Created" data={endpoints.length}/>
      </div>
    </div>
    {
      modalVisible && <Model onClose={closeModel}/>
    }
    </main>
  )
}
