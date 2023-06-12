import { useEffect, useState } from 'react';
import './HomeClassSection.css'


import { motion } from "framer-motion"


const HomeClassSection = () => {

const [data,setData]=useState()
    useEffect(()=>{

        fetch('https://holy-child-summer-camp-server-side.vercel.app/homedata')
        .then(res=> res.json())
        .then(res=> setData(res) )


    },[])
    

    return (

        <div className='my-40' >

          <h2 className='text-[40px] font-medium text-center my-10'> Popular Classes </h2>
            <div className="class-section grid md:grid-cols-3 gap-10 w-[90%] mx-auto  bg-fixed py-40 md:justify-start px-10 rounded-[30px]  " >


{
    data?.slice(0,6).map(a=>
        <motion.div animate={{
            scale: 0.9
          
          }}
                   
          
          key={a?._id} style={{border:'1px solid white',boxShadow:"10px 10px 10px black"}} className="card w-full  shadow-xl  btn-outline hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
         duration-[2s] 
  " >
            <img className='w-full h-[300px] rounded-t-[17px]' src={a?.classImage}  />
            <div className="card-body">
            <motion.p animate={{rotate:360}} className=" text-[18px] font-[300] my-3 text-white duration-[3s]">
                    <span className=" font-[500] ">Class name:</span> {a?.className} 

                </motion.p>
                <motion.p animate={{rotate:360}} className=" text-[18px] font-[300] my-3 text-white duration-[3s]">
                    <span className=" font-[500] ">Instructor name:</span> {a?.instructorName} 

                    </motion.p>
                <motion.p animate={{rotate:360}} className=" text-[18px] font-[300] my-3 text-white duration-[3s]">
                    <span className=" font-[500] ">Available seats:</span> {a?.availableSeats} 

                    </motion.p>
                <motion.p animate={{rotate:360}} className=" text-[18px] font-[300] my-3 text-white duration-[3s]">
                    <span className=" font-[500] ">Total students:</span> { a?.totalStudent} 

                    </motion.p>
                    <motion.p animate={{rotate:360}} className=" text-[18px] font-[300] my-3 text-white duration-[3s]">
                    <span className=" font-[400] ">Price:</span> ${a?.price} 

                    </motion.p>

            </div>
        </motion.div>
)
}


            </div>






        </div>
    );
};

export default HomeClassSection;