import Button from "./Button";


export default function AddEndpoint({onClick}) {
  return (
    <div className="w-full rounded-md h-40 border-2 px-2 py-1 flex flex-col justify-center items-center">
        <Button text="Add New Endpoint" onClick={onClick}/>
    </div>
  )
}
