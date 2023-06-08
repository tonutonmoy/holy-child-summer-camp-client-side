

const Classes = () => {
    return (
        <div className="py-40 bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-sky-300 via-sky-500 to-sky-500">
        <h2 className='text-[40px] font-medium text-center py-10 text-white'> All Classes </h2>

  <div className=" grid md:grid-cols-3 w-[90%] mx-auto" >



  <div style={{border:'1px solid white'}} className="card w-full  shadow-xl  btn-outline hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black/60 to-red-500/60
       duration-[3s]  
  ">
          <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
              <h2 className="text-[25px] font-[400] mt-5 text-white">Name: </h2>

              <p className=" text-[25px] font-[300] my-5 text-white">
                  <span className=" font-[400] ">Instructor name:</span>

              </p>
              <p className=" text-[25px] font-[300] my-5 text-white">
                  <span className=" font-[400] ">Available seats:</span>

              </p>
             
              <p className=" text-[25px] font-[300] my-5 text-white">
                  <span className=" font-[400] ">price:</span>

              </p>
              
              <button className="btn  btn-outline text-[20px] text-[400] text-white hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black/60 via-black/60 to-red-500/50 hover:border-none"> Select</button>
           

          </div>
      </div>





  </div>

</div>
    );
};

export default Classes;