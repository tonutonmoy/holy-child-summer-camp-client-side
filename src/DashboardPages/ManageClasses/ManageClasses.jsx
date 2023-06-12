import { useContext, useState } from "react";
import useAllClassesData from "../../Hooks/useAllClassesData";
import { AuthContext } from "../../Provider/AuthProvider";




const ManageClasses = () => {

    const [allClassesData, refetch] = useAllClassesData();

    const { user } = useContext(AuthContext);

    const [userId, setUserId] = useState(null);

    const [condition,setCondition]=useState(false)



  



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

    
       if(userId && condition){



        fetch(`https://holy-child-summer-camp-server-side.vercel.app/feedBack?adminEmail=${user && user?.email}&userId=${userId}`, {
            method: "PATCH",
            headers: {

                authorization: `bearer ${token}`,

                'content-type':'application/json'
            },
            body: JSON.stringify({feedback})
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



        console.log(feedback)

        


    }


    return (
        <div className=" w-[90%] mx-auto mb-40">

            <h2 className='text-[33px] font-medium text-center mt-60 mb-20 '>Manage classes </h2>
            <div className=" w-full grid grid-cols-2 gap-10 rounded-[30px]" >



                {

                    allClassesData?.map(data => <div key={data?._id} className="card w-full   shadow-xl bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black via-black650 to-red-500
               " style={{ boxShadow: "10px 10px 10px black" }} >
                        <div className="w-full p-5">
                            <img className='h-[300px] w-full   rounded-l-[15px]   ' src={data?.classImage} alt="Shoes" />
                        </div>
                        <div className="card-body">
                            <p className=" text-[16px] font-[300] my-5 text-white">
                                <span className=" font-[500] ">Class name: </span>
                                {data?.className}

                            </p>
                            <p className=" text-[16px] font-[300] my-5 text-white">
                                <span className=" font-[500] ">Instructor name: </span>
                                {data?.instructorName}

                            </p>

                            <p className=" text-[16px] font-[300] my-5 text-white">
                                <span className=" font-[500] ">Instructor Email: </span>
                                {data?.instructorEmail}

                            </p>
                            <p className=" text-[16px] font-[300] my-5 text-white">
                                <span className=" font-[500] ">Available seats: </span>
                                {data?.availableSeats}

                            </p>

                            <p className=" text-[16px] font-[300] my-5 text-white">
                                <span className=" font-[400] ">Price: </span>
                                ${data?.price}

                            </p>
                            <p className=" text-[16px] font-[300] my-5 text-white">
                                <span className=" font-[400] ">Status: {data?.status} </span>



                            </p>



                            <div className=" space-y-5">


                                <button onClick={() => approveHandler(data?._id)}

                                    disabled={data?.status === 'approve' || data?.status === 'deny' ? true : false}

                                    className="btn w-full btn-outline border-white text-white text-[15px] font-[500]
                        hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/60 via-black/60 to-red-500/50 hover:border-none">Approve</button>

                                <button onClick={() => denyHandler(data?._id)}

                                    disabled={data?.status === 'approve' || data?.status === 'deny' ? true : false}

                                    className="btn w-full btn-outline border-white text-white text-[15px] font-[500]
                        hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/60 via-black/60 to-red-500/50 hover:border-none">Deny</button>


                                <div className="btn w-full btn-outline border-white text-white text-[15px] font-[500]
                        hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/60 via-black/60 to-red-500/50 hover:border-none px-0"


                                    onClick={() => setUserId(data?._id)}

                                >


                                    <button className="btn w-full px-0 btn-outline border-white text-white text-[15px] font-[500]
                        hover:bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/60 via-black/60 to-red-500/50 hover:border-none"  onClick={() => window.my_modal_4.showModal()}
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


                                    <button onClick={()=> setCondition(true)} className="btn  bg-green-500 text-white  ">send</button>
                                    <button onClick={()=> setCondition(false)}  className="btn btn-outline bg-red-500 text-white">Close</button>
                                </div>
                            </form>


                            

                       


                   
                </dialog>
            </section>

        </div>
    );
};

export default ManageClasses;