import { useContext, useEffect, useState } from 'react';
import { BsFillBookmarkCheckFill} from 'react-icons/bs';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

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


    },[user]);


    const bookingClass=(a)=>{


        if(!user){
        return  toast.error("Please log in before selecting the course")

        }

       
        const {availableSeats,classImage,className,instructorEmail,instructorImage,instructorName,price,totalStudent,_id}=a;


        const selectedInfo={
            availableSeats,
            classImage,
            className,
            instructorEmail,
            instructorImage,
            instructorName,
            price,
            totalStudent,
            bookingId:_id,
            userEmail:user?.email

        }

        console.log(selectedInfo)


        const token = localStorage.getItem('jwt-token')

        fetch(`http://localhost:5000/selectedClasses/${user && user?.email}`, {
            method: "POST",
            headers: {

                authorization: `bearer ${token}`,

                'content-type':'application/json'
            },
            body: JSON.stringify(selectedInfo)
        })
            .then(res => res.json())
            .then(res => {

                if(res.insertedId){

                    Swal.fire({
                        title: 'Success',
                        text: 'user Add successfully',
                        icon: 'selected success',
                        confirmButtonText: 'Ok'
                      })
    
                }
            
                console.log(res)
            })
            .catch(error => console.log(error))



       
       };


       


    
    


    console.log(checkingUser)

    return (
        <div className="py-40 bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-sky-300 via-sky-500 to-sky-500">
        <h2 className='text-[40px] font-medium text-center py-10 text-white'> All Classes </h2>

  <div className=" grid md:grid-cols-3 w-[90%] gap-10  mx-auto" >




{

    allApproveClasses?.map(a=>  <div key={a?._id} style={{border:'1px solid white',boxShadow:'10px 10px 10px black'}} className={`card w-full  shadow-xl  btn-outline ${a?.availableSeats===0 ? 'bg-red-900 hover:bg-red-900':'hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black/60 to-red-500/60 '} 
    duration-[3s]  
`}   >
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
           
           <button onClick={()=>bookingClass(a)} className="btn  btn-outline text-[20px] text-[400] text-white hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/60 via-black to-red-500/50 hover:border-none" 
           
          disabled={ checkingUser?.message === 'admin' || checkingUser?.message === 'instructor' ||a?.availableSeats === 0 ? true :false}
           
           >   
           <BsFillBookmarkCheckFill/>{a?.availableSeats===0?'Not available':  "Select" }</button>
        

       </div>
   </div>
)
}


 <ToastContainer />

  </div>

</div>
    );
};

export default Classes;