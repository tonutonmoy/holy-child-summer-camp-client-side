import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";


import img1 from '../../assets/homeBanner/pexels-pavel-danilyuk-7520930.jpg'
import img2 from '../../assets/homeBanner/pexels-rdne-stock-project-8363027.jpg'
import img3 from '../../assets/homeBanner/pexels-roxanne-minnish-4513456.jpg'
import img4 from '../../assets/homeBanner/pexels-turkan-bakirli-16999360.jpg'

const HomeBanner = () => {


   

    return (
        <div className="pt-36  " style={{boxShadow:'30px 30px 30px black'}}>

            <Swiper
                     slidesPerView={1}
                     spaceBetween={30}
                     centeredSlides={true}
                     pagination={{
                       clickable: true,
                     }}
                     modules={[Pagination]}
                     className="mySwiper"
             
            >
                <SwiperSlide>
                    <div className=" relative ">

                        <img className="w-full h-[700px]" src={img3} alt="" />

                        <div className=" absolute md:left-[7%] bottom-[5%]  z-10">

                           
                         
                          
                            <h2 className="  text-[20px] md:text-[40px] font-medium text-white text-center my-5
                            
                            ">
                                2023 Music Explorers Summer Camp </h2>

                            <p className=" md:text-[30px] text-white font-[50] text-center "> Music Camps for All Skill Levels, Ages 4-18</p>

                            <p className=" md:text-[30px]  text-white font-[50] text-center  ">Online Registration Now</p>


                            <div className=" flex justify-center my-5">
                                <p className=" text-[18px]  text-white font-[50] text-center w-[50%] ">Summer music camps at Asheville Music School are a great way to begin your musical journey, enhance your skills, or even try a new instrument. </p>
                            </div>


                            <div className="text-center">
                                <button className=" btn btn-outline  text-[20px] font-[500]  text-white   mt-5 
                                  bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black via-black to-red-500"> apply now </button>
                            </div>

                        </div>

                        <div className=" absolute w-[100%] h-full  bottom-0 bg-black/50 "  >

                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className=" relative">

                        <img className="w-full h-[700px]" src={img1} alt="" />

                        <div className=" absolute md:left-[7%] bottom-[5%]  z-10">

                           
                         
                          
                            <h2 className="  text-[20px] md:text-[40px] font-medium text-white text-center my-5
                            
                            ">
                                2023 Music Explorers Summer Camp </h2>

                            <p className=" md:text-[30px] text-white font-[50] text-center "> Music Camps for All Skill Levels, Ages 4-18</p>

                            <p className=" md:text-[30px]  text-white font-[50] text-center  ">Online Registration Now</p>


                            <div className=" flex justify-center my-5">
                                <p className=" text-[18px]  text-white font-[50] text-center w-[50%] ">Summer music camps at Asheville Music School are a great way to begin your musical journey, enhance your skills, or even try a new instrument.</p>
                            </div>


                            <div className="text-center">
                                <button className=" btn btn-outline  text-[20px] font-[500]  text-white   mt-5 
                                  bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black via-black to-red-500"> apply now </button>
                            </div>

                        </div>

                        <div className=" absolute w-[100%] h-full  bottom-0 bg-black/50 "  >

                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className=" relative">

                        <img className="w-full h-[700px]" src={img2} alt="" />

                        <div className=" absolute md:left-[7%] bottom-[5%]  z-10">

                           
                         
                          
                            <h2 className="  text-[20px] md:text-[40px] font-medium text-white text-center my-5
                            
                            ">
                                2023 Music Explorers Summer Camp </h2>

                            <p className=" md:text-[30px] text-white font-[50] text-center "> Music Camps for All Skill Levels, Ages 4-18</p>

                            <p className=" md:text-[30px]  text-white font-[50] text-center  ">Online Registration Now</p>


                            <div className=" flex justify-center my-5">
                                <p className=" text-[18px]  text-white font-[50] text-center w-[50%] ">Summer music camps at Asheville Music School are a great way to begin your musical journey, enhance your skills, or even try a new instrument.</p>
                            </div>


                            <div className="text-center">
                                <button className=" btn btn-outline  text-[20px] font-[500]  text-white   mt-5 
                                  bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black via-black to-red-500"> apply now </button>
                            </div>

                        </div>

                        <div className=" absolute w-[100%] h-full  bottom-0 bg-black/50 "  >

                        </div>

                    </div>

                </SwiperSlide>


                <SwiperSlide>
                    <div className=" relative">

                        <img className="w-full h-[700px]" src={img4} alt="" />

                        <div className=" absolute md:left-[7%] bottom-[5%]  z-10">

                           
                         
                          
                            <h2 className="  text-[20px] md:text-[40px] font-medium text-white text-center my-5
                            
                            ">
                                2023 Music Explorers Summer Camp </h2>

                            <p className=" md:text-[30px] text-white font-[50] text-center "> Music Camps for All Skill Levels, Ages 4-18</p>

                            <p className=" md:text-[30px]  text-white font-[50] text-center  ">Online Registration Now</p>


                            <div className=" flex justify-center my-5">
                                <p className=" text-[18px]  text-white font-[50] text-center w-[50%] ">Summer music camps at Asheville Music School are a great way to begin your musical journey, enhance your skills, or even try a new instrument.</p>
                            </div>


                            <div className="text-center">
                                <button className=" btn btn-outline  text-[20px] font-[500]  text-white   mt-5 
                                  bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black via-black to-red-500"> apply now </button>
                            </div>

                        </div>

                        <div className=" absolute w-[100%] h-full  bottom-0 bg-black/50 "  >

                        </div>

                    </div>

                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default HomeBanner;