import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";



import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { HiFolderAdd } from 'react-icons/hi';
import { FaBook, FaUsers } from 'react-icons/fa';
import { MdDoneOutline, MdPayment, MdBorderColor } from 'react-icons/md';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {


    const { user } = useContext(AuthContext);

    const [userRol, setRol] = useState(null);

    const token = localStorage.getItem('jwt-token');

    useEffect(() => {


        fetch(`http://localhost:5000/allUsersRol/${user && user?.email}`, {
            method: "GET",
            headers: {

                authorization: `bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(res => {

                setRol(res)
                console.log(res)
            })


    }, [user])




    return (
        <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">

            <Navbar></Navbar>


            <div className="drawer lg:drawer-open  py-60 md:py-0 ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center ">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    <h2 className=" text-[40px] font-[500]"> welcome  {user?.displayName} </h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 h-full text-base-content md:mt-[150px] mt-12 md:pt-10 bg-sky-500 ">
                        {/* Sidebar content here */}




                        {
                            userRol?.userRoll === 'student' &&
                            <>

                                <li className=" text-[20px] font-[500] text-white my-5">

                                    <Link to='mySelectedClasses'>   <BsFillBookmarkCheckFill />My selected classes</Link>
                                </li>

                                <li className=" text-[20px] font-[500] text-white my-5">
                                    <Link to='myEnrolledClasses'><MdDoneOutline /> My enrolled classes</Link>
                                </li>

                                <li className=" text-[20px] font-[500] text-white my-5">
                                    <Link to='paymentHistory'><MdPayment /> Payment history</Link>
                                </li>



                            </>
                        }


                        {/* instructor */}

                        {


                            userRol?.userRoll === 'instructor' && <>

                                <li className=" text-[20px] font-[500] text-white my-5">
                                    <Link to='addAClass'><HiFolderAdd /> Add a class</Link>
                                </li>



                                <li className=" text-[20px] font-[500] text-white my-5">
                                    <Link to='myClasses'> <MdBorderColor />My classes</Link>
                                </li>
                            </>
                        }


                        {/* admin */}
                        {

                            userRol?.userRoll === 'admin' && <>
                                <li className=" text-[20px] font-[500] text-white my-5">
                                    <Link to='manageClasses'><FaBook />Manage classes</Link>
                                </li>

                                <li className=" text-[20px] font-[500] text-white my-5">
                                    <Link to='manageUsers'><FaUsers /> Manage users</Link>
                                </li>
                            </>

                        }



                    </ul>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;