import { useContext, useEffect, useState } from 'react';
import { BsFillBookmarkCheckFill} from 'react-icons/bs';
import { AuthContext } from '../../Provider/AuthProvider';

const Classes = () => {

const {user}=useContext(AuthContext);

    const [allApproveClasses,setAllApproveClasses]=useState();

    const [checkingUser,setCheckingUser]=useState();

    useEffect(()=>{

       fetch('http://localhost:5000/allApproveClasses')
       .then(res=> res.json())
       .then(res=> setAllApproveClasses(res))
       .catch(error=> console.log(error))  


    },[]);

    useEffect(()=>{

       fetch(`http://localhost:5000/checkingUser/${user?.email}`)
       .then(res=> res.json())
       .then(res=> setCheckingUser(res))
       .catch(error=> console.log(error))  


    },[user])
    


    console.log(checkingUser)

    return (
        <div className="py-40 bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-sky-300 via-sky-500 to-sky-500">
        <h2 className='text-[40px] font-medium text-center py-10 text-white'> All Classes </h2>

  <div className=" grid md:grid-cols-3 w-[90%] gap-10  mx-auto" >




{

    allApproveClasses?.map(a=>  <div key={a?._id} style={{border:'1px solid white',boxShadow:'10px 10px 10px black'}} className="card w-full  shadow-xl  btn-outline hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black/60 to-red-500/60
    duration-[3s]  
"   >
       <img className='h-[300px] rounded-t-[20px]' src={a?.classImage} alt="Shoes" />
      
       <div className="card-body">
          
         <p className=" text-[18px] font-[300] my-5 text-white">
               <span className=" font-[400] ">Class name:</span> {a?.className}

           </p>

           <p className=" text-[18px] font-[300] text-white">
               <span className=" font-[400] ">Instructor name:</span> {a?.instructorName}

           </p>
           <p className=" text-[18px] font-[300]  text-white">
               <span className=" font-[400] ">Available seats:</span> {a?.availableSeats}

           </p>
          
           <p className=" text-[18px] font-[300] mb-5 text-white">
               <span className=" font-[400] ">price:</span> ${a?.price}

           </p>
           
           <button className="btn  btn-outline text-[20px] text-[400] text-white hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/60 via-black to-red-500/50 hover:border-none" 
           
          disabled={ checkingUser?.message === 'admin' || checkingUser?.message === 'instructor'  ? true :false}
           
           >   
           <BsFillBookmarkCheckFill/> Select</button>
        

       </div>
   </div>
)
}




  </div>

</div>
    );
};

export default Classes;