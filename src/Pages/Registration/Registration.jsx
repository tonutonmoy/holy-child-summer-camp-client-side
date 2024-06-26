import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";

import bg from "../../assets/login/undraw_Educator_re_ju47.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { createUser, updateUserProfile, googleLogin, toggle } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    event.preventDefault();

    console.log(e);

    const name = e.name;
    const email = e.email;
    const password = e.password;
    const confirmPassword = e.confirmPassword;
    const photoUrl = e.photoUrl;

    if (password !== confirmPassword) {
      return toast.error("Password not match");
    }

    createUser(email, password)
      .then((res) => {
        console.log(res, "res");

        if (res) {
          updateUserProfile(name, photoUrl)
            .then(() => {
              reset();
            })
            .catch((error) => console.log(error));

          const userInformation = {
            userName: name,
            userEmail: email,
            userPhoto: photoUrl,
            userRoll: "student",
          };

          console.log(userInformation);

          fetch(
            `https://holy-child-summer-camp-server-side.vercel.app/allUsers/${email}`,
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userInformation),
            }
          )
            .then((b) => b.json())
            .then((b) => {
              console.log(b);
              toast.success("Registration Complete");
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        toast.error(error.message);

        console.log(error);
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
        Registration here!!!
      </h2>
      <div
        className={`hero min-h-screen ${
          toggle ? "bg-[#090909] text-white" : "bg-white"
        }  `}
      >
        <div className="grid md:grid-cols-2   w-[90%]  items-center space-y-20  ">
          <section
            className={`text-center lg:text-left ${
              toggle && "border-[5px]  rounded-md"
            }`}
          >
            <img className="w-full" src={bg} alt="" />
          </section>
          <section>
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
                    <span className="font-medium text-xl ">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input text-gray-500 input-bordered"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p className=" text-red-500 my-3">name is required</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label ">
                    <span className="font-medium text-xl ">Email</span>
                  </label>
                  <input
                    type="email"
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
                    <span className="font-medium text-xl ">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered  text-gray-500"
                    {...register("password", {
                      required: true,
                      minLength: 6,

                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                    })}
                  />

                  {errors.password && (
                    <p className=" text-red-500 my-3">password is required</p>
                  )}

                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">password is under 6 digit</p>
                  )}

                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      password must be 1 uppercase and 1 special character{" "}
                    </p>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="font-medium text-xl ">
                      Confirm password
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="confirm password"
                    className="input input-bordered text-gray-500"
                    {...register("confirmPassword", { required: true })}
                  />

                  {errors.confirmPassword && (
                    <p className=" text-red-500 my-3">
                      confirm password is required
                    </p>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="font-medium text-xl ">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="photo url"
                    className="input input-bordered text-gray-500"
                    {...register("photoUrl", { required: true })}
                  />

                  {errors.photoUrl && (
                    <p className=" text-red-500 my-3">
                      confirm password is required
                    </p>
                  )}
                </div>

                <p className="my-3">
                  {" "}
                  All ready account?{" "}
                  <Link className=" text-orange-400" to="/login">
                    please login{" "}
                  </Link>{" "}
                </p>

                <div className="form-control mt-6">
                  <button
                    className="btn text-[15px]  text-white
                                   bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90
                                   "
                  >
                    Registration
                  </button>
                </div>

                <div className="divider ">OR</div>
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
            <ToastContainer />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Registration;
