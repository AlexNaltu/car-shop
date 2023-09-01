import ProductCard from "@/app/components/ProductCard";
import { products } from "@/utils/product/products";
import React from "react";

interface pageProps {
  params: { shoppage: string };
}

const page: React.FC<pageProps> = ({ params }) => {
  return (
    <div className="my-20">
      <h1 className="w-[60vw] mx-auto p-2 font-black text-xl lg:text-5xl">Our Cars For Sale</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-[60vw] mx-auto">
        {products.map((product: any) => {
          return <ProductCard data={product} />;
        })}
      </div>
    </div>
  );
};

export default page;
