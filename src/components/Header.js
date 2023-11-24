import React from "react";

const Header = () => {
  return (
    <div className=" px-10 py-4 flex">
      <span className="font-bold text-red-500 text-xl">
        Musical
      </span>
      <div className="flex justify-center items-center w-full gap-x-3 font-bold">
        <div className="bg-red-100 text-red-500  px-3 py-1 rounded-lg">
          <span className="">
            Home
          </span>
        </div>
        <div className=" text-neutral-400 px-3 py-1 rounded-lg">
          <span className="">
            Home
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
