import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/logo/preview-school-logo-free-vector-design-1625727716.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const { user, logOut,setToggle,toggle } = useContext(AuthContext);

    const navigate=useNavigate()

    const logOutHandler = () => {

        logOut()
            .then(() => {
                toast.success("LogOut successfully");
                navigate('/')
            })
            .catch(error => console.log(error))
    };

    

    const navItem = <>


        <li>
            <Link className=" text-[15px] md-[15px] lg:-text-[18px]  xl:text-[20px] 2xl:text-[20px] font-[500] p-3 mx-3 md:text-white " to='/'> Home</Link>
        </li>
        <li>
            <Link className=" text-[15px] md-[15px] lg:-text-[18px]  xl:text-[20px] 2xl:text-[20px] font-[500] p-3 mx-3 md:text-white" to='/instructors'> Instructors</Link>
        </li>
        <li>
            <Link className=" text-[15px] md-[15px] lg:-text-[18px]  xl:text-[20px] 2xl:text-[20px] font-[500] p-3 mx-3 md:text-white" to='/classes'> Classes</Link>
        </li>


        {
            user ? <>

                <li>
                    <Link className=" text-[15px] md-[15px] lg:-text-[18px]  xl:text-[20px] 2xl:text-[20px] font-[500] p-3 mx-3 md:text-white" to='/dashboard'> Dashboard </Link>
                </li>

                <li>

                    <div className="avatar flex  items-center" title={user?.displayName}>
                        <div className="md:w-[50px] md:h-[50px] w-[50px] h-[40px] border-4  rounded-full border-white">
                            <img src={user?.photoURL} />
                        </div>
                    </div>

                </li>
                <li>
                    <button onClick={logOutHandler} className=" btn-ghost text-[15px] md-[15px] lg:-text-[18px]  xl:text-[20px] 2xl:text-[20px] font-[500] p-3 mx-3 text-white  ">Logout</button>

                </li>




            </>

                : <li>
                    <Link className=" text-[15px] md-[15px] lg:-text-[18px]  xl:text-[20px] 2xl:text-[20px] font-[500] p-3 mx-3 md:text-white" to='/login'> Login </Link>
                </li>



        }

        <li className="rounded-[20px] bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black via-black to-red-500  " style={{border:"2px solid white"}}>
        <button onClick={()=> setToggle(!toggle)} className=" text-[15px] font-[500] text-white ">{toggle===true?'Light':'Dark'}</button>
        </li>

    </>
    return (
        <div >
            <div className={`navbar h-[100px]   fixed z-10  md:justify-between md:p-10 ${toggle?" bg-[#090909] ":"bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-gray-700 to-slate-900"} `}>

                <div className="">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5  text-white`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-6 p-2  ${toggle?"bg-[#090909] ":"bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-gray-700 to-slate-900"}  shadow  text-white rounded-box w-52
                        bg-black/50`}>

                            {navItem}
                        </ul>
                    </div>
                    <div className="flex items-center md:space-x-[400px] lg:space-x-10 xl:space-x-10 2xl:space-x-10   ">
                        <h2 className=" text-[15px] md:text-[20px] lg:text-[18px] xl:text-[25px] 2xl:text-[30px] font-[500] text-white ">Holy child school</h2>
                        <img className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]  border-4 md:ml-0 ml-32  rounded-full border-white" src={logo} alt="" />
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center">
                        {navItem}
                    </ul>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Navbar;