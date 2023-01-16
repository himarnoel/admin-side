import React, { useEffect, useState } from "react";

import logo from "../assets/logo.png";
import { FiBookOpen } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Logout } from "../Functions/auth";
import { GoCloudUpload } from "react-icons/go";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Functions/firebase-config";
const Dash = () => {
  const nav = useNavigate();
  

  return (
    <div>
      {" "}
      <>
        <div className="">
          <div className="pb-10">
            <div className="fixed py-2 px-5 lg:py-1 md:px-1 bg-[#F2F2F2]   shadow-sm md:shadow-md lg:shadow-md lg:shadow-[#858585]    w-full">
              <div className="flex  items-center justify-between  lg:px-[6rem]">
                <div className="flex items-center">
                  <img src={logo} alt="" className="object-contain w-10 lg:" />
                  <span className="flex flex-col leading-[1.2rem] pl-2">
                    <span className="flex flex-col font-bold">
                      Landmark University
                      <span>Student Portal</span>
                    </span>
                  </span>
                </div>
                <button
                  onClick={() => Logout()}
                  className=" p-2 text-sm lg:p-2 rounded bg-[#2E8B45] text-white  font-normal"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-28  lg:pt-8 h-screen ">
          <div className="flex justify-between items-center">
            <div className="rounded-lg bg-white w-52 shadow flex   py-2 ">
              <img
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                alt=""
                className="rounded-full  object-contain w-11 ml-3"
              />
              <div className="w-36 flex flex-col ml-3 justify-center ">
                <p className=" font-bold text-sm mb-2">CPAS Admin</p>
                <p className="font-light text-xs">admin.cpas</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center mt-20 ">
            {" "}
            <p className="text-[#606060] mb-5">
              Choose an <span className="font-semibold">action</span> to
              continue
            </p>
            <div className="flex justify-between w-[30rem] ">
              <div
                onClick={() => nav("/courses")}
                className="flex flex-col items-center justify-center bg-white  w-52 rounded-lg h-44 border border-[#D0D5DD]"
              >
                <IoIosCheckmarkCircleOutline size={22} />
                <div className="flex font-bold text-base">
                  Approve Registrations
                </div>
                <p className="text-[10px] text-[#909090]">
                  approve student course registrations.
                </p>
              </div>
              <div
                onClick={() => nav("/courses")}
                className="flex flex-col items-center justify-center bg-white  w-52 rounded-lg h-44 border border-[#D0D5DD]"
              >
                <GoCloudUpload size={22} />
                <div className="flex font-bold text-base">Upload Grades</div>
                <p className="text-[10px] text-[#909090]">
                  insert, update and approve grade entries .
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Dash;
