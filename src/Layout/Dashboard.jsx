import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Dashboard = () => {
    return (
        <div>

            <Navbar></Navbar>


            <div className="drawer lg:drawer-open py-60 md:py-0 ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center ">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 h-full text-base-content md:mt-[150px] mt-5 md:pt-10 bg-sky-500 ">
                        {/* Sidebar content here */}
                        <li className=" text-[20px] font-[500] text-white my-5"><a>My selected classes</a></li>
                        <li className=" text-[20px] font-[500] text-white my-5"><a>My enrolled classes</a></li>
                        <li className=" text-[20px] font-[500] text-white my-5"><a>Payment history</a></li>
                        <li className=" text-[20px] font-[500] text-white my-5"><a>Add a class</a></li>
                        <li className=" text-[20px] font-[500] text-white my-5"><a>My selected class</a></li>
                        <li className=" text-[20px] font-[500] text-white my-5"><a>My classes</a></li>
                        <li className=" text-[20px] font-[500] text-white my-5"><a>Manage classes</a></li>
                        <li className=" text-[20px] font-[500] text-white my-5"><a>Manage users</a></li>
                       
                    </ul>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;