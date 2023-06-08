
const ManageClasses = () => {
    return (
        <div className=" w-[90%] mx-auto ">
            <div className=" w-full grid grid-cols-2 space-x-10 py-60 rounded-[30px]" >



                <div className="card w-full   shadow-xl bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black via-black650 to-red-500
               ">
                    <div>
                        <img className='h-full w-full   rounded-l-[15px]   ' src='' alt="Shoes" />
                    </div>
                    <div className="card-body">
                        <h2 className="text-[18px] font-[500] mt-5 text-white ">Class name: </h2>
                        <p className=" text-[18px] font-[300] my-5 text-white">
                            <span className=" font-[500] ">Instructor name:</span>

                        </p>

                        <p className=" text-[18px] font-[300] my-5 text-white">
                            <span className=" font-[500] ">Email:</span>

                        </p>
                        <p className=" text-[18px] font-[300] my-5 text-white">
                            <span className=" font-[500] ">Available seats:</span>

                        </p>

                        <p className=" text-[18px] font-[300] my-5 text-white">
                            <span className=" font-[400] ">Price:</span>

                        </p>
                        <p className=" text-[18px] font-[300] my-5 text-white">
                            <span className=" font-[400] ">Status:</span>

                        </p>



                        <div className=" space-y-5">


                            <button className="btn w-full btn-outline border-white text-white text-[15px] font-[500]
                        hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/60 via-black/60 to-red-500/50 hover:border-none">Approve</button>

                            <button className="btn w-full btn-outline border-white text-white text-[15px] font-[500]
                        hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/60 via-black/60 to-red-500/50 hover:border-none">Deny</button>

                            <button className="btn w-full btn-outline border-white text-white text-[15px] font-[500]
                        hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/60 via-black/60 to-red-500/50 hover:border-none">Feedback</button>

                        </div>

                    </div>
                </div>



            </div>


            {/*  */}



        </div>
    );
};

export default ManageClasses;