

const MyClasses = () => {
    return (
        <div className=" w-[90%] mx-auto ">

<h2 className='text-[33px] font-medium text-center mt-60 '>My classes </h2>
            <div className=" w-full space-x-10 py-20 rounded-[30px]" >


           
                <div className="card w-full grid md:grid-cols-2  shadow-xl bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black via-black650 to-red-500
               ">
                 <div>
                 <img className='h-full w-full   rounded-l-[15px]   '  src='' alt="Shoes" />
                 </div>
                    <div className="card-body">
                        <h2 className="text-[18px] font-[500] mt-5 text-white ">Class name: </h2>
                        <p className=" text-[18px] font-[300] my-5 text-white">
                            <span className=" font-[500] ">Name:</span>

                        </p>

                        <p className=" text-[18px] font-[300] my-5 text-white">
                            <span className=" font-[500] ">Email:</span>

                        </p>
                        <p className=" text-[18px] font-[300] my-5 text-white">
                            <span className=" font-[500] ">Available seats:</span>

                        </p>
                        <p className=" text-[18px] font-[300] my-5 text-white">
                            <span className=" font-[500] ">Total students enroll:</span>

                        </p>
                        <p className=" text-[18px] font-[300] my-5 text-white">
                            <span className=" font-[400] ">Price:</span>

                        </p>
                        <p className=" text-[18px] font-[300] my-5 text-white">
                            <span className=" font-[400] ">Status:</span>

                        </p>

                        <p className=" text-[18px] font-[300] my-5 text-white">
                            <span className=" font-[400] ">FeedBack:</span>

                        </p>


                        <button className="btn w-full btn-outline border-white text-white text-[15px] font-[500]
                        hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/60 via-black/60 to-red-500/50 hover:border-none">Update</button>
                    </div>
                </div>



            </div>


          


        
        </div>
    );
};

export default MyClasses;