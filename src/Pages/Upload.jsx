import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { auth, db } from "../Functions/firebase-config";
import { ToastContainer, toast } from "react-toastify";
import { RiArrowDownSLine } from "react-icons/ri";
import BeatLoader from "react-spinners/BeatLoader";
import { onAuthStateChanged } from "firebase/auth";

const Upload = () => {
  const location = useLocation();
  const data = location.state;
  const [bol, setbol] = useState(false);
  const [list, setlist] = useState([]);
  const [courses, setcourses] = useState([]);
  const [score, setscore] = useState(0);
  const [semester, usesemester] = useState("");
  const [session, usesession] = useState("");
  const [uid, setuid] = useState("");
  const [value, setvalue] = useState(0);
  useEffect(() => {
    getter();
    onAuthStateChanged(auth, (currentuser) => {
      setuid(currentuser.uid);
    });
  }, []);
  const course = 0;

  const getter = () => {
    // console.log(data);
    setbol(true);
    const courseref = collection(db, "Students");
    getDocs(courseref)
      .then((res) => {
        const val = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setbol(false);
        const real = val.map((arr, i) => {
          arr.courses.map((ar, i) => {
            if (ar.course_code == data.course_code) {
              courses.push(arr);
            }
          });
        });
        setcourses(
          courses.filter((obj, index) => {
            return index === courses.findIndex((o) => obj.id === o.id);
          })
        );
      })
      .catch((e) => {
        toast.error("Network errorr");
        setbol(false);
      });
  };

  const Score = (e) => {
    const { name } = e.target;
    if (e.target.value >= 70) {
      setscore("A");
      setcourses(
        courses.map((doc) =>
          doc.matric_no == name ? { ...doc, score: "A" } : doc
        )
      );
    } else if (e.target.value >= 60) {
      setscore("B");
      setcourses(
        courses.map((doc) =>
          doc.matric_no == name ? { ...doc, score: "B" } : doc
        )
      );
    } else if (e.target.value >= 50) {
      setscore("C");
      setcourses(
        courses.map((doc) =>
          doc.matric_no == name ? { ...doc, score: "C" } : doc
        )
      );
    } else if (e.target.value >= 40) {
      setscore("D");
      setcourses(
        courses.map((doc) =>
          doc.matric_no == name ? { ...doc, score: "D" } : doc
        )
      );
    } else {
      setscore("F");
      setcourses(
        courses.map((doc) => (doc.matric_no ? { ...doc, score: "F" } : doc))
      );
    }
  };

  const Uploader = () => {
    if (semester !== "" && session !== "") {
      setbol(true);
      for (let index = 0; index < courses.length; index++) {
        const data = location.state;
        const docref = doc(db, "Result", courses[index].id, session, semester);
        let dat = {
          results: [
            {
              course_code: data.course_code,
              course_title: data.course_title,
              credit_unit: data.unit,
              grade: courses[index].score,
            },
          ],
        };
        setDoc(docref, dat)
          .then((res) => {
            setbol(false);
            toast.success("Successful");
          })
          .catch((e) => {
            setbol(false);
            toast.error("Error");
          });
        usesemester("");
        usesession("");
      }
    } else {
      console.log(courses);
    }
  };

  return (
    <>
      {bol ? (
        <div className="absolute flex justify-center items-center z-10 top-0   h-screen bg-white/75 left-0 right-0">
          <BeatLoader color="#16A34A" size={30} />
        </div>
      ) : (
        ""
      )}
      <ToastContainer autoClose={3000} />
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
        <div className="flex  w-[45rem] justify-between mb-5 items-center">
          <div className="holder">
            <label htmlFor="">Academic Session</label>
            <div className="relative w-64">
              <select
                value={session}
                // onClick={() => setses(false)}
                onChange={(e) => {
                  usesession(e.target.value);
                }}
                required
                className={
                  " appearance-none w-full  px-4 py-2 pr-8 rounded-lg  leading-tight  text-gray-900 border-[#D0D5DD] border-2"
                }
              >
                <option value="" disabled selected hidden className=" ">
                  Select Session
                </option>
                <option className="text-black" value="2011--2012">
                  2011/2012
                </option>
                <option className="text-black" value="2012--2013">
                  2012/2013
                </option>
                <option className="text-black" value="2013--2014">
                  2013/2014
                </option>
                <option className="text-black" value="2014--2015">
                  2014/2015
                </option>
                <option className="text-black" value="2015--2016">
                  2015/2016
                </option>
                <option className="text-black" value="2016--2017">
                  2016/2017
                </option>
                <option className="text-black" value="2017--2018">
                  2017/2018
                </option>
                <option className="text-black" value="2018--2019">
                  2018/2019
                </option>
                <option className="text-black" value="2019--2020">
                  2019/2020
                </option>
                <option className="text-black" value="2020--2021">
                  2020/2021
                </option>
                <option className="text-black" value="2021--2022">
                  2021/2022
                </option>
                <option className="text-black" value="2022--2023">
                  2022/2023
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#D1D1D1]">
                <RiArrowDownSLine size={26} className="text-[#667085]" />
              </div>
            </div>
          </div>{" "}
          <div className="holder">
            <label htmlFor="">Semester</label>
            <div className="relative w-64">
              <select
                value={semester}
                // onClick={() => setses(false)}
                onChange={(e) => {
                  usesemester(e.target.value);
                }}
                required
                className={
                  " appearance-none w-full  px-4 py-2 pr-8      rounded-lg  leading-tight  text-gray-900 border-[#D0D5DD] border-2"
                }
              >
                <option value="" disabled selected hidden className=" ">
                  Select Semester
                </option>
                <option className="text-black" value="Alpha">
                  Alpha
                </option>
                <option className="text-black" value="Omega">
                  Omega
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#D1D1D1]">
                <RiArrowDownSLine size={26} className="text-[#667085]" />
              </div>
            </div>
          </div>
        </div>

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
              {courses.map((arr, i) => (
                <tr
                  key={i}
                  class=" text-black even:bg-transparent odd:bg-[#E1E1E1] border-b   text-center font-semibold bg-[#E1E1E1] "
                >
                  <td class="px-2 py-4">{i + 1}</td>
                  <td class="px-2 py-4">{arr.matric_no}</td>
                  <td class="px-2 py-4 ">{`${arr.firstname} ${arr.lastname}`}</td>
                  <td class="px-2 py-4 ">
                    <input
                      type="number"
                      max="100"
                      min="0"
                      name={arr.matric_no}
                      onChange={(e) => Score(e)}
                    />
                  </td>
                  <td>{arr?.score || "F"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={() => Uploader()}
          className="p-2 px-5 bg-[#16A34A] rounded-lg text-white mt-5 mx-auto flex"
        >
          Upload Result
        </button>
      </div>
    </>
  );
};

export default Upload;
