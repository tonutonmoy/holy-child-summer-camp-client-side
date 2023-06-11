import { useEffect, useState } from 'react';
import './HomeClassSection.css'



const HomeClassSection = () => {

const [data,setData]=useState()
    useEffect(()=>{

        fetch('http://localhost:5000/homedata')
        .then(res=> res.json())
        .then(res=> setData(res) )


    },[])
    

    return (

        <div className='my-40' >

          <h2 className='text-[40px] font-medium text-center my-10'> Popular Classes </h2>
            <div className="class-section grid md:grid-cols-3 gap-10 w-[90%] mx-auto  bg-fixed py-40 md:justify-start px-10 rounded-[30px]" >


{
    data?.slice(0,6).map(a=>
        <div key={a?._id} style={{border:'1px solid white',boxShadow:"10px 10px 10px black"}} className="card w-full  shadow-xl  btn-outline hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
         duration-[3s] 
  " >
            <img className='w-full h-[300px] rounded-t-[17px]' src={a?.classImage}  />
            <div className="card-body">
            <p className=" text-[18px] font-[300] my-3 text-white">
                    <span className=" font-[500] ">Class name:</span> {a?.className} 

                </p>
                <p className=" text-[18px] font-[300] my-3 text-white">
                    <span className=" font-[500] ">Instructor name:</span> {a?.instructorName} 

                </p>
                <p className=" text-[18px] font-[300] my-3 text-white">
                    <span className=" font-[500] ">Available seats:</span> {a?.availableSeats} 

                </p>
                <p className=" text-[18px] font-[300] my-3 text-white">
                    <span className=" font-[500] ">Total students:</span> { a?.totalStudent} 

                </p>
                <p className=" text-[18px] font-[300] my-3 text-white">
                    <span className=" font-[400] ">Price:</span> ${a?.price} 

                </p>

            </div>
        </div>
)
}


            </div>






        </div>
    );
};

export default HomeClassSection;