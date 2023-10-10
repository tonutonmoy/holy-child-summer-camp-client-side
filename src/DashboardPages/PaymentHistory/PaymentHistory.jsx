import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import moment from 'moment';


const PaymentHistory = () => {



    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false)



    const token = localStorage.getItem('jwt-token');

    useEffect(() => {


        fetch(`https://holy-child-summer-camp-server-side.vercel.app/mayPaymentHistory/${user?.email}`, {
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
        <div className=" w-[90%] mx-auto  pb-[50px] ">

            <h2 className={`text-[25px] md:text-[30px] lg:text-[30px] xl:text-[35px]  2xl:text-[40px] font-medium text-center mb-10 lg:font-semibold  rounded-md  `}> Payment history  </h2>

            <div className="overflow-x-auto ">
                <table className="table  ">
                    {/* head */}
                    <thead className="  text-white text-[20px] 
             bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
                        <tr>

                            <th>#</th>

                            <th>Name</th>
                            <th>Email</th>

                            <th>Price</th>

                            <th>Transaction Id</th>

                            <th>Date</th>


                        </tr>
                    </thead>
                    <tbody>

                        {


                           data && data?.map(a => <tr key={a?._id} className=" text-white text-[15px] font-[400]
                              bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r ">
                                <td></td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={a?.classImage} />
                                        </div>
                                    </div>
                                </td>
                                <td>{a?.email}</td>
                                <td>{a?.price}</td>
                                <td>{a?.transactionId}</td>
                                <td>{moment(a?.date).format('MMMM Do YYYY, h:mm:ss a')}</td>





                            </tr>)
                        }
                    </tbody>



                </table>
                {data?.length === 0 && <p className={` text-xl text-red-500 ${show?' block':' hidden'} font-semibold mt-[100px] text-center`}>No payment history are available!</p>}
            </div>
        </div>

    );
};

export default PaymentHistory;