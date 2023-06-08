import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Dashboard = () => {
    return (
        <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">

            <Navbar></Navbar>


            <div className="drawer lg:drawer-open  py-60 md:py-0 ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center ">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 h-full text-base-content md:mt-[150px] mt-12 md:pt-10 bg-sky-500 ">
                        {/* Sidebar content here */}
                        <li className=" text-[20px] font-[500] text-white my-5">
                            <Link to='mySelectedClasses'>My selected classes</Link>
                        </li>

                        <li className=" text-[20px] font-[500] text-white my-5">
                            <Link to='myEnrolledClasses'>My enrolled classes</Link>
                        </li>

                        <li className=" text-[20px] font-[500] text-white my-5">
                            <Link to='paymentHistory'>Payment history</Link>
                        </li>

                        <li className=" text-[20px] font-[500] text-white my-5">
                            <Link to='addAClass'>Add a class</Link>
                        </li>

                        

                        <li className=" text-[20px] font-[500] text-white my-5">
                            <Link to='myClasses'>My classes</Link>
                        </li>

                        <li className=" text-[20px] font-[500] text-white my-5">
                            <Link to='manageClasses'>Manage classes</Link>
                        </li>

                        <li className=" text-[20px] font-[500] text-white my-5">
                            <Link to='manageUsers'>Manage users</Link>
                        </li>

                    </ul>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;