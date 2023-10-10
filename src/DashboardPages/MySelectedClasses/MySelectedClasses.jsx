import { MdPayment } from 'react-icons/md';
import useSelectedClassesAll from '../../Hooks/useSelectedClassesAll';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MySelectedClasses = () => {

    const [allSelectedClasses, refetch] = useSelectedClassesAll();
    const [show, setShow] = useState(false)




    const { user } = useContext(AuthContext);




    const deleteHandler = (id) => {



        const token = localStorage.getItem('jwt-token')




        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {


            if (result.isConfirmed) {



                fetch(`https://holy-child-summer-camp-server-side.vercel.app/deleteSelectedClass?userEmail=${user && user?.email}&id=${id}`, {
                    method: "DELETE",
                    headers: {

                        authorization: `bearer ${token}`,

                        'content-type': 'application/json'
                    }

                })
                    .then(res => res.json())
                    .then(res => {

                        if (res.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )


                            refetch()

                        }

                        console.log(res)
                    })
                    .catch(error => console.log(error))

            }





        });




    };
   
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 1000)
    }, [])


    return (
        <div className='w-[90%] pb-[50px] ' >

            <h2 className={`text-[25px] md:text-[30px] lg:text-[30px] xl:text-[35px]  2xl:text-[40px] font-medium text-center mb-10 lg:font-semibold  rounded-md  `}>Selected classes  </h2>
            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead className="  text-white text-[20px] 
             bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
                        <tr>

                            <th>#</th>

                            <th>Image</th>
                            <th>Class name</th>

                            <th>Instructor name:</th>
                            <th>Available seats</th>
                            <th>price</th>

                            <th>Pay</th>

                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            allSelectedClasses?.map((data, index) => <tr key={data?._id} className=" text-white text-[15px] font-[400]
                    bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r ">
                                <td>{index + 1}</td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={data?.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{data?.className}</td>
                                <td>{data?.instructorName}</td>
                                <td>{data?.availableSeats}</td>
                                <td>{data?.price}</td>




                                <td>

                                    <Link className='btn btn-sm bg-green-500 text-white hover:text-black' to={`/dashboard/paymentPage/${data?._id}`}> <MdPayment c /></Link>

                                </td>


                                <td >
                                    <button onClick={() => deleteHandler(data?._id)} className="btn btn-circle btn-outline btn-sm text-white bg-red-500 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>



                </table>
                {allSelectedClasses?.length === 0 && <p className={` text-xl text-red-500 ${show?' block':' hidden'} font-semibold mt-[100px] text-center`}>You have not selected any class!</p>}
            </div>
        </div>
    );
};

export default MySelectedClasses;