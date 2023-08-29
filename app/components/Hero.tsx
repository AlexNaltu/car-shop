"use client";

import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="my-4">
      <div className="flex flex-col items-center text-center text-blue-900 lg:text-black lg:text-left lg:items-start ">
        <h1 className="text-4xl font-black my-6 lg:text-7xl">
          Love Your Car <br /> Guarantee
        </h1>
        <p className="text-xs md:text-lg flex items-center gap-2 w-[50vw]">
          Take 30 days to love it or return it (up to 3000 mi)
        </p>
        <Link
          href="/Shop"
          className="py-4 px-10 rounded-lg font-black my-8 text-black bg-yellow-400 text-xs lg:text-lg lg:px-24"
        >
          SEARCH CARS
        </Link>
      </div>
    </div>
  );
}

export default Hero;
