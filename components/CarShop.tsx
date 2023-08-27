import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShopCard from "../utils/ShopCard";

function CarShop() {
  return (
    <div
      className="custom-shop-bg h-[70vh] md:h-[80vh] lg:h-[100vh] w-full bg-center bg-no-repeat flex flex-col items-center 
    place-content-center md:items-start px-4"
    >
      <ShopCard />
    </div>
  );
}

export default CarShop;
