import { useContext, useEffect, useState } from 'react';
import { BsFillBookmarkCheckFill} from 'react-icons/bs';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';


const Classes = () => {

const {user,toggle}=useContext(AuthContext);

    const [allApproveClasses,setAllApproveClasses]=useState();

    const [checkingUser,setCheckingUser]=useState();

    useEffect(()=>{

       fetch('https://holy-child-summer-camp-server-side.vercel.app/allApproveClasses')
       .then(res=> res.json())
       .then(res=> setAllApproveClasses(res))
       .catch(error=> console.log(error))  


    },[]);

    useEffect(()=>{

       fetch(`https://holy-child-summer-camp-server-side.vercel.app/checkingUser/${user?.email}`)
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

        fetch(`https://holy-child-summer-camp-server-side.vercel.app/selectedClasses/${user && user?.email}`, {
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
        <div className={`py-40  ${toggle?"bg-[#090909] ":""} `}>
        <h2 className={`text-[25px] md:text-[30px] lg:text-[30px] xl:text-[35px]  2xl:text-[40px] font-medium text-center my-20 lg:font-semibold ${toggle?"text-white":"text-[#2D3747] "} rounded-md  `}> All Classes </h2>

  <div className=" grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 xxl:grid-cols-4   w-[90%] gap-10  mx-auto" >



{

    allApproveClasses?.map(a=> 
        


<div key={a?._id} className="w-full px-4  "

>
<div className={`mx-auto mb-10 max-w-[370px]  ${toggle?"text-white border-[1px]":"text-black"}   hover:shadow-md shadow-gray-500   hover:rounded-md ${a?.availableSeats===0 ? 'bg-red-900 hover:bg-red-900':' '}  `}>
  <div className="mb-8 overflow-hidden rounded">
    <img
      src={a?.classImage} 
      alt="image"
      className="w-full h-[300px] "
    />
  </div>
  <div className='p-2'>
  
    <h3     className="text-dark  mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
        Class :
    <span className='ms-2'>
    {a?.className}  
    </span>
      
    </h3>
    <p className="text-body-color text-base">
    Instructor : 
    <span className='ms-2'>
     {a?.instructorName} 
     </span>
    </p>
    <p className="text-body-color text-base">
    Available Seats:  
    <span className='ms-2'>
     {a?.availableSeats} 
     </span>
    </p>
   
    <p className="text-body-color text-base">Price: 
    <span className='ms-2'>
    ${a?.price}
     </span> 
    </p>

    <button onClick={()=>bookingClass(a)} className="  w-full flex items-center justify-center gap-3 p-1 rounded-md text-[18px] my-2 text-[400] text-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90 border-none" 
           
           disabled={ checkingUser?.message === 'admin' || checkingUser?.message === 'instructor' ||a?.availableSeats === 0 ? true :false}
           
           >   
           <BsFillBookmarkCheckFill/>{a?.availableSeats===0?'Not available':  "Select" }
           </button>
  </div>
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