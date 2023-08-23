

export default function RequestCard({title="",description="",url="",isNeeded=false}) {
  return (
    <div className="w-full h-72 shadow-md rounded-lg border-2 border-gray-300 p-3 text-center flex flex-col justify-between">
       
        <div>
        <h3 className="text-2xl mb-1 font-bold text-gray-500">{title}</h3>
        <div className=" text-gray-400 text-sm font-semibold break-words" >
            {url}
        </div>
        </div>

        <p className="break-words text-gray-500 font-medium text-md leading-4">
         {description}
        </p>
        <div>
        <div className="text-sm leading-4 text-gray-400 mb-2">
          <span className="text-gray-500 mr-1 font-semibold">{"{endpoint}"}</span><span>{"Name of endpoint created"}</span>
        </div>
        {
          isNeeded&& <div className="text-sm leading-4 text-gray-400">
          <span className="text-gray-500 mr-1 font-semibold">{"{_id}"}</span><span>{"Unique value assigned to every JSON payload"}</span>
        </div>
        }
        </div>
    </div>
  )
}
