import { useCallback, useEffect, useState } from 'preact/hooks'
import './app.css'
import { axios } from './utils/utils';


export function App() {
  const [enpoints,setEndpoints] = useState([])
  
  const fetchEndpoints = useCallback(async () => {
    try{
        const res = await axios.get("/stats?usid=64cca4abde209703e80b1ed7");
        setEndpoints(res.data.user.endpoints);
    }
    catch(e){

    }
  },[]);

  useEffect(() => {
    fetchEndpoints();
  },[fetchEndpoints])

  return (
    <>
      <ol>
        {
            enpoints.map(val=><li>{val}</li>)
        }
      </ol>
    </>
  )
}
