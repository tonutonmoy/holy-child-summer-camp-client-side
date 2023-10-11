
import './HomeExtraSection.css'


import img1 from '../../assets/photoSection/pexels-boris-pavlikovsky-7714321-min.jpg'
import img2 from '../../assets/photoSection/pexels-charles-parker-6647495-min.jpg'
import img3 from '../../assets/photoSection/pexels-cottonbro-studio-7567337-min.jpg'
import img4 from '../../assets/photoSection/pexels-cottonbro-studio-7568547-min.jpg'
import img5 from '../../assets/photoSection/pexels-israel-marin-17030047-min.jpg'
import img6 from '../../assets/photoSection/pexels-nasirun-khan-17121087-min.jpg'
import img7 from '../../assets/photoSection/pexels-pavel-danilyuk-7520987-min.jpg'
import img8 from '../../assets/photoSection/pexels-sam-lin-11425205-min.jpg'
import img9 from '../../assets/photoSection/pexels-yan-krukau-8190045-min.jpg'
import { AuthContext } from '../../Provider/AuthProvider'
import { useContext } from 'react'



const HomeExtraSection = () => {
     const { toggle } = useContext(AuthContext);
    return (
        <div className='mt-40 pb-40'>
             <h2 className={`text-[25px] md:text-[30px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] font-medium text-center my-20 lg:font-semibold ${toggle?"text-white":"text-[#2D3747] "} rounded-md  `}> Photo from previous Summer Camps </h2>


             <div className=' grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-5 w-[90%]  gap-10  mx-auto '>


             <div
            
             className='w-full  h-[300px]   bg-black photo-div  border   hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s] ' src={img1} alt="" />

             </div>


             <div className='w-full  h-[300px]  bg-black photo-div  border   hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s] ' src={img2} alt="" />

             </div>


             <div className='w-full  h-[300px]  bg-black photo-div  border   hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s] ' src={img3} alt="" />

             </div>


             <div className='w-full  h-[300px]  bg-black photo-div  border   hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s] ' src={img4} alt="" />

             </div>



             <div className='w-full  h-[300px]  bg-black photo-div  border   hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s] ' src={img5} alt="" />

             </div>


             <div className='w-full  h-[300px]  bg-black photo-div  border   hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s]  ' src={img6} alt="" />

             </div>


             <div className='w-full  h-[300px]   bg-black photo-div  border   hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s] ' src={img7} alt="" />

             </div>


             <div className='w-full  h-[300px]  bg-black photo-div  border     hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s] ' src={img8} alt="" />

             </div>



             <div className='w-full  h-[300px]  bg-black photo-div  border  shadow-2xl  hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s] ' src={img9} alt="" />

             </div>
          


             </div>
        </div>
    );
};

export default HomeExtraSection;