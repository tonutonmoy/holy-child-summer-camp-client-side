import { useEffect, useState } from "react";


const InstructorPage = () => {

     const [allInstructors,setAllInstructors]=useState();

    useEffect(()=>{

       fetch('https://holy-child-summer-camp-server-side.vercel.app/allInstructors')
       .then(res=> res.json())
       .then(res=> setAllInstructors(res))
       .catch(error=> console.log(error))  


    },[])
    

    console.log(allInstructors)

    return (
        <div className="py-40 bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-sky-300 via-sky-500 to-sky-500">
                  <h2 className='text-[40px] font-medium text-center py-10 text-white'> All Instructors </h2>

            <div className=" grid md:grid-cols-3 w-[90%] mx-auto gap-5" >



{
  allInstructors?.map(data=>


    <div key={data?._id} style={{border:'1px solid white',boxShadow:'10px 10px 10px black'}} className="card w-full  shadow-xl  btn-outline hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black/60 to-red-500/60
         duration-[3s]  
    "  >
         
           <img className=" h-[300px] w-full  rounded-t-[15px] " src={data?.userPhoto} alt="Shoes"
           
           
           
           />
        
            <div className="card-body">

            <p className=" text-[18px] font-[300]  my-5 text-white"
            
            
            
            >
                    <span className=" font-[400] ">Name:</span> {data?.userName}

                </p>

                <p className=" text-[18px] font-[300]  my-5 text-white"
                
               

                >
                    <span className=" font-[400] ">Email:</span> {data?.userEmail}

                </p>
                {/* <p className=" text-[18px] font-[300] my-5 text-white">
                    <span className=" font-[400] ">Classes name:</span>

                </p>
               
               
                <p className=" text-[25px] font-[300] my-5 text-white">
                    <span className=" font-[400] ">Total enroll:</span>

                </p> */}

                <button className="btn  btn-outline text-[20px] text-[400] text-white   hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/60 via-black to-red-500/50 hover:border-none"
                
              
                
                > See classes</button>
             

            </div>
        </div>
)

}




            </div>

        </div>
    );
};

export default InstructorPage;