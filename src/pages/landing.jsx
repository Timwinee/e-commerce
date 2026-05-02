import { Hero , FeatureProducts} from "../components";
// import { FeatureProducts } from "../components/FeatureProducts";
import { customFetch } from "../utils";
const url = `products?featured=true`;

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  return {products, meta};
};

export default function Landing() {
  // const loader = async () => {
  //   const response = await customFetch(url);
  //   const products = response;
  //   // console.log(products);
  // };
  // loader();
  
  return (
    <section className="align-element">
      <Hero />
      <FeatureProducts />
    </section>
  );
}
