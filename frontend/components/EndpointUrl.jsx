import { useStore } from "../context/StoreContext";
import { copyToClip } from "../utils/utils";
import Button from "./Button";

export default function EndpointUrl({url=""}) {
  const {userId} = useStore();

  const copyUrl = () => {
    let urlVal = `${url}/${userId}`;
    copyToClip(urlVal);
  }

  return (
    <div className="h-12 rounded-md border-2 border-gray-400 lg:flex justify-between w-full py-1 px-2 ">
        <div className="text-xl leading-none text-gray-400 lg:flex items-center font-semibold sm:break-words">{url}<span className="text-gray-500">{userId}</span></div>
        <div className="flex items-center"><Button onClick={copyUrl}  text="Copy Root Url" classList="px-1 py-1"/></div>
    </div>
  )
}
