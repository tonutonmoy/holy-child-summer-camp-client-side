
import logo from '../../assets/logo/preview-school-logo-free-vector-design-1625727716.jpg'

const Footer = () => {
    return (
        <footer >
            <section className="footer md:grid-cols-3 grid-cols-2 p-10  text-base-content">
                <div >



                    <div className=' mx-auto my-8'>
                        <img className="md:w-[70px] md:h-[70px] w-[40px] h-[40px] border-4  rounded-full border-black" src={logo} alt="" />
                    </div>

                    <h2 className=" md:text-[30px] md:font-[500] ">Holy child school</h2>

                </div>
                <div>
                    <h3 className="footer-title text-[20px] my-8">MUSIC LESSONS</h3>
                    <a className="link link-hover font-medium  text-sm my-2 ">GUITAR LESSONS</a>
                    <a className="link link-hover font-medium  text-sm my-2 ">DRUM LESSONS</a>
                    <a className="link link-hover font-medium  text-sm my-2 ">SINGING LESSONS</a>
                    <a className="link link-hover font-medium  text-sm my-2 ">BASS GUITAR LESSONS</a>
                </div>
                <div>
                    <h3 className="footer-title text-[20px] my-8">CAMPS + WORKSHOPS</h3>
                    <a className="link link-hover font-medium  text-sm text-sm my-2">LOCATIONS</a>
                    <a className="link link-hover font-medium  text-sm text-sm my-2">EVENTS</a>
                    <a className="link link-hover font-medium  text-sm text-sm my-2">NEWS</a>
                    <a className="link link-hover font-medium  text-sm text-sm my-2">RESOURCES</a>
                </div>
                <div>
                    <h3 className="footer-title text-[20px] my-8">FRANCHISING</h3>


                    <a className="link link-hover font-medium  text-sm text-sm my-2">PARTNERS</a>
                    <a className="link link-hover font-medium  text-sm text-sm my-2">CAREERS</a>
                    <a className="link link-hover font-medium  text-sm text-sm my-2">CONTACT</a></div>


                <div>

                </div>
            </section>
            <section className="footer footer-center p-4  text-base-content my-10">
                <div>
                    <p>Copyright © 2023 - All right reserved by Holy Child School</p>
                </div>
            </section>
        </footer >
    );
};

export default Footer;