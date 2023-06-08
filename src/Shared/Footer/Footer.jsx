
import logo from '../../assets/logo/preview-school-logo-free-vector-design-1625727716.jpg'
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 
           ' >
            <section className="footer md:grid-cols-3 grid-cols-2 p-10  text-base-content">
                <div >



                    <div className=' mx-auto my-8'>
                        <img className="md:w-[70px] md:h-[70px] w-[50px] h-[50px] border-4  rounded-full border-white" src={logo} alt="" />
                    </div>

                    <h2 className=" md:text-[30px] font-[500] text-[15px] text-white ">Holy child school</h2>

                    <div className=' flex gap-5 justify-center my-8 w-full'>
                        <BsFacebook className=' text-[30px]  text-white' />
                        <BsInstagram className='text-[30px]  text-white' />
                        <FaTwitter className='text-[30px] text-white ' />
                    </div>

                </div>
                <div>
                    <h3 className=" md:text-[27px] text-[15px] my-8 text-white font-medium  ">MUSIC LESSONS</h3>
                    <a className="link link-hover md:font-medium  md:text-sm text-white  my-2 ">GUITAR LESSONS</a>
                    <a className="link link-hover md:font-medium  md:text-sm text-white  my-2 ">DRUM LESSONS</a>
                    <a className="link link-hover md:font-medium  md:text-sm text-white  my-2 ">SINGING LESSONS</a>
                    <a className="link link-hover md:font-medium  md:text-sm text-white  my-2 ">BASS GUITAR LESSONS</a>
                </div>
                <div>
                    <h3 className=" md:text-[27px] text-[15px] my-8 text-white  font-medium ">CAMPS </h3>
                    <a className="link link-hover md:font-medium  md:text-sm   text-white  my-2">LOCATIONS</a>
                    <a className="link link-hover md:font-medium  md:text-sm   text-white  my-2">EVENTS</a>
                    <a className="link link-hover md:font-medium  md:text-sm   text-white  my-2">NEWS</a>
                    <a className="link link-hover md:font-medium  md:text-sm   text-white  my-2">RESOURCES</a>
                </div>
                <div>
                    <h3 className=" md:text-[27px] text-[15px] my-8 text-white  font-medium ">ADDRESS</h3>


                    <a className="link link-hover md:font-medium  md:text-sm text-white   my-2">RUPNAGOR,<br /> MIRPUR, <br /> DHAKA</a>
                    <a className="link link-hover md:font-medium  md:text-sm text-white  my-2">01711213456</a>
                    <a className="link link-hover md:font-medium  md:text-sm text-white  my-2">01855334456</a></div>


                <div>

                </div>
            </section>
            <section className="footer footer-center p-4  text-base-content ">
                <div>
                    <p className='  text-white mb-20 mt-10'>Copyright © 2023 - All right reserved by Holy Child School</p>
                </div>
            </section>
        </footer >
    );
};

export default Footer;