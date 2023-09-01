import Container from "@/app/components/Container";
import { products } from "@/utils/product/products";
import React from "react";
import ProductDetails from "./ProductDetails";
interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={products} />
      </Container>
    </div>
  );
};

export default Product;
