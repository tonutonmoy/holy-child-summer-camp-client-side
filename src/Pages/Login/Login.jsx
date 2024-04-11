import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useContext, useState } from "react";
import bg from "../../assets/login/undraw_Educator_re_ju47.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const [showHide, setShowHide] = useState(true);

  const { login, googleLogin, toggle } = useContext(AuthContext);

  const onSubmit = (e) => {
    event.preventDefault();

    const email = e.email;

    const password = e.password;

    login(email, password)
      .then((res) => {
        console.log(res);
        toast.success("Login successfully");

        reset();
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
        console.log("hello", error);
      });
  };

  const googleHandler = () => {
    googleLogin()
      .then((res) => {
        if (res) {
          const userInformation = {
            userName: res?.user?.displayName,
            userEmail: res?.user?.email,
            userPhoto: res?.user?.photoURL,
            userRoll: "student",
          };

          console.log(userInformation);

          fetch(
            `https://holy-child-summer-camp-server-side.vercel.app/allUsers/${res?.user?.email}`,
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userInformation),
            }
          )
            .then((a) => a.json())
            .then((a) => console.log(a))
            .catch((error) => {
              console.log(error);
            });
        }

        toast.success("Login successfully");
        navigate("/");
        console.log(res);
      })
      .catch((error) => console.log.log(error));
  };

  return (
    <div className={`py-[100px] ${toggle && "bg-[#090909] text-white"}`}>
      <h2
        className={`text-[25px] md:text-[30px] lg:text-[30px] xl:text-[35px]  2xl:text-[40px] font-medium text-center mt-20 lg:font-semibold  rounded-md  `}
      >
        {" "}
        Login here!!!
      </h2>
      <div
        className={`hero min-h-screen ${
          toggle ? "bg-[#090909] text-white" : "bg-white"
        }  `}
      >
        <div className="grid md:grid-cols-2   w-[90%]  items-center  mb-40 mt-10 ">
          <section
            className={`text-center lg:text-left ${
              toggle && "border-[5px]  rounded-md"
            }`}
          >
            <img className="w-full" src={bg} alt="" />
          </section>
          <section className="m-0">
            <div
              className={`card   w-[100%] md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[70%] mx-auto  py-5  login-from ${
                toggle && "border-[1px]"
              }
               
               `}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body py-0 "
              >
                <div className="form-control">
                  <label className="label ">
                    <span className="font-medium text-xl  ">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered text-gray-500"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className=" text-red-500 my-3">email is required</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-medium text-xl  ">Password</span>
                  </label>
                  <input
                    type={showHide ? "password" : "text"}
                    placeholder="password"
                    className="input input-bordered text-gray-500 "
                    {...register("password", { required: true })}
                  />

                  {errors.password && (
                    <p className=" text-red-500 my-3">password is required</p>
                  )}

                  <label className="label">
                    <p
                      onClick={() => setShowHide(!showHide)}
                      className=" my-3 text-[30px]"
                    >
                      {showHide ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </p>
                  </label>
                </div>

                <p>
                  {" "}
                  New user?{" "}
                  <Link className=" text-orange-400" to="/registration">
                    please register
                  </Link>{" "}
                </p>

                <div className="form-control mt-6">
                  <button
                    className="btn text-[15px]  text-white
                                   bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90
                                   "
                  >
                    Login
                  </button>
                </div>

                <div className="divider  ">OR</div>

                <div></div>
                <ToastContainer />
              </form>

              <div className="mx-8">
                <button
                  onClick={googleHandler}
                  className="btn bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90 mb-10 w-full text-white"
                >
                  <BsGoogle className=" text-[30px] " />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
