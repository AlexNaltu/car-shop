"use client";

import Image from "next/image";

interface ProductDetailsProps {
  product: any;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div>
      <div>
        <Image
          src={product.image}
          alt="/"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
