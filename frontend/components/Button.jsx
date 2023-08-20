
export default function Button({text,classList="",onClick,type}) {
  return type=="bordered"?<button onClick={onClick} className={` text-gray-400 px-2 py-1  rounded-md border-gray-500 border-1 hover:bg-gray-400 hover:text-white   hover:border-gray-500 ${classList}`}>{text}</button>:
  <button onClick={onClick} className={`border-none bg-gray-500 text-white px-2 py-1  rounded-md hover:bg-gray-400 hover:text-gray-500 hover:border-2  hover:border-gray-500 ${classList}`}>{text}</button>
}
