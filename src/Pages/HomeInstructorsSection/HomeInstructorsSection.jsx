import { useContext, useEffect, useState } from 'react';
import './HomeInstructorsSection.css'
import { AuthContext } from '../../Provider/AuthProvider';

import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..



const HomeInstructorsSection = () => {
  const { toggle } = useContext(AuthContext);

  const [data, setData] = useState()
  useEffect(() => {

    fetch('https://holy-child-summer-camp-server-side.vercel.app/topInstructor')
      .then(res => res.json())
      .then(res => setData(res))


  }, [])


  console.log(data)

  return (
    <div className='my-40'>


      <h2  className={`text-[25px] md:text-[30px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] font-medium text-center my-20 lg:font-semibold ${toggle?"text-white":"text-[#2D3747] "} rounded-md  `}> Popular Instructors </h2>
      <div className="instructor-section shadow-xl shadow-gray-900 grid md:grid-cols-3  w-[90%] mx-auto  bg-fixed py-40 md:justify-start rounded-[30px]" >



        {

          data?.slice(0, 6).map(a =>

            <div key={a?._id} className="w-full px-4   "
             data-aos="flip-left"
           >
              <div className="mx-auto mb-10 max-w-[250px] md:max-w-[370px] lg:max-w-[370px] xl:max-w-[370px] xxl:max-w-[370px]  text-white hover:border-[1px]  hover:rounded-md ">
                <div className="mb-8 overflow-hidden rounded">
                  <img
                    src={a?.instructorImage}
                    alt="image"
                    className="w-full "
                  />
                </div>
                <div className='p-2'>

                  <h3 className="text-dark  mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                    Name:
                    <span className='ms-2'>
                      {a?.instructorName}
                    </span>

                  </h3>


                  <p className="text-body-color text-base overflow-x-auto ">
                    Email:
                    <span className='ms-2 '>
                      {a?.instructorEmail}
                    </span>
                  </p>
                  <p className="text-body-color text-base">Total Enroll:
                    <span className='ms-2'>
                      {a?.totalEnroll}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )
        }


      </div>



    </div>
  );
};

export default HomeInstructorsSection;