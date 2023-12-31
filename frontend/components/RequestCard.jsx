

export default function RequestCard({title="",description="",url="",isNeeded=false}) {
  return (
    <div className="w-full h-72 shadow-md rounded-lg border-2 border-gray-300 p-3 text-center flex flex-col justify-between">
       
        <div>
        <h3 className="mb-1 font-bold text-gray-500 md:text-lg lg:text-xl">{title}</h3>
        <div className=" text-gray-500 text-sm font-semibold break-words" >
            {url}
        </div>
        </div>

        <p className="break-words text-gray-500 font-medium text-md leading-4">
         {description}
        </p>
        <div>
        <div className="text-sm leading-4 text-gray-500 mb-2">
          <span className="text-gray-500 mr-1 font-semibold">{"{endpoint}"}</span><span>{"Name of endpoint created"}</span>
        </div>
        {
          isNeeded&& <div className="text-sm leading-4 text-gray-500">
          <span className="text-gray-500 mr-1 font-semibold">{"{_id}"}</span><span>{"Unique value assigned to every JSON payload"}</span>
        </div>
        }
        </div>
    </div>
  )
}
