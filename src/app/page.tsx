import Booking from "./components/Booking/Booking"
 
export default function Home() {
  return (
    <div className="bg-white h-screen text-black">
     <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="">
        <Booking/>
      </div>
     <div className= " col-span-2 bg-red-100 ">
     Map
     </div>
     </div>
    </div>
  )
}