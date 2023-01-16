import React from "react";

import logo from "../assets/logo.png";
import { FiBookOpen } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Logout } from "../Functions/auth";
import { GoCloudUpload } from "react-icons/go";
const Dash = () => {
  return (
    <div>
      {" "}
      <>
        <div className="pb-10">
          <div className="fixed py-2 px-5 lg:py-1 md:px-1 bg-white shadow-sm md:shadow-md lg:shadow-md   w-full">
            <div className="flex font-bold  items-center justify-between  lg:px-[7rem]">
              <div className="flex items-center">
                <img src={logo} alt="" className="object-contain w-10 lg:" />{" "}
                <span className="flex flex-col leading-[1.2rem] pl-2">
                  <span>Landmark University Student Portal</span>
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
        <div className="lg:px-28  lg:pt-8 h-screen ">
          <div className="flex justify-between items-center">
            <div className="rounded-lg bg-white w-52 shadow-lg flex   py-2 ">
              <img
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                alt=""
                className="rounded-full  object-contain w-11 ml-3"
              />
              <div className="w-36 flex flex-col ml-3 justify-center ">
                <p className=" font-bold text-sm mb-2">Omniyi-Esan Israel</p>
                <p className="font-light text-xs">omoniyi-esan.israel</p>
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
                onClick={() => nav("/reg")}
                className="flex flex-col items-center justify-center bg-white  w-52 rounded-lg h-44 border border-[#D0D5DD]"
              >
                <IoIosCheckmarkCircleOutline size={22} />
                <div className="flex font-bold text-base">
                  Course Registration
                </div>
                <p className="text-[10px] text-[#909090]">
                  register courses, check registration
                </p>
              </div>
              <div
                onClick={() => nav("/upload")}
                className="flex flex-col items-center justify-center bg-white  w-52 rounded-lg h-44 border border-[#D0D5DD]"
              >
                <GoCloudUpload size={22} />
                <div className="flex font-bold text-base">View Result</div>
                <p className="text-[10px] text-[#909090]">
                  view examination grades and CGPA
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
