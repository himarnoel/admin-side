import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Functions/firebase-config";
import { toast } from "react-toastify";

const Upload = () => {
  const location = useLocation();
  const data = location.state;
  const [bol, setbol] = useState(false);
  const [list, setlist] = useState([]);
  const [courses, setcourses] = useState([]);
  useEffect(() => {
    getter();
  }, []);
  const course=0;

  const getter = () => {
    // console.log(data);
    setbol(true);
    const courseref = collection(db, "Students");
    getDocs(courseref)
      .then((res) => {
      
      const val=  res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setbol(false);
       const real= val.map((arr,i)=>{
          arr.courses.map((ar,i)=>{
            if(ar.course_code==data.course_code){
            
          courses.push(arr)
            }
           
          })
         })
         setcourses(courses.filter((obj, index) => {
          return index === courses.findIndex(o => obj.id === o.id);
        }))
        
      })
      .catch((e) => {
        toast.error("Network errorr");
        setbol(false);
      });
  };



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
        </div>
      </div>
      <div className="lg:px-28">
        <p className="text-[1.2rem] font-semibold pb-5 w-full  flex">
          Upload Grades <MdArrowForwardIos className="mt-1 mr-2 ml-2" /> Course
          List <MdArrowForwardIos className="mt-1 mr-2 ml-2" /> Students
        </p>
        <div className="border h-fit w-full rounded ">
          <div className="w-full px-10 py-10 h-10 border-b flex justify-between items-center">
            <div className="sdfa">
              <p className="text-base font-semibold">
                {data.course_code}- {data.course_title}
              </p>{" "}
              <p>For the 2022/2023 Academic Session</p>
            </div>
            <div className="text-[0.8rem]">
              <p>
                <span className="font-semibold">INPUT </span> the scores for
                each students
              </p>
            </div>
          </div>
          <table class="w-full text-sm text-center  text-black  ">
            <thead>
            <th className="px-6 py-3">S/N </th>
              <th className="px-6 py-3">Matriculation Number </th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Score</th>
              <th className="px-6 py-3">Grade</th>
            </thead>
            <tbody>
              {
                courses.map((arr,i)=>(<tr key={i} class=" text-[#197BD2] even:bg-transparent odd:bg-[#E1E1E1] border-b   text-center font-semibold bg-[#E1E1E1] ">
                   <td class="px-2 py-4">{i+1}</td>
                <td class="px-2 py-4">{arr.matric_no}</td>
                <td class="px-2 py-4 ">{`${arr.firstname} ${arr.lastname}`}</td>
                <td class="px-2 py-4 ">
                  <input type="number" max="100" min="0" />
                </td>
                <td>A</td>
              </tr>))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Upload;
