import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const MyClasses = () => {

    const {user,loading,toggle}=useContext(AuthContext);

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
        <div className={` w-[90%] mx-auto  ${toggle &&'text-white'}`}>

<h2 className={`text-[25px] md:text-[30px] lg:text-[30px] xl:text-[35px]  2xl:text-[40px] font-medium text-center mb-10 lg:font-semibold  rounded-md  `}>My classes </h2>
            <div className=" w-full  pb-20 rounded-[30px]  grid md:grid-cols-2 gap-10 lg:grid-cols-1  xl:grid-cols-2  3xl:grid-cols-3 " >


           
              {

                  allData?.map(a=>   <div key={a?._id} className={`card w-full ${toggle && 'border-[1px]' }   mb-20 hover:shadow-xl shadow-gray-900
                  `} >
                    <div className="w-full h-full p-5">
                    <img className='h-[300px] w-full rounded-md  border-[1px]  '  src={a?.classImage} alt="Shoes" />
                    </div>
                       <div className={`card-body ${toggle?'':'text-black'}`}>
                           <h2 className="text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-[400] mt-1  ">Class name: {a?.className} </h2>
                           <p className="text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-[400] mt-1  ">
                               <span className=" font-[400] ">Name: {a?.instructorName}</span>
   
                           </p>
   
                           <p className="text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-[400] mt-1  ">
                               <span className=" font-[400] ">Email: {a?.instructorEmail}</span>
                              
   
                           </p>
                           <p className="text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-[400] mt-1  ">
                               <span className=" font-[400] ">Available seats: {a?.availableSeats}</span>
   
                           </p>
                           <p className="text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-[400] mt-1  ">
                               <span className=" font-[400] ">Total students enroll: {a?.totalStudent}</span>
   
                           </p>
                           <p className="text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-[400] mt-1  ">
                               <span className=" font-[400] ">Price: {a?.price}</span>
   
                           </p>
                           <p className="text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-[400] mt-1  ">
                               <span className=" font-[400] ">Status: {a?.status}</span>
   
                           </p>
   
                        {

                            a?.status === 'deny' &&     <p className="text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-[400] mt-1  ">
                            <span className=" font-[400] ">FeedBack: {a?.feedBack}</span>

                        </p>
                        }
   
   
                           {/* <button className="btn w-full btn-outline border-white text-white text-[15px] font-[500]
                           hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/60 via-black/60 to-red-500/50 hover:border-none">Update</button> */}
                       </div>
                   </div>
   )

              }


            </div>


          


        
        </div>
    );
};

export default MyClasses;