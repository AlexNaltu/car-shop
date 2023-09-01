"use client";

import { formatPrice } from "@/utils/formatPrice";
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
      className="font-black col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-sm m-3 max-w-[500px]"
    >
      <div className="flex flex-col items-start w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="w-full h-full object-contain"
          />
        </div>
        <div className="px-2">
          <h1 className="font-extralight">{data.name}</h1>
          <p className="text-xl">{data.model}</p>
          <p>{truncateText(data.description)}</p>
          <div>{formatPrice(data.price)}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
