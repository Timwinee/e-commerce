// import SingleProduct from "./singleProduct";

// import { useLoaderData } from "react-router-dom";
import { Filter, PaginationContainer, ProductContainer } from "../components";
import { customFetch } from "../utils/Index";

const url = "/products";
export const loader = async ( {request} ) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams])
  
  
  const respone = await customFetch(url, {params});
  const products = respone.data.data;
  const meta = respone.data.meta;
  return { products, meta , params};
};

export default function Products() {
  // const log = useLoaderData();
  // // console.log(log);

  return (
    <section>
      <Filter />
      <ProductContainer />
      <PaginationContainer />
    </section>
  );
}
