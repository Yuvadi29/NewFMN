import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="lg:h-heightWithoutNavbar flex flex-col items-center justify-center border border-red-500 lg:flex-row">
      <div className="flex w-full flex-col items-center justify-center border-[3px] border-green-500 py-4 lg:h-full lg:w-[40%]">
        <div className="grid h-[200px] w-[200px] place-content-center overflow-hidden rounded-full bg-gray-400 text-2xl font-black">
          {/* 200 x 200 */}
          <img src="" alt="" className="" />
        </div>
        <div className="">
          <div className=" my-2 flex flex-col items-center justify-center ">
            <h2 className="text-2xl font-black">
              <span>John</span> <span>Doe</span>
            </h2>
            <p className="mt-1 text-center">johndoe123</p>
            <p className="mt-1 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        {/* counts */}
        <div className="flex items-center justify-center gap-4">
          <div className="grid h-[80px] w-[100px] place-content-center">
            <p className="text-center text-[12px] font-bold">
              No. of Uploads :
            </p>
            <p className="text-center text-5xl font-black">1</p>
          </div>
          <span className="h-[60px] w-[1px] bg-gray-400" />
          <div className="grid h-[80px] w-[100px] place-content-center">
            <p className="text-center text-[12px] font-bold">No. of Files :</p>
            <p className="text-center text-5xl font-black">1</p>
          </div>
        </div>
      </div>
      <div className="h-auto w-full border-[3px] border-amber-500 p-5 lg:h-full lg:w-[60%]">
        <h1 className="mb-3 text-xl font-black">My Documents :</h1>
        <div className="grid grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3">
          {Array(10)
            .fill(true)
            .map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-black px-4 py-2 text-black"
              >
                <p className="">Sem8</p>
                <FaExternalLinkAlt />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
