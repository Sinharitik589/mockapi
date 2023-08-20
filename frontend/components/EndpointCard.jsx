import Button from "./Button";


export default function EndpointCard() {
  return (
    <div className="w-full rounded-md h-36 border-2 px-2 py-1 flex flex-col justify-between">
        <div>
        <div className="w-full text-right">
            <Button text="Copy Endpoint" classList="text-xs font-light py-1 px-1"  />
        </div>
        <h2 className="text-xl text-gray-500 ">users</h2>
        <h6 className="text-xs text-gray-400">https://instapi.sinha.website/api/
1eafe1283edc4c3e8e03153301b2188b</h6>
        </div>
        <div className="w-full flex gap-1">
        <Button text="View Endpoint" type={"bordered"} classList="text-xs px-1 py-1 font-light"/>
            <Button text="Add data" type={"bordered"} classList="text-xs px-1 py-1 font-light"/>
        </div>
    </div>
  )
}
