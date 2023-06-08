

const AddAClass = () => {
    return (
        <div className=" w-full py-60  " >
<h2 className='text-[33px] font-medium text-center  '>Add  a classes </h2>

            <form className="w-[90%] mx-auto     bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-sky-500 to-sky-500 px-20 py-10 mt-40 rounded-lg " >

                <section className=" grid grid-cols-2 ">

                    <div className=" text-center my-5">

                        <p className=" text-[18px] font-[500] "> Class name</p>
                        <input type="text" placeholder="class name" name="className" className="input input-bordered input-md w-full max-w-xs my-3  " required />


                    </div>


                    <div className=" text-center my-5">

                        <p className=" text-[18px] font-[500] "> Class image</p>
                        <input type="text" placeholder="class image" name="classImage" className="input input-bordered input-md w-full max-w-xs my-3 " required />


                    </div>


                    <div className=" text-center my-5">

                        <p className=" text-[18px] font-[500] "> Name</p>
                        <input type="text" placeholder="name" name="name" className="input input-bordered input-md w-full max-w-xs my-3 " required  />


                    </div>

                    <div className=" text-center my-5">

                        <p className=" text-[18px] font-[500] "> Email</p>
                        <input type="email" placeholder="email" name="email" className="input input-bordered input-md w-full max-w-xs my-3  " required  />


                    </div>

                    <div className=" text-center my-5">

                        <p className=" text-[18px] font-[500] ">Available seats</p>
                        <input type="number" placeholder="available seats" name="availableSeats" className="input input-bordered input-md w-full max-w-xs my-3  " required />


                    </div>

                    <div className=" text-center my-5">
                   
                  

                        <p className=" text-[18px] font-[500]   "> Price</p>
                        <input type="number" placeholder="price" name="price" className="input input-bordered input-md w-full max-w-xs my-3   " required />


                    </div>







                </section>


              <section className=" text-center mt-10">
              <button className="btn w-[50%] btn-outline border-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-sky-500 to-sky-500 hover:border-white hover:text-black
              text-[17px] font-[500]">Add</button>
              </section>

            </form>

        </div>
    );
};

export default AddAClass;