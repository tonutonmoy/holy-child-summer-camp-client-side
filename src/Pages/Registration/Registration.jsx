import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';


import bg from '../../assets/login/undraw_Educator_re_ju47.png'

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();



    const onSubmit = (e) => {
        event.preventDefault();

        console.log(e)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">
                <div className="grid md:grid-cols-2   w-[90%]  items-center space-y-20 my-40 ">
                    <section className="text-center lg:text-left">

                        <img className='w-full' src={bg} alt="" />
                    </section>
                    <section className=' md:flex justify-center'>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 login-from
                     bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-sky-500 to-sky-500
                        ">

                            <h2 className=' text-[30px] font-[500]  text-center mt-20 '> Registration here!!!</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body mb-10">
                                <div className="form-control">
                                    <label className="label ">
                                        <span className="font-medium text-xl my-2">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered"

                                        {...register("name", { required: true, })}
                                    />
                                    {errors.name && <p className=' text-red-500 my-3' >name is required</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label ">
                                        <span className="font-medium text-xl my-2">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered"

                                        {...register("email", { required: true, })}
                                    />
                                    {errors.email && <p className=' text-red-500 my-3' >email is required</p>}
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="font-medium text-xl my-2">Password</span>
                                    </label>
                                    <input type='text' placeholder="password" className="input input-bordered "

                                        {...register("password", {
                                            required: true,
                                            minLength: 6,

                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                        })}
                                    />

                                    {errors.password && <p className=' text-red-500 my-3' >password is required</p>}

                                    {errors.password?.type === 'minLength' && <p className="text-red-600" >password is under 6 digit</p>}

                                    {errors.password?.type === 'pattern' && <p className="text-red-600" >password must be 1 uppercase and 1 special character </p>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="font-medium text-xl my-2">Confirm password</span>
                                    </label>
                                    <input type='text' placeholder="confirm password" className="input input-bordered "

                                        {...register("confirmPassword",{required:true} )}
                                    />

                                    {errors.confirmPassword && <p className=' text-red-500 my-3' >confirm password is required</p>}




                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="font-medium text-xl my-2">Photo Url</span>
                                    </label>
                                    <input type='text' placeholder="photo url" className="input input-bordered "

                                        {...register("photoUrl",{required:true} )}
                                    />

                                    {errors.photoUrl && <p className=' text-red-500 my-3' >confirm password is required</p>}




                                </div>





                                <p className='my-3'> All ready account? <Link className=' text-orange-400' to='/login'>please register</Link> </p>



                                <div className="form-control mt-6">
                                    <button className="btn text-[15px] 
                                    bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-sky-500 to-sky-500
                                   ">Login</button>
                                </div>

                                <div className="divider">OR</div>


                                <div className='btn bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-sky-500 to-sky-500 '>
                                    <BsGoogle className=' text-[30px] ' />
                                </div>



                                <div>

                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Registration;