import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
const Courses = () => {
  return (
    <>
      <div className="pb-28">
        <div className="fixed py-2 px-5 lg:py-1 md:px-1 bg-[#F2F2F2] shadow-sm md:shadow-md lg:shadow-md lg:shadow-[#858585]    w-full">
          <div className="flex  items-center justify-between  lg:px-[6rem]">
            <div className="flex items-center">
              <img src={logo} alt="" className="object-contain w-10 lg:" />
              <span className="flex flex-col leading-[1.2rem] pl-2">
                <span className="flex flex-col font-semibold">
                  Landmark University
                  <span>Student Portal</span>
                </span>
              </span>
            </div>
            <div className="flex ">
              <div className="flex flex-col">
                <span className="font-bold text-[13px]">CPAS Admin</span>
                <span className="text-[11px]">admin.cpas</span>
              </div>
              <img
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                alt=""
                className="rounded-full  object-contain w-11 ml-3"
              />
            </div>
          </div>
        </div>x 
      </div>
      <div className="lg:px-28">
        <p className="text-[1.2rem] font-semibold pb-5 w-full  flex">
          Upload Grades <MdArrowForwardIos className="mt-1 mr-2 ml-2" /> Course
          List
        </p>
        <div className="border h-fit w-full rounded ">
          <div className="w-full px-10 py-10 h-10 border-b flex justify-between items-center">
            <div className="sdfa">
              <p className="font-medium">Eligible Courses</p>
              <p>For the 2022/2023 Academic Session</p>
            </div>
            <div className="text-[0.8rem]">
              <p>Click a course to upload grades for the eligible students</p>
            </div>
          </div>
          <table class="w-full text-sm text-left  text-black  ">
            <tbody>
              <tr class=" text-[#197BD2] even:bg-transparent odd:bg-[#E1E1E1] border-b  hover:bg-gray-50  text-center font-semibold bg-[#E1E1E1] ">
                <td class="w-4 p-4">
                  <Link to="/adupload">1</Link>
                </td>
                <td class="px-6 py-4 ">
                  <Link to="/adupload">CSC 111</Link>
                </td>
                <td class="px-6 py-4 ">
                  <Link to="/adupload">Introduction to Computer Science</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Courses;
