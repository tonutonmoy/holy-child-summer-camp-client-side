import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const InstructorPage = () => {
  const {toggle}=useContext(AuthContext);

     const [allInstructors,setAllInstructors]=useState();

    useEffect(()=>{

       fetch('https://holy-child-summer-camp-server-side.vercel.app/allInstructors')
       .then(res=> res.json())
       .then(res=> setAllInstructors(res))
       .catch(error=> console.log(error))  


    },[])
    

    console.log(allInstructors)

    return (
        <div className={`py-40   ${toggle?"bg-[#090909] ":""} `}>
                  <h2  className={`text-[25px] md:text-[30px] lg:text-[30px] xl:text-[35px]  2xl:text-[40px] font-medium text-center my-20 lg:font-semibold ${toggle?"text-white":"text-[#2D3747] "} rounded-md  `}> All Instructors </h2>

            <div className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4   w-[90%] mx-auto gap-5" >



{
  allInstructors?.map(data=>



  <div  key={data?._id} className="group shadow-md  relative m-0 flex h-72 w-full rounded-xl shadow-gray-900  overflow-hidden z-0  ring-gray-900/5 sm:mx-auto sm:max-w-lg bg-black/90 ">
    <div className={`z-0 ${toggle && "border-[1px]"}  h-full w-full overflow-hidden rounded-xl opacity-100 transition duration-300 ease-in-out group-hover:opacity-70 dark:border-gray-700 dark:opacity-70`}>
      <img
        src={data?.userPhoto}
        className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:opacity-50 dark:opacity-100 "
        alt=""
      />
    </div>
    <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
      <h1 className="font-serif text-2xl font-bold text-white shadow-xl dark:text-gray-200  group-hover:text-[30px]">
        {data?.userName}
      </h1>
      <h1 className="text-sm font-light text-gray-200 shadow-xl dark:text-gray-200 group-hover:text-[20px]">
        {data?.userEmail}
      </h1>
    </div>
  </div>









)

}




            </div>

        </div>
    );
};

export default InstructorPage;