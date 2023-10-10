import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";



import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { HiFolderAdd } from 'react-icons/hi';
import { FaBook, FaUsers } from 'react-icons/fa';
import { MdDoneOutline, MdPayment, MdBorderColor } from 'react-icons/md';
import { ImHome3 } from 'react-icons/im';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {


    const { user, toggle, setToggle } = useContext(AuthContext);

    const [userRol, setRol] = useState(null);

    // console.log(userRol)

    const token = localStorage.getItem('jwt-token');

    useEffect(() => {


        fetch(`https://holy-child-summer-camp-server-side.vercel.app/allUsersRol/${user && user?.email}`, {
            method: "GET",
            headers: {

                authorization: `bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(res => {

                setRol(res)

            })


    }, [user])




    return (
        <div className={`${toggle ? 'bg-[#090909] text-white' : 'bg-white '}   relative`}>

            {/* <Navbar></Navbar> */}


            <div className="drawer lg:drawer-open    ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start mt-[100px]  overflow-x-auto">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn  drawer-button bg-gray-900 text-white lg:hidden  z-10 fixed top-[1%] left-[3%]">Menu</label>

                    <h2 className=" text-[20px] md:text-[30px]  lg:text-[30px] xl:text-[30px] 2xl:text-[30px] font-[500] pb-[50px]"> welcome  {user?.displayName} </h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side z-20 ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                    <ul className={`menu p-4 w-[75%] md:w-80  lg:w-80 xl:w-80 2xl:w-80 py-10 md:py-0 lg:py-0 xl:py-0 2xl:py-0 h-full text-base-content  md:pt-10  ${toggle ? 'bg-[#090909] text-white border-r-[1px]' : 'bg-gray-500'}  `}>
                        {/* Sidebar content here */}

                        <li className=" font-[500] text-white mb-5 mt-[30px] md:mt-[30px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]
                                text-[15px] md:text-[18px]  lg:text-[18px] xl:text-[20px] 2xl:text-[20px]">



                            <div className="avatar flex justify-center ">
                                <div className="  w-[100px] md:w-[110px] lg:w-[120px]  xl:w-[140px] 2xl:w-[140px]  rounded-full border-[5px]">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                            </div>

                        </li>

                      <div className=" flex items-center justify-between">
                      <li className=" font-[500] text-white my-5
                                text-[15px] md:text-[18px]  lg:text-[18px] xl:text-[20px] 2xl:text-[20px]">
                            <Link to='/'><ImHome3 /> Home</Link>
                        </li>

                        <li className="rounded-[20px] mr-[50px]  h-[40px] w-[30%] md:w-[30%] lg:w-[25%] xl:w-[25%] 2xl:w-[25%]  bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black via-black to-red-500  " style={{ border: "2px solid white" }}>
                            <button onClick={() => setToggle(!toggle)} className=" text-[15px]   font-[500] text-white ">{toggle === true ? 'Light' : 'Dark'}</button>
                        </li>

                      </div>

                        {
                            userRol?.userRoll === 'student' &&
                            <>

                                <li className=" font-[500] text-white my-5
                                text-[15px] md:text-[18px]  lg:text-[18px] xl:text-[20px] 2xl:text-[20px]">

                                    <Link to='mySelectedClasses'>   <BsFillBookmarkCheckFill />My selected classes</Link>
                                </li>

                                <li className=" font-[500] text-white my-5
                                text-[15px] md:text-[18px]  lg:text-[18px] xl:text-[20px] 2xl:text-[20px]">
                                    <Link to='myEnrolledClasses'><MdDoneOutline /> My enrolled classes</Link>
                                </li>

                                <li className=" font-[500] text-white my-5
                                text-[15px] md:text-[18px]  lg:text-[18px] xl:text-[20px] 2xl:text-[20px]">
                                    <Link to='paymentHistory'><MdPayment /> Payment history</Link>
                                </li>



                            </>
                        }


                        {/* instructor */}

                        {


                            userRol?.userRoll === 'instructor' && <>

                                <li className=" font-[500] text-white my-5
                                text-[15px] md:text-[18px]  lg:text-[18px] xl:text-[20px] 2xl:text-[20px]">
                                    <Link to='addAClass'><HiFolderAdd /> Add a class</Link>
                                </li>



                                <li className=" font-[500] text-white my-5
                                text-[15px] md:text-[18px]  lg:text-[18px] xl:text-[20px] 2xl:text-[20px]">
                                    <Link to='myClasses'> <MdBorderColor />My classes</Link>
                                </li>
                            </>
                        }


                        {/* admin */}
                        {

                            userRol?.userRoll === 'admin' && <>
                                <li className=" font-[500] text-white my-5
                                text-[15px] md:text-[18px]  lg:text-[18px] xl:text-[20px] 2xl:text-[20px]">
                                    <Link to='manageClasses'><FaBook />Manage classes</Link>
                                </li>

                                <li className=" font-[500] text-white my-5
                                text-[15px] md:text-[18px]  lg:text-[18px] xl:text-[20px] 2xl:text-[20px]">
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