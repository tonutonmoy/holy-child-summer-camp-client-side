import { MdPayment } from 'react-icons/md';

const MySelectedClasses = () => {
    return (
        <div className=" w-[90%] mx-auto ">
            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>#</th>

                            <th>Image</th>
                            <th>Class name</th>
                            
                            <th>Instructor name:</th>
                            <th>Available seats</th>
                            <th>price</th>

                            <th>Pay</th>

                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td></td>
                            <td>11</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                          


                            <td>
                                <button className='btn btn-sm bg-green-500 text-white hover:text-black'>
                                    <MdPayment />
                                </button>
                            </td>


                            <td>
                                <button className="btn btn-circle btn-outline btn-sm text-white bg-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;