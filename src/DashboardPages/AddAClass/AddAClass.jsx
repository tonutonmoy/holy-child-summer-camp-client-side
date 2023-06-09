import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AddAClass = () => {

    const {user}=useContext(AuthContext);

    const [axiosSecure]=useAxiosSecure();

    const formHandler=(e)=>{
      
        event.preventDefault();

        const className=e.target.className.value;
        const classImage=e.target.classImage.value;
        const instructorName=user?.displayName;
        const instructorEmail=user?.email;

        const instructorImage=user?.photoURL;
        const availableSeats=parseFloat(e.target.availableSeats.value);
        const price=parseFloat(e.target.price.value);


        const classInformation={

           
            classImage,
            className,
            availableSeats,
            price,
            totalStudent:0,
            status:'pending',
            feedBack:'',
            instructorName,
            instructorEmail,
            instructorImage


        }


          
        axiosSecure.post(`/allClasses/${user?.email}`,classInformation)
        .then(res=>{ 
            
            if(res.data.insertedId){

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'done',
                    showConfirmButton: false,
                    timer: 1500
                  })

                  e.target.reset()
            }

            console.log(res.data)})
        .catch(error=> console.log(error))



        console.log(classInformation)
 

    }

    return (
        <div className=" w-full py-60  " >
<h2 className='text-[33px] font-medium text-center  '>Add  a classes </h2>

            <form onSubmit={formHandler} className="w-[90%] mx-auto     bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-sky-500 to-sky-500 px-20 py-10 mt-40 rounded-lg " >

                <section className=" grid grid-cols-2 ">

                    <div className=" text-center my-5">

                        <p className=" text-[18px] font-[500] "> Class name</p>
                        <input type="text" placeholder="class name" name="className" className="input input-bordered input-md w-full max-w-xs my-3  " required />


                    </div>


                    <div className=" text-center my-5">

                        <p className=" text-[18px] font-[500] "> Class image</p>
                        <input type="text" placeholder="class image" name="classImage" className="input input-bordered input-md w-full max-w-xs my-3 " required />


                    </div>


                    <div className=" text-center my-5">

                        <p className=" text-[18px] font-[500] "> Name</p>
                        <input type="text" placeholder="name" name="name" className="input input-bordered input-md w-full max-w-xs my-3 " required  readOnly defaultValue={user?.displayName} />


                    </div>

                    <div className=" text-center my-5">

                        <p className=" text-[18px] font-[500] "> Email</p>
                        <input type="email" placeholder="email" name="email" className="input input-bordered input-md w-full max-w-xs my-3  " required  readOnly defaultValue={user?.email} />


                    </div>

                    <div className=" text-center my-5">

                        <p className=" text-[18px] font-[500] ">Available seats</p>
                        <input type="number" placeholder="available seats" name="availableSeats" className="input input-bordered input-md w-full max-w-xs my-3  " required />


                    </div>

                    <div className=" text-center my-5">
                   
                  

                        <p className=" text-[18px] font-[500]   "> Price</p>
                        <input type="number" placeholder="price" name="price" className="input input-bordered input-md w-full max-w-xs my-3   " required />


                    </div>







                </section>


              <section className=" text-center mt-10">
              <button className="btn w-[50%] btn-outline border-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-sky-500 to-sky-500 hover:border-white hover:text-black
              text-[17px] font-[500]">Add</button>
              </section>

            </form>

        </div>
    );
};

export default AddAClass;