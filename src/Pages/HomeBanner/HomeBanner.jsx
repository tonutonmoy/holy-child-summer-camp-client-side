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


    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class=" ' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <div className="py-36">

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwipe "
            >
                <SwiperSlide>
                    <div className=" relative">

                        <img className="w-full h-[700px]" src={img2} alt="" />

                        <div className=" absolute bottom-[5%]  z-10">

                           
                         
                          
                            <h2 className=" text-[60px] font-medium text-white text-center my-5
                            
                            ">
                                2023 Music Explorers Summer Camp </h2>

                            <p className=" text-[30px] text-white font-[50] text-center "> Music Camps for All Skill Levels, Ages 4-18</p>

                            <p className=" text-[30px]  text-white font-[50] text-center  ">Online Registration Now</p>


                            <div className=" flex justify-center my-5">
                                <p className=" text-[18px]  text-white font-[50] text-center w-[50%] ">Summer music camps at Asheville Music School are a great way to begin your musical journey, enhance your skills, or even try a new instrument. We have camps for ages 4-18 – Rock and Pop Music Camps, Ukulele Camp, Song Circle Voice Camp, Appalachian Music, and even a Harry Potter-themed strings camp. Students will learn music in a fun, supportive, team-oriented environment in small or large groups. Cost: $195-$360. Email info@ashevillemusicschool.org for more info.</p>
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

                        <div className=" absolute bottom-[5%]  z-10">

                           
                         
                          
                            <h2 className=" text-[60px] font-medium text-white text-center my-5
                            
                            ">
                                2023 Music Explorers Summer Camp </h2>

                            <p className=" text-[30px] text-white font-[50] text-center "> Music Camps for All Skill Levels, Ages 4-18</p>

                            <p className=" text-[30px]  text-white font-[50] text-center  ">Online Registration Now</p>


                            <div className=" flex justify-center my-5">
                                <p className=" text-[18px]  text-white font-[50] text-center w-[50%] ">Summer music camps at Asheville Music School are a great way to begin your musical journey, enhance your skills, or even try a new instrument. We have camps for ages 4-18 – Rock and Pop Music Camps, Ukulele Camp, Song Circle Voice Camp, Appalachian Music, and even a Harry Potter-themed strings camp. Students will learn music in a fun, supportive, team-oriented environment in small or large groups. Cost: $195-$360. Email info@ashevillemusicschool.org for more info.</p>
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

                        <img className="w-full h-[700px]" src={img3} alt="" />

                        <div className=" absolute bottom-[5%]  z-10">

                           
                         
                          
                            <h2 className=" text-[60px] font-medium text-white text-center my-5
                            
                            ">
                                2023 Music Explorers Summer Camp </h2>

                            <p className=" text-[30px] text-white font-[50] text-center "> Music Camps for All Skill Levels, Ages 4-18</p>

                            <p className=" text-[30px]  text-white font-[50] text-center  ">Online Registration Now</p>


                            <div className=" flex justify-center my-5">
                                <p className=" text-[18px]  text-white font-[50] text-center w-[50%] ">Summer music camps at Asheville Music School are a great way to begin your musical journey, enhance your skills, or even try a new instrument. We have camps for ages 4-18 – Rock and Pop Music Camps, Ukulele Camp, Song Circle Voice Camp, Appalachian Music, and even a Harry Potter-themed strings camp. Students will learn music in a fun, supportive, team-oriented environment in small or large groups. Cost: $195-$360. Email info@ashevillemusicschool.org for more info.</p>
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

                        <div className=" absolute bottom-[5%]  z-10">

                           
                         
                          
                            <h2 className=" text-[60px] font-medium text-white text-center my-5
                            
                            ">
                                2023 Music Explorers Summer Camp </h2>

                            <p className=" text-[30px] text-white font-[50] text-center "> Music Camps for All Skill Levels, Ages 4-18</p>

                            <p className=" text-[30px]  text-white font-[50] text-center  ">Online Registration Now</p>


                            <div className=" flex justify-center my-5">
                                <p className=" text-[18px]  text-white font-[50] text-center w-[50%] ">Summer music camps at Asheville Music School are a great way to begin your musical journey, enhance your skills, or even try a new instrument. We have camps for ages 4-18 – Rock and Pop Music Camps, Ukulele Camp, Song Circle Voice Camp, Appalachian Music, and even a Harry Potter-themed strings camp. Students will learn music in a fun, supportive, team-oriented environment in small or large groups. Cost: $195-$360. Email info@ashevillemusicschool.org for more info.</p>
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