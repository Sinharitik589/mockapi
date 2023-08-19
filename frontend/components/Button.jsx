
export default function Button({text,classList,onClick,type}) {
  return (
    <button onClick={onClick} className={`border-none bg-gray-500 text-white px-3 py-2 font-semibold rounded-md hover:bg-gray-400 hover:text-gray-500 hover:border-2  hover:border-gray-500 ${classList}`}>{text}</button>
    // <button onClick={onClick} className={` text-gray-400 px-3 py-2 font-semibold rounded-md border-gray-500 border-2 ${classList}`}>{text}</button>

    )
}
