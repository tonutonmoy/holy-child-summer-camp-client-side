import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";


import img1 from '../../assets/homeBanner/pexels-pavel-danilyuk-7520931.jpg'
import img2 from '../../assets/homeBanner/pexels-pavel-danilyuk-7520932.jpg'
import img3 from '../../assets/homeBanner/pexels-pavel-danilyuk-7520933.jpg'
import img4 from '../../assets/homeBanner/pexels-pavel-danilyuk-7520934.jpg'

const HomeBanner = () => {


   

    return (
        <div className="pt-[100px]  " style={{boxShadow:'5px 5px 5px black'}}>

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

                        <img className="w-full h-[600px] md:h-[650px] lg:h-[650px] xl:h-[650px] 2xl:h-[780px]" src={img1} alt="" />

                        <div className=" absolute md:left-[3%] lg:left-[4%] xl:left-[12%] 2xl:left-[22%] bottom-[5%]  z-10  ">

                           
                         
                          
                            <h2 className="  text-[20px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[60px] font-medium text-white text-center my-5
                            
                            ">
                                2023 Music Explorers Summer Camp </h2>

                            <p className=" md:text-[30px] text-white font-[50] text-center "> Music Camps for All Skill Levels, Ages 4-18</p>

                            <p className=" md:text-[30px]  text-white font-[50] text-center  ">Online Registration Now</p>


                            <div className=" flex justify-center my-5">
                                <p className=" text-[18px]  text-white font-[50] text-center w-[50%] ">Summer music camps at Asheville Music School are a great way to begin your musical journey, enhance your skills, or even try a new instrument. </p>
                            </div>


                            <div className="text-center">
                                <button className=" ring-1 ring-white rounded-md  h-[30px] md:h-[30px] lg:h-[30px]  xl:h-[35px] 2xl:h-[40px]
                                
                                w-[100px]  md:w-[100px]   lg:w-[100px] xl:w-[100px] 2xl:w-[150px] 
                                
                                text-[13px]  md:text-[13px] lg:text-[14px] xl:text-[14px] 2xl:text-[20px]  font-[500]  text-white   mt-5 
                                
                                bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black via-black to-red-500"> Apply now </button>
                            </div>

                        </div>

                        <div className=" absolute w-[100%] h-full  bottom-0 bg-black/50 "  >

                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className=" relative">

                        <img className="w-full h-[600px] md:h-[650px] lg:h-[650px] xl:h-[650px] 2xl:h-[780px]" src={img2} alt="" />

                        <div className=" absolute md:left-[3%] lg:left-[4%] xl:left-[12%] 2xl:left-[22%] bottom-[5%]  z-10  ">

                           
                         
                          
                        <h2 className="  text-[20px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[60px] font-medium text-white text-center my-5
                            
                            ">
                                2023 Music Explorers Summer Camp </h2>

                            <p className=" md:text-[30px] text-white font-[50] text-center "> Music Camps for All Skill Levels, Ages 4-18</p>

                            <p className=" md:text-[30px]  text-white font-[50] text-center  ">Online Registration Now</p>


                            <div className=" flex justify-center my-5">
                                <p className=" text-[18px]  text-white font-[50] text-center w-[50%] ">Summer music camps at Asheville Music School are a great way to begin your musical journey, enhance your skills, or even try a new instrument.</p>
                            </div>


                            <div className="text-center">
                                <button className=" ring-1 ring-white rounded-md  h-[30px] md:h-[30px] lg:h-[30px]  xl:h-[35px] 2xl:h-[40px]
                                
                                w-[100px]  md:w-[100px]   lg:w-[100px] xl:w-[100px] 2xl:w-[150px] 
                                
                                text-[13px]  md:text-[13px] lg:text-[14px] xl:text-[14px] 2xl:text-[20px]  font-[500]  text-white   mt-5 
                                
                                bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black via-black to-red-500"> Apply now </button>
                            </div>

                        </div>

                        <div className=" absolute w-[100%] h-full  bottom-0 bg-black/50 "  >

                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className=" relative">

                        <img className="w-full h-[600px] md:h-[650px] lg:h-[650px] xl:h-[650px] 2xl:h-[780px]" src={img3} alt="" />

                      
                        <div className=" absolute md:left-[3%] lg:left-[4%] xl:left-[12%] 2xl:left-[22%] bottom-[5%]  z-10  ">

                           
                         
                          
                        <h2 className="  text-[20px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[60px] font-medium text-white text-center my-5
                            
                            ">
                                2023 Music Explorers Summer Camp </h2>

                            <p className=" md:text-[30px] text-white font-[50] text-center "> Music Camps for All Skill Levels, Ages 4-18</p>

                            <p className=" md:text-[30px]  text-white font-[50] text-center  ">Online Registration Now</p>


                            <div className=" flex justify-center my-5">
                                <p className=" text-[18px]  text-white font-[50] text-center w-[50%] ">Summer music camps at Asheville Music School are a great way to begin your musical journey, enhance your skills, or even try a new instrument.</p>
                            </div>


                            <div className="text-center">
                                <button className=" ring-1 ring-white rounded-md  h-[30px] md:h-[30px] lg:h-[30px]  xl:h-[35px] 2xl:h-[40px]
                                
                                w-[100px]  md:w-[100px]   lg:w-[100px] xl:w-[100px] 2xl:w-[150px] 
                                
                                text-[13px]  md:text-[13px] lg:text-[14px] xl:text-[14px] 2xl:text-[20px]  font-[500]  text-white   mt-5 
                                
                                bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black via-black to-red-500"> Apply now </button>
                            </div>

                        </div>

                        <div className=" absolute w-[100%] h-full  bottom-0 bg-black/50 "  >

                        </div>

                    </div>

                </SwiperSlide>


                <SwiperSlide>
                    <div className=" relative">

                        <img className="w-full h-[600px] md:h-[650px] lg:h-[650px] xl:h-[650px] 2xl:h-[780px]" src={img4} alt="" />

                       
                        <div className=" absolute md:left-[3%] lg:left-[4%] xl:left-[12%] 2xl:left-[22%] bottom-[5%]  z-10  ">

                           
                         
                          
                        <h2 className="  text-[20px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[60px] font-medium text-white text-center my-5
                            
                            ">
                                2023 Music Explorers Summer Camp </h2>

                            <p className=" md:text-[30px] text-white font-[50] text-center "> Music Camps for All Skill Levels, Ages 4-18</p>

                            <p className=" md:text-[30px]  text-white font-[50] text-center  ">Online Registration Now</p>


                            <div className=" flex justify-center my-5">
                                <p className=" text-[18px]  text-white font-[50] text-center w-[50%] ">Summer music camps at Asheville Music School are a great way to begin your musical journey, enhance your skills, or even try a new instrument.</p>
                            </div>


                            <div className="text-center">
                                <button className=" ring-1 ring-white rounded-md  h-[30px] md:h-[30px] lg:h-[30px]  xl:h-[35px] 2xl:h-[40px]
                                
                                w-[100px]  md:w-[100px]   lg:w-[100px] xl:w-[100px] 2xl:w-[150px] 
                                
                                text-[13px]  md:text-[13px] lg:text-[14px] xl:text-[14px] 2xl:text-[20px]  font-[500]  text-white   mt-5 
                                
                                bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black via-black to-red-500"> Apply now </button>
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