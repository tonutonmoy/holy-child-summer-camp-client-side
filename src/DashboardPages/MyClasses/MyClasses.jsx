import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const MyClasses = () => {

    const {user,loading}=useContext(AuthContext);

      const[axiosSecure]=useAxiosSecure();

      




      const {   data: allData=[] } = useQuery({
        queryKey: ['allClassesByInstructor',user?.email],
        enabled: ! loading,
        queryFn: async ()=>{
        
            const res= await axiosSecure.get(`/allClassesByInstructor/${user && user?.email}`)

              
            return res.data
        } ,
    })





    

    return (
        <div className=" w-[90%] mx-auto ">

<h2 className='text-[33px] font-medium text-center mt-60 '>My classes </h2>
            <div className=" w-full  py-20 rounded-[30px]" >


           
              {

                  allData?.map(a=>   <div key={a?._id} className="card w-full grid md:grid-cols-2 my-20  shadow-xl bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black via-black650 to-red-500
                  " style={{boxShadow: "30px 30px 30px black"}}>
                    <div>
                    <img className='h-full w-full   rounded-l-[15px]   '  src={a?.classImage} alt="Shoes" />
                    </div>
                       <div className="card-body">
                           <h2 className="text-[18px] font-[500] mt-5 text-white ">Class name: {a?.className} </h2>
                           <p className=" text-[18px] font-[300] my-5 text-white">
                               <span className=" font-[500] ">Name: {a?.instructorName}</span>
   
                           </p>
   
                           <p className=" text-[18px] font-[300] my-5 text-white">
                               <span className=" font-[500] ">Email: {a?.instructorEmail}</span>
   
                           </p>
                           <p className=" text-[18px] font-[300] my-5 text-white">
                               <span className=" font-[500] ">Available seats: {a?.availableSeats}</span>
   
                           </p>
                           <p className=" text-[18px] font-[300] my-5 text-white">
                               <span className=" font-[500] ">Total students enroll: {a?.totalStudent}</span>
   
                           </p>
                           <p className=" text-[18px] font-[300] my-5 text-white">
                               <span className=" font-[400] ">Price: {a?.price}</span>
   
                           </p>
                           <p className=" text-[18px] font-[300] my-5 text-white">
                               <span className=" font-[400] ">Status: {a?.status}</span>
   
                           </p>
   
                           <p className=" text-[18px] font-[300] my-5 text-white">
                               <span className=" font-[400] ">FeedBack: {a?.feedBack}</span>
   
                           </p>
   
   
                           <button className="btn w-full btn-outline border-white text-white text-[15px] font-[500]
                           hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/60 via-black/60 to-red-500/50 hover:border-none">Update</button>
                       </div>
                   </div>
   )

              }


            </div>


          


        
        </div>
    );
};

export default MyClasses;