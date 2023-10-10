import { useContext, useState } from "react";
import useAllClassesData from "../../Hooks/useAllClassesData";
import { AuthContext } from "../../Provider/AuthProvider";




const ManageClasses = () => {

    const [allClassesData, refetch] = useAllClassesData();

    const { user, toggle } = useContext(AuthContext);

    const [userId, setUserId] = useState(null);

    const [condition, setCondition] = useState(false)







    //  approve




    const token = localStorage.getItem('jwt-token')



    const approveHandler = (id) => {





        fetch(`https://holy-child-summer-camp-server-side.vercel.app/approveClasses?adminEmail=${user && user?.email}&userId=${id}`, {
            method: "PATCH",
            headers: {

                authorization: `bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(res => {

                if (res.modifiedCount > 0) {

                    refetch()
                }
                console.log(res)
            })
            .catch(error => console.log(error))


    };


    //  deny
    const denyHandler = (id) => {





        fetch(`https://holy-child-summer-camp-server-side.vercel.app/denyClasses?adminEmail=${user && user?.email}&userId=${id}`, {
            method: "PATCH",
            headers: {

                authorization: `bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(res => {

                if (res.modifiedCount > 0) {

                    refetch()
                }
                console.log(res)
            })
            .catch(error => console.log(error))


    }






    const feedbackHandler = (e) => {


        const feedback = e.target.text.value;


        if (userId && condition) {



            fetch(`https://holy-child-summer-camp-server-side.vercel.app/feedBack?adminEmail=${user && user?.email}&userId=${userId}`, {
                method: "PATCH",
                headers: {

                    authorization: `bearer ${token}`,

                    'content-type': 'application/json'
                },
                body: JSON.stringify({ feedback })
            })
                .then(res => res.json())
                .then(res => {

                    if (res.modifiedCount > 0) {

                        e.target.reset()

                        refetch()
                    }
                    console.log(res)
                })
                .catch(error => console.log(error))




        }

        e.target.text.value = '';

        console.log(feedback)




    }


    return (
        <div className=" w-[90%] mx-auto ">

            <h2 className={`text-[25px] md:text-[30px] lg:text-[30px] xl:text-[35px]  2xl:text-[40px] font-medium text-center mb-10 lg:font-semibold  rounded-md  `}>Manage classes </h2>
            <div className=" w-full  pb-20 rounded-[30px]  grid md:grid-cols-2 gap-10 lg:grid-cols-1  xl:grid-cols-2  2xl:grid-cols-3 "  >



                {

                    allClassesData?.map(data => <div key={data?._id} className={`card w-full ${toggle && 'border-[1px]'}   mb-20 hover:shadow-xl shadow-gray-900
                    `} >
                        <div className="w-full h-full p-5">
                            <img className='h-[300px] w-full rounded-md  border-[1px]  ' src={data?.classImage} alt="Shoes" />
                        </div>
                        <div className={`card-body ${toggle ? '' : 'text-black'}`}>
                            <p className="text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-[400] mt-1  ">
                                <span className=" font-[400] ">Class name: </span>
                                {data?.className}

                            </p>
                            <p className="text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-[400] mt-1  ">
                                <span className=" font-[400] ">Instructor name: </span>
                                {data?.instructorName}

                            </p>

                            <p className="text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-[400] mt-1  ">
                                <span className=" font-[400] ">Instructor Email: </span>
                                {data?.instructorEmail}

                            </p>
                            <p className="text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-[400] mt-1  ">
                                <span className=" font-[400] ">Available seats: </span>
                                {data?.availableSeats}

                            </p>

                            <p className="text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-[400] mt-1  ">
                                <span className=" font-[400] ">Price: </span>
                                ${data?.price}

                            </p>
                            <p className="text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-[400] mt-1  ">
                                <span className=" font-[400] ">Status: {data?.status} </span>



                            </p>



                            <div className=" space-y-5 ">


                                <button onClick={() => approveHandler(data?._id)}

                                    disabled={data?.status === 'approve' || data?.status === 'deny' ? true : false}

                                    className={`  w-full flex items-center justify-center gap-3 p-1 rounded-md text-[18px] my-2 text-[400] text-white 
                                    
                                    ${data?.status === 'approve' || data?.status === 'deny' ? 'bg-black/30' : ' bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90'}
                                    border-none`} >Approve</button>

                                <button onClick={() => denyHandler(data?._id)}

                                    disabled={data?.status === 'approve' || data?.status === 'deny' ? true : false}

                                    className={`  w-full flex items-center justify-center gap-3 p-1 rounded-md text-[18px] my-2 text-[400] text-white 
                                    
                                    ${data?.status === 'approve' || data?.status === 'deny' ? 'bg-black/30' : ' bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90'}
                                    
                                    border-none`} >Deny</button>


                                <div


                                    onClick={() => setUserId(data?._id)}

                                >


                                    <button className="  w-full flex items-center justify-center gap-3 p-1 rounded-md text-[18px] my-2 text-[400] text-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90 border-none" onClick={() => window.my_modal_4.showModal()}
                                    >Feedback</button>


                                </div>

                            </div>


                        </div>

                    </div>
                    )

                }


            </div>


            {/*  */}

            <section>
                {/* You can open the modal using ID.showModal() method */}

                <dialog id="my_modal_4" className="modal " >






                    <form onSubmit={feedbackHandler} method="dialog" className="modal-box w-11/12 max-w-5xl   

bg-gradient-to-r from-gray-700 via-gray-900 to-black border border-white text-white">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <textarea name="text" placeholder="Bio" className="textarea textarea-bordered textarea-lg text-black w-full h-[300px]" ></textarea>

                        <div className="modal-action">
                            {/* if there is a button, it will close the modal */}


                            <button onClick={() => setCondition(true)} className="btn  bg-green-700 text-white  hover:bg-green-800 ">send</button>
                            <button onClick={() => setCondition(false)} className="btn btn-outline bg-red-700 text-white hover:bg-red-800">Close</button>
                        </div>
                    </form>








                </dialog>
            </section>

        </div>
    );
};

export default ManageClasses;