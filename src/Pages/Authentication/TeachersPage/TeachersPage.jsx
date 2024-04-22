import React, { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import ModalInner from "../../../components/ModalInner/ModalInner";

import Search from "../../../assets/Images/search.svg";
import NotFound from "../../../assets/Images/not-found.png";
import Trash from "../../../assets/Images/trash.svg";
import More from "../../../assets/Images/more.svg";
import Support from "../../../assets/Images/support.svg";
import Down from "../../../assets/Images/down.svg";

function TeachersPage({ setState, teachers, setTeachers }) {
  const navigate = useNavigate();

  useEffect(() => {
    setState(false);
  });

  const [innerModal, setInnerModal] = useState(false);

  const deleteClickBtn = (evt) => {
    const clickId = evt.target.id;
    const finded = teachers.findIndex((item) => item.id == clickId);
    teachers.splice(finded, 1);
    toast.success("Ma'lumot o'chirildi!");
    setInnerModal(false);
    setTeachers([...teachers]);
    window.localStorage.setItem("teachers", JSON.stringify(teachers))
  };

  const searchData = (evt) => {
    const value = evt.target.value
    const searchValue = JSON.parse(window.localStorage.getItem("teachers"))
    const searchFilter = searchValue.filter(item => 
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.email.toLowerCase().includes(value.toLowerCase())
    )
    setTeachers(searchFilter)
  }

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex items-center mb-[14px] justify-between py-[14px]">
        <h2 className="text-[#4F4F4F] text-[24px] leading-[24.8px] font-medium">
          Teachers
        </h2>
        <Link
          to={"/add"}
          className="w-[118px] rounded-[4px] transition hover:opacity-60 text-white py-[12px] font-semibold text-[14px] leading-[17.36px] text-center bg-[#509CDB]"
        >
          Add Teachers
        </Link>
      </div>
      <label className="flex items-center space-x-[16px] bg-[#FCFAFA] rounded-[8px] px-[16px] py-[16px]">
        <img src={Search} alt="Search icon" width={16} height={16} />
        <input onChange={searchData}
          className="search-input w-full outline-none bg-transparent"
          type="text"
          placeholder="Search for a teachers by name or email"
        />
      </label>
      {teachers.length === 0 ? (
        <div className="relative">
        <img className="mt-[30px]" src={NotFound}  alt="Not Found"  width={"100%"}/>

        <div className='w-[181px] absolute top-[324px] right-[19px] flex items-center justify-center space-x-[39px] rounded-[30px] bg-[#152259] py-[21px]'>
         <div className='flex items-center space-x-[8px]'>
            <img src={Support} alt="Suppor icon" width={16} height={16} />
            <span className='text-[14px] text-[#FCFAFA] font-semibold leading-[17.36px]'>Support</span>
          </div>
          <img src={Down} alt="Down icon" width={16} height={16} />
      </div>

        </div>
      ) : (
        <div className="mt-[11px]">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-[15px] font-bold text-[#424242] leading-[16px] py-[16px] pl-[8px] text-start">
                  Name
                </th>
                <th className="text-[15px] font-bold text-[#424242] leading-[16px] py-[16px] pl-[8px] text-start">
                  Subject
                </th>
                <th className="text-[15px] font-bold text-[#424242] leading-[16px] py-[16px] pl-[8px] text-start">
                  Class
                </th>
                <th className="text-[15px] font-bold text-[#424242] leading-[16px] py-[16px] pl-[8px] text-start">
                  Email address
                </th>
                <th className="text-[15px] font-bold text-[#424242] leading-[16px] py-[16px] pl-[8px] text-start">
                  Gender
                </th>
                <th className="text-[15px] font-bold text-[#424242] leading-[16px] py-[16px] pl-[8px] text-start"></th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((item) => (
                <tr className="even:bg-[#EBF6FF80]" key={item.id}>
                  <td className="py-[12px] pl-[8px] text-[#4F4F4F] font-semibold text-[14px] leading-[16px] flex items-center">
                    <img
                      className="rounded-[30px] pr-[8px]"
                      src={item.avatarImg}
                      alt="Avatar"
                      width={50}
                      height={50}
                    />
                    {item.name}
                  </td>
                  <td className="py-[12px] pl-[8px] text-[#4F4F4F] font-semibold text-[14px] leading-[16px]">
                    {item.subject}
                  </td>
                  <td className="py-[12px] pl-[8px] text-[#4F4F4F] font-semibold text-[14px] leading-[16px]">
                    {item.class == "1" ? "React N1" : ""}
                    {item.class == "2" ? "React N2" : ""}
                    {item.class == "3" ? "React N3" : ""}
                    {item.class == "4" ? "React N4" : ""}
                  </td>
                  <td className="py-[12px] pl-[8px] text-[#4F4F4F] font-semibold text-[14px] leading-[16px]">
                    {item.email}
                  </td>
                  <td className="py-[12px] pl-[8px] text-[#4F4F4F] font-semibold text-[14px] leading-[16px]">
                    {item.gender == "1" ? "Male" : ""}
                    {item.gender == "2" ? "Female" : ""}
                  </td>
                  <td className="py-[12px] pl-[8px] text-[#4F4F4F] font-semibold text-[14px] leading-[16px] ">
                    <div className="flex items-center space-x-5">
                      <button
                        onClick={() => navigate(`/single-teacher/${item.id}`)}
                      >
                        <img src={More} alt="More icon" width={16} height={4} />
                      </button>
                      <button id={item.id} onClick={() => setInnerModal(true)}>
                        <img
                          src={Trash}
                          alt="Trash icon"
                          width={16}
                          height={22}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <ModalInner innerModal={innerModal} setInnerModal={setInnerModal}>
        <p className="text-white font-bold text-[24px] text-center pt-[10px]">
          Do you want to delete data?
        </p>
        <div className="flex items-center justify-center mt-[20px] space-x-5">
          <button
            onClick={() => {
              setInnerModal(false);
            }}
            className="text-[20px] text-white font-bold p-2 rounded-md bg-blue-500" > Cancel
          </button>
          <button
            onClick={deleteClickBtn}
            className="text-[20px] text-white font-bold p-2 rounded-md bg-red-500"
          >
            Delete
          </button>
        </div>
      </ModalInner>
    </div>
  );
}

export default TeachersPage;
