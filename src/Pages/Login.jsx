import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineKey } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";

import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Function/firebase-config";
const Login = () => {
  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");
  const [bol, setbol] = useState(false);

  const doa = () => {
    setbol(true);
    if (mail !== "" && pass !== "") {
      signInWithEmailAndPassword(auth, mail, pass)
        .then((res) => {
          setbol(false);
          console.log(res);
        })
        .catch((e) => {
          setbol(false);
          console.log(e);
        });
    } else {
      toast.warning("Fill up the forms");
    }
    console.log(bol);
  };

  return (
    <>
      <ToastContainer />
      {bol ? (
        <div className="absolute flex justify-center items-center z-10 top-0   h-screen bg-white/75 left-0 right-0">
          <BeatLoader color="#16A34A" size={30} />
        </div>
      ) : (
        ""
      )}
      <div className="">
        <div className="fixed py-2 px-5 lg:py-1 md:px-1 bg-white shadow-sm md:shadow-md lg:shadow-md    w-full">
          <div className="flex font-bold  items-center justify-between  lg:px-[7rem]">
            <div className="flex items-center">
              <img src={logo} alt="" className="object-contain w-10 lg:" />{" "}
              <span className="flex flex-col leading-[1.2rem] pl-2">
                <span>Landmark University Student Portal</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col h-screen">
        <div className="flex flex-col items-center justify-center    mx-auto  w-[20rem] h-[20rem]  md:w-[26rem] md:h-[22rem] lg:w-[22rem] lg:h-[20rem] sm:w-[24rem] xl:h-[20rem] xl:w-[25rem]   bg-white  rounded-lg">
          <form className="xl:w-[22rem] w-[17rem] bg-white  flex flex-col items-center justify-evenly h-full md:w-[20rem]">
            <div className="relative  w-full mt-4 xl:mt-5">
              <label htmlFor="">username</label>
              <AiOutlineUser
                size={20}
                className="absolute top-8 right-2 text-green-600 "
              />
              <input
                id="username"
                name="usernames"
                placeholder="aremu.charity"
                className={`border p-2 rounded-md w-full focus:border-gray-500  lg:p-[0.4rem]  `}
                type="text"
                onChange={(e) => setmail(e.target.value)}
                // value={formik.values.username}
                // onBlur={formik.handleBlur}
                // required
              />
              {/* {formik.errors.username && formik.touched.username ? (
                    <p className="text-red-500 text-sm ">
                      {formik.errors.username}
                    </p>
                  ) : (
                    ""
                  )} */}
            </div>
            <div className="relative w-full ">
              <label htmlFor="">Password</label>
              <HiOutlineKey
                size={20}
                className="absolute top-8 right-2 text-green-600"
              />
              <input
                name="password"
                id="passwords"
                placeholder="aremu.charity"
                className={`border p-2 rounded-md w-full  focus:outline-[#D1D1D1]  `}
                type="password"
                onChange={(e) => setpass(e.target.value)}
                // value={formik.values.password}
                // onBlur={formik.handleBlur}
                required
              />
              {/* {formik.errors.password && formik.touched.password ? (
                    <p className="text-red-500 text-sm ">
                      {formik.errors.password}
                    </p>
                  ) : (
                    ""
                  )} */}
            </div>

            <button
              type="button"
              onClick={() => doa()}
              className=" py-[0.3rem] lg:py-[0.4rem] lg:text-lg w-full bg-green-600 rounded-lg  text-white sm:text-sm"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
