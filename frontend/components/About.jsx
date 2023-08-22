
export default function About() {
  return (
    <section className="w-4/6 mt-12 flex flex-col items-center mx-auto shadow-md rounded-lg border-2 border-gray-300  mb-3">
          <div className="h-16  w-full flex items-center justify-center text-gray-500 ">
            <h2 className="text-3xl font-semibold leading-none">What is INSTAPI</h2>
          </div>
          <p className="text-lg text-gray-400   w-full p-4 pt-0">
            Instapi is a platform that will enable developers to build there full stack solution without the need to code a 
            full fledged backend and get up and running in no time. You can create API endpoints through Instapi platform and can leverage 
            the GET , POST , PUT AND DELETE http requests for communication with the backend . It saves you from the tidious task of creating
            and managing a backend server for small scale applications and prototypes .  
          </p>
    </section>
  )
}
