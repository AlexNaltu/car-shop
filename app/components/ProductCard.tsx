"use client";

import truncateText from "@/utils/truncate";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/product/${data.id}")}
      className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-sm m-3 max-w-[500px]"
    >
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h1>{data.name}</h1>
          <p>{data.model}</p>
          <p>{truncateText(data.description)}</p>
        </div>
        <Rating />
      </div>
    </div>
  );
};

export default ProductCard;
