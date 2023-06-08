

const ManageUser = () => {
    return (
        <div className=" w-[90%] mx-auto  ">
        <div className="overflow-x-auto ">
            <table className="table ">
                {/* head */}
                <thead className="  text-white text-[20px] 
             bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r
             
            ">
                    <tr>

                        <th>#</th>

                        <th>Image</th>
                        <th>Name</th>
                        
                        <th> Email</th>
                        <th>Role</th>
                      
                        

                       <th className=" text-center">
                        action
                       </th>
                       <th className=" text-center" >
                        action
                       </th>

                      
                    </tr>
                </thead>
                <tbody>

                    <tr className=" text-white text-[15px] font-[400]
                    bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r ">
                        <td></td>
                        <td></td>
                        <td>11</td>
                        <td>1</td>
                        <td>1</td>
                        <td className=" text-center">
                                <button className='btn text-[12px]  btn-sm bg-green-500 text-white hover:text-black'>
                                    Make Instructor
                                </button>
                            </td>


                            <td className=" text-center">
                                <button className="btn  text-[12px] btn-outline btn-sm text-white bg-red-500">
                                 Make Admin
                                </button>
                            </td>
                      
                      


                    
                    </tr>
                </tbody>



            </table>
        </div>
    </div>

    );
};

export default ManageUser;