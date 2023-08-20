
export default function DataCard({type="",data}) {
  return (
    <div className="h-32 w-40 bg-gray-500 text-white p-3 flex flex-col justify-center">
        <h3 className="text-5xl text-center">{data}</h3>
        <h4 className="text-xl text-center leading-6">{type}</h4>
    </div>
  )
}
