

const MyEnrolledClasses = () => {
    return (



<div className=" w-[90%] mx-auto  ">
        <div className="overflow-x-auto ">
            <table className="table ">
                {/* head */}
                <thead className="  text-white text-[20px] 
             bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
                    <tr>

                        <th>#</th>

                        <th>Image</th>
                        <th>Class name</th>
                        
                        <th>Instructor name</th>
                      
                        <th>price</th>

                        <th>Payment</th>

                      
                    </tr>
                </thead>
                <tbody>

                    <tr className=" text-white text-[15px] font-[400]
                    bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r ">
                        <td></td>
                        <td>11</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      
                      


                    
                    </tr>
                </tbody>



            </table>
        </div>
    </div>


    );
};

export default MyEnrolledClasses;