

import { useContext } from "react";
import useAllUsers from "../../Hooks/useAllUsers";
import { AuthContext } from "../../Provider/AuthProvider";



const ManageUser = () => {



    const [allUsers,refetch]=useAllUsers()


       const{user}=useContext(AuthContext)



  


    const makeAdmin=(email)=>{

      

        const token= localStorage.getItem('jwt-token')
         
         fetch(`https://holy-child-summer-camp-server-side.vercel.app/makeAdmin?adminEmail=${user && user?.email}&userEmail=${email}`,{
            method:"PATCH",
            headers:{
                    
                authorization:`bearer ${token}`
            }
         })
         .then(res=> res.json())
         .then(res=> {
            
            if(res.modifiedCount > 0){
              
                refetch()
            }
            console.log(res)
        })
         .catch(error=> console.log(error))
         

    }

    const makeInstructor=(email)=>{

      

        const token= localStorage.getItem('jwt-token')
         
         fetch(`https://holy-child-summer-camp-server-side.vercel.app/makeinstructor?adminEmail=${user && user?.email}&userEmail=${email}`,{
            method:"PATCH",
            headers:{
                    
                authorization:`bearer ${token}`
            }
         })
         .then(res=> res.json())
         .then(res=> {
            
            if(res.modifiedCount > 0){
               
                refetch()
            }
            console.log(res)
        })
         .catch(error=> console.log(error))
         

    }

    return (
        <div className=" w-[90%] mx-auto mb-20 ">

            <h2 className={`text-[25px] md:text-[30px] lg:text-[30px] xl:text-[35px]  2xl:text-[40px] font-medium text-center mb-10 lg:font-semibold  rounded-md  `}>Manage users </h2>

            <div className="overflow-x-auto ">
                <table className="table ">
                    {/* head */}
                    <thead className="  text-white text-[20px] 
             bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r
             
            ">
                        <tr>

                            <th>#</th>

                            <th>Image</th>
                            <th>Name</th>

                            <th className=" text-center"> Email</th>
                            <th>Role</th>



                            <th className=" text-center  p-5">
                                action
                            </th>
                            <th className=" text-center  " >
                                action
                            </th>


                        </tr>
                    </thead>
                    <tbody>

                        {

                            allUsers?.map((singleUser, index) => <tr key={singleUser?._id} className=" text-white text-[15px] font-[400]
                    bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r ">
                                <td>{index + 1}</td>
                                <td>
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={singleUser?.userPhoto} />
                                    </div>

                                </td>
                                <td>{singleUser?.userName}</td>
                                <td>{singleUser?.userEmail}</td>
                                <td>{singleUser?.userRoll}</td>
                                <td className=" text-center">
                                    <button onClick={()=> makeInstructor(singleUser?.userEmail)} className='btn text-[12px]  btn-sm bg-green-500 text-white hover:text-black'
                                    
                                    disabled={singleUser?.userRoll === 'admin' || singleUser?.userRoll === 'instructor' ? true : false }
                                    
                                    >
                                        Make Instructor
                                    </button>
                                </td>


                                <td   className=" text-center">
                                    <button onClick={()=>makeAdmin(singleUser?.userEmail)}
                                     
                                     disabled={singleUser?.userRoll === 'admin' || singleUser?.userRoll === 'instructor' ? true : false }

                                    className="btn  text-[12px] btn-outline btn-sm text-white bg-red-500">
                                        Make Admin
                                    </button>
                                </td>





                            </tr>)
                        }
                    </tbody>



                </table>
            </div>
        </div>

    );
};

export default ManageUser;