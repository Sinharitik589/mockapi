import DataCard from "../components/DataCard";
import EndpointCard from "../components/EndpointCard";
import EndpointUrl from "../components/EndpointUrl";

export default function Dashboard() {
  return (
    <main className="p-3 vh-nav">
     <div className="w-3/4">
      <EndpointUrl/>
    </div>
    <div className="grid grid-cols-12 dash-h w-full pt-2">
      <div className="col-span-10 h-full overflow-y-auto">
        <h1 className="text-2xl mb-3 text-gray-500 font-bold leading-5">Endpoints</h1>
        <div className="grid grid-cols-12 gap-4 border-t-2 pt-3">
          <div className="col-span-4"><EndpointCard/></div>
          <div className="col-span-4"><EndpointCard/></div>
        </div>
      </div>
      <div className="col-span-2 p-2 flex flex-col items-center gap-4">
        <DataCard type="Requests Sent" data={96}/>
        <DataCard type="Endpoints Created" data={12}/>
      </div>
    </div>
    </main>
  )
}
