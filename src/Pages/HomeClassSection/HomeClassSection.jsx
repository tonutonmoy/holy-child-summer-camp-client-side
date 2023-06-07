import './HomeClassSection.css'

const HomeClassSection = () => {
    return (

        <div >

          <h2 className='text-[40px] font-medium text-center my-10'> Popular Classes </h2>
            <div className="class-section grid md:grid-cols-3 space-y-10 w-[90%] mx-auto  bg-fixed py-40 md:justify-start px-10 rounded-[30px]" >



                <div className="card w-96  shadow-xl
             bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black via-black to-red-500
             
           l ">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title mt-5">Class name: </h2>
                        <p className=" text-[16px] font-[400] my-5">
                            <span className=" font-[500]">Instructor name:</span>

                        </p>
                        <p className=" text-[16px] font-[400] my-5">
                            <span className=" font-[500]">Available seats:</span>

                        </p>
                        <p className=" text-[16px] font-[400] my-5">
                            <span className=" font-[500]">Total students:</span>

                        </p>
                        <p className=" text-[16px] font-[400] my-5">
                            <span className=" font-[500]">Price:</span>

                        </p>

                    </div>
                </div>



            </div>






        </div>
    );
};

export default HomeClassSection;