import { Link } from "react-router-dom";
import logo from '../../assets/logo/preview-school-logo-free-vector-design-1625727716.jpg'

const Navbar = () => {

    const navItem = <>


        <li>
            <Link className=" text-[20px] font-[500] p-3 mx-3 text-white " to='/'> Home</Link>
        </li>
        <li>
            <Link className=" text-[20px] font-[500] p-3 mx-3 text-white" to='/instructors'> Instructors</Link>
        </li>
        <li>
            <Link className=" text-[20px] font-[500] p-3 mx-3 text-white" to='/classes'> Classes</Link>
        </li>
        <li>
            <Link className=" text-[20px] font-[500] p-3 mx-3 text-white" to='/dashboard'> Dashboard </Link>
        </li>

        <li>
            <Link className=" text-[20px] font-[500] p-3 mx-3 text-white" to='/login'> Login </Link>
        </li>
        <li>
            <img className="" src='' alt="" />
        </li>
        <li>
            <button className=" btn-ghost text-[20px] font-[500] p-3 mx-3 text-white  ">Logout</button>

        </li>


    </>
    return (
        <div >
            <div className="navbar  fixed z-10  md:justify-between md:p-10 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">

                <div className="">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {navItem}
                        </ul>
                    </div>
                    <div className="flex items-center space-x-10">
                        <h2 className=" md:text-[30px] md:font-[500] text-white ">Holy child school</h2>
                     <img className="md:w-[70px] md:h-[70px] w-[40px] h-[40px] border-4  rounded-full border-white" src={logo} alt="" />
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;