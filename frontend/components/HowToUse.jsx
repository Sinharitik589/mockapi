import { useStore } from "../context/StoreContext"
import Horizont from "./Horizont"



export default function HowToUse() {

  const {userId} = useStore()

  return (
    <section className="lg:w-4/6 md:w-full mt-12  mx-auto shadow-md rounded-lg border-2 border-gray-300  text-gray-500    mb-3 p-4">
        <div className="h-16  w-full flex items-center justify-center text-gray-500 ">
        <h2 className="text-3xl font-semibold leading-none">How to use</h2>
        </div>
        <p className="w-full">
        Suppose you have a frontend app which needs to manage user data , 
        this is an example of how you could leverage instapi endpoints for this usecase.
        </p>
        <h5 className="text-2xl font-semibold text-gray-500 mt-2 mb-2">1. Creating a user</h5>
        <Horizont/>
        <p className="text-md break-words">
        Send a <b>POST</b> request to <b>{`https://instapi.sinha.website/api/${userId}/{endpoint}`}</b> ,
        with user data as <b>JSON payload</b> .This will create a new user and will return the  user details with an auto generated additional property <b>_id</b>.This <b>_id</b> property is generated by <b>INSTAPI</b> and will be unique for each user created by you . This is an important property as it will be used to update or delete the user created.

        </p>
        <h5 className="text-2xl font-semibold text-gray-500 mt-2 mb-2">2. Getting list of all users</h5>
        <Horizont/>
        <p className="break-words">
        Send a <b>GET</b> request to <b>{`https://instapi.sinha.website/api/${userId}/{endpoint}`}</b> , here endpoint is the value user/users that you created in the previous step.
    this will return list of all the users created for the particular endpoint as an array .
        </p>
        <h5 className="text-2xl font-semibold text-gray-500 mt-2 mb-2">3. Getting a particular user</h5>
        <Horizont/>
        
        <p className="break-words">
        For getting a particular user you need the unique object id that you can get from the _id property of the json payload that you recieve while creating a user , or you also get it when you get list of all users. For getting a particular user send a <b>GET</b> request to <b>{`https://instapi.sinha.website/api/${userId}/{endpoint}/{_id}`}</b>, the response will be a JSON payload containing the user data.
        </p>
        <h5 className="text-2xl font-semibold text-gray-500 mt-2 mb-2">4.Updating a particular user </h5>
        <Horizont/>
        
        <p className="break-words">For updating a particular user, you need the same object id that you can get from the _id property of the json payload that you recieve. For updating a particular user send a <b>PUT</b> request to <b>{`https://instapi.sinha.website/api/${userId}/{endpoint}/{_id}`}</b> with JSON payload . The response will be a JSON payload containing updated user data.</p>
        <h5 className="text-2xl font-semibold text-gray-500 mt-2 mb-2">5.Deleting a particular user</h5>
        <Horizont/>
        
        <p className="break-words">
        For deleting a particular user , send a <b>DELETE</b> request to <b>{`https://instapi.sinha.website/api/${userId}/{endpoint}/{_id}`}</b> .
        </p>

  </section>
  )
}
