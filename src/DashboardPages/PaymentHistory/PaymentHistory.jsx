

const PaymentHistory = () => {
    return (
        <div className=" w-[90%] mx-auto  ">

<h2 className='text-[33px] font-medium text-center mb-10'> Payment history  </h2>

        <div className="overflow-x-auto ">
            <table className="table ">
                {/* head */}
                <thead className="  text-white text-[20px] 
             bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
                    <tr>

                        <th>#</th>

                        <th>Name</th>
                        <th>Email</th>
                        
                        <th>Price</th>
                      
                        <th>Transaction Id</th>

                        <th>Date</th>

                      
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

export default PaymentHistory;