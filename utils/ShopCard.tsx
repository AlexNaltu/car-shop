import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Link from "next/link";

function ShopCard() {
  return (
    <div className="px-4 custom-shadow bg-white w-5/6 h-5.5/6 flex flex-col items-center sm:w-6/12 lg:w-2/6 lg:ml-10 rounded-md">
      <h1 className="text-base sm:text-xl md:text-4xl font-black text-blue-900 my-6">
        The way it <br /> should be
      </h1>
      <div className="flex flex-col gap-5 text-blue-500 items-start sm:px-4 lg:gap-8">
        <div className="flex gap-3">
          <AiOutlineCheck size={20} />
          <p className="text-xs sm:text-base lg:text-lg">
            <span className="font-black">Do more from home</span><br />
            Express pickup and delivery options available
          </p>
        </div>
        <div className="flex gap-3 ">
          <AiOutlineCheck size={20} />
          <p className="text-xs sm:text-base lg:text-lg">
            <span className="font-black">Test drives for real life</span><br />
            24-hour take home test drives
          </p>
        </div>
        <div className="flex gap-3 ">
          <AiOutlineCheck size={20} />
          <p className="text-xs sm:text-base lg:text-lg">
            <span className="font-black">Love it or return it </span><br />
            30-day money back (up to 1500 mi.)
          </p>
        </div>
        <div className="flex gap-3 ">
          <AiOutlineCheck size={20} />
          <p className="text-xs sm:text-base lg:text-lg">
            <span className="font-black">All major systems covered</span><br />
            90 days or 4,000 miles (whichever comes first)
          </p>
        </div>
        <Link
          href="/Shop"
          className="self-center py-4 px-10 rounded-lg font-black my-5 text-black bg-yellow-400 text-xs lg:text-lg sm:px-16 lg:px-24"
        >
          GET PRE-QUALIFIED
        </Link>
      </div>
    </div>
  );
}

export default ShopCard;
