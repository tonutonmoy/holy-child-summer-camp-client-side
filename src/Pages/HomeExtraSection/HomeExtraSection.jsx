
import './HomeExtraSection.css'


import img1 from '../../assets/photoSection/pexels-boris-pavlikovsky-7714321.jpg'
import img2 from '../../assets/photoSection/pexels-charles-parker-6647495.jpg'
import img3 from '../../assets/photoSection/pexels-cottonbro-studio-7567337.jpg'
import img4 from '../../assets/photoSection/pexels-cottonbro-studio-7568547.jpg'
import img5 from '../../assets/photoSection/pexels-israel-marin-17030047.jpg'
import img6 from '../../assets/photoSection/pexels-nasirun-khan-17121087.jpg'
import img7 from '../../assets/photoSection/pexels-pavel-danilyuk-7520987.jpg'
import img8 from '../../assets/photoSection/pexels-sam-lin-11425205.jpg'
import img9 from '../../assets/photoSection/pexels-yan-krukau-8190045.jpg'



const HomeExtraSection = () => {
    return (
        <div className='mt-40 pb-40'>
             <h2 className='text-[40px] font-medium text-center my-20'> photo from previous Summer Camps </h2>


             <div className=' grid md:grid-cols-3 w-[90%]  gap-10  mx-auto '>


             <div
            
             className='w-full  h-[500px]  bg-black photo-div  border   hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s] ' src={img1} alt="" />

             </div>


             <div className='w-full  h-[500px]  bg-black photo-div  border   hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s] ' src={img2} alt="" />

             </div>


             <div className='w-full  h-[500px]  bg-black photo-div  border   hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s] ' src={img3} alt="" />

             </div>


             <div className='w-full  h-[500px]  bg-black photo-div  border   hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s] ' src={img4} alt="" />

             </div>



             <div className='w-full  h-[500px]  bg-black photo-div  border   hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s] ' src={img5} alt="" />

             </div>


             <div className='w-full  h-[500px] bg-black photo-div  border   hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s]  ' src={img6} alt="" />

             </div>


             <div className='w-full  h-[500px]  bg-black photo-div  border   hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s] ' src={img7} alt="" />

             </div>


             <div className='w-full  h-[500px]  bg-black photo-div  border     hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s] ' src={img8} alt="" />

             </div>



             <div className='w-full  h-[500px]  bg-black photo-div  border  shadow-2xl  hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                  '>

                <img className='w-full h-full p-5  rounded-[30%] border border-white  hover:scale-90 duration-[1s] ' src={img9} alt="" />

             </div>
          


             </div>
        </div>
    );
};

export default HomeExtraSection;