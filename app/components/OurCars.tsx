import React from "react";
import CarSlider from "../../utils/CarSlider";

const Horizontal = () => {
  return <hr className="w-[90vw] my-2 mx-auto" />;
};

function OurCars() {
  return (
    <div className="my-14 flex flex-col gap-4 font-bold">
      <div className="flex items-center gap-4 w-[90vw] mx-auto">
        <h1 className="text-lg text-blue-900 md:text-2xl lg:text-5xl">Some Of Our Cars</h1>
        <p className="self-end text-xs text-blue-500 lg:text-base">#GALLERY</p>
      </div>
      <Horizontal />
      <CarSlider />
      <Horizontal />
    </div>
  );
}

export default OurCars;
