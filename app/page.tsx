import Qualify from "./components/Qualify";
import CarShop from "./components/CarShop";
import OurCars from "./components/OurCars";
import ExpertReviews from "./components/ExpertReviews";
import Popular from "./components/Popular";

export default function Home() {
  return (
    <div>
      <Qualify />
      <CarShop />
      <OurCars />
      <ExpertReviews />
      <Popular />
    </div>
  );
}

/*{products.map((product: any) => {
  return <ProductCard data={product} />;
})}*/
