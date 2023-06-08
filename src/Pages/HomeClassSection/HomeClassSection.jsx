import './HomeClassSection.css'



const HomeClassSection = () => {
    return (

        <div className='my-40' >

          <h2 className='text-[40px] font-medium text-center my-10'> Popular Classes </h2>
            <div className="class-section grid md:grid-cols-3 space-y-10 w-[90%] mx-auto  bg-fixed py-40 md:justify-start px-10 rounded-[30px]" >



                <div style={{border:'1px solid white'}} className="card w-full  shadow-xl  btn-outline hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black650 to-red-500/60
                 duration-[3s] 
          ">
                    <figure><img src="" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-[25px] font-[400] mt-5 text-white ">Class name: </h2>
                        <p className=" text-[25px] font-[300] my-5 text-white">
                            <span className=" font-[500] ">Instructor name:</span>

                        </p>
                        <p className=" text-[25px] font-[300] my-5 text-white">
                            <span className=" font-[500] ">Available seats:</span>

                        </p>
                        <p className=" text-[25px] font-[300] my-5 text-white">
                            <span className=" font-[500] ">Total students:</span>

                        </p>
                        <p className=" text-[25px] font-[300] my-5 text-white">
                            <span className=" font-[400] ">Price:</span>ddd

                        </p>

                    </div>
                </div>



            </div>






        </div>
    );
};

export default HomeClassSection;