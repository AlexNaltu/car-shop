import ProductCard from "@/app/components/ProductCard";
import { products } from "@/utils/product/products";
import React from "react";

interface pageProps {
  params: { shoppage: string };
}

const page: React.FC<pageProps> = ({ params }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-[50vw]">
        {products.map((product: any) => {
          return <ProductCard data={product} />;
        })}
      </div>
    </div>
  );
};

export default page;
