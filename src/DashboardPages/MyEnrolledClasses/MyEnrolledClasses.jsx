import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Provider/AuthProvider";


const MyEnrolledClasses = () => {

    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false)



    const token = localStorage.getItem('jwt-token');

    useEffect(() => {


        fetch(`https://holy-child-summer-camp-server-side.vercel.app/enrollClasses/${user?.email}`, {
            method: "GET",
            headers: {

                authorization: `bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(res => {

                setData(res)
            })
            .catch(error => console.log(error))


    }, [user])


    console.log(data)

    
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 1000)
    }, [])

    return (



        <div className=" w-[90%] mx-auto pb-[50px] ">

            <h2 className={`text-[25px] md:text-[30px] lg:text-[30px] xl:text-[35px]  2xl:text-[40px] font-medium text-center mb-10 lg:font-semibold  rounded-md  `}>Enrolled classes </h2>
            <div className="overflow-x-auto ">
                <table className="table ">
                    {/* head */}
                    <thead className="  text-white text-[20px] 
             bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
                        <tr>

                            <th>#</th>

                            <th>Image</th>
                            <th>Class name</th>

                            <th>Instructor name</th>

                            <th>price</th>

                            <th>Payment</th>


                        </tr>
                    </thead>
                    <tbody>
{

    data?.map(a=> 
        <tr key={a?._id} className=" text-white text-[15px] font-[400]
    bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r ">
        
            <td></td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={a?.classImage} />
                    </div>
                </div>
            </td>
            <td>{a?.className}</td>
            <td>{a?.instructorName}</td>
            <td>{a?.price}</td>
            <td>{a?.payment}</td>





        </tr>)
}
                    </tbody>



                </table>
                {data?.length === 0 && <p className={` text-xl text-red-500 ${show?' block':' hidden'} font-semibold mt-[100px] text-center`}>You have not Enrolled any courses yet!</p>}
            </div>
        </div>


    );
};

export default MyEnrolledClasses;