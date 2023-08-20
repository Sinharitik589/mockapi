import Button from "./Button";

export default function EndpointUrl() {
  return (
    <div className="h-12 rounded-md border-2 border-gray-400 flex justify-between w-full py-1 px-2 ">
        <div className="text-xl leading-none text-gray-400 flex items-center font-bold">https://instapi.sinha.website/api/<span className="text-gray-500 font-bold">1eafe1283edc4c3e8e03153301b2188b</span></div>
        <div className="flex items-center"><Button  text="Copy Root Url" classList="px-1 py-1"/></div>
    </div>
  )
}
