import React from "react";
import { ReviewsData } from "../data/ReviewsData";
import Image from "next/image";

function ExpertReviews() {
  return (
    <div className="w-[90vw] mx-auto flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ReviewsData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col w-[260px] gap-4 border-2 border-slate-200 lg:w-[350px]"
            >
              <Image
                src={item.image}
                alt=""
                width={400}
                height={100}
                className="bg-cover"
              />
              <div className="px-5 flex flex-col gap-3">
                <p>{item.description}</p>
                <h1 className="font-black">{item.review}</h1>
                <div className="flex items-end gap-3 py-2">
                  <Image
                    src={item.photo}
                    alt=""
                    width={80}
                    height={50}
                    className="rounded-full border-slate-200 border-4"
                  />
                  <p>{item.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExpertReviews;
