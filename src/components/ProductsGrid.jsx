import { Link, useLoaderData } from "react-router-dom";
import { formatPrice, productsUrl } from "../utils/Index";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductsGrid = () => {
  const {products} = useLoaderData()
  
  // const [product, setProducts] = useState([]);
  // console.log(product);
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     try {
  //       const response = await axios(`${productsUrl}/products`);
  //       // console.log(response);
  //       setProducts(response.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchApi();
  // }, []);
  // const prodcut = useLoaderData()
  // console.log(product);
  // console.log(formatPrice);

  const takeId = (id) => {
    console.log(id);
  };

  return (
    <div className=" w-full h-auto grid grid-cols-3 gap-y-10 mt-14">
      {products?.map((items) => {
        // if (index >= 6) {
        //   return;
        // }
        const { image, title, price } = items.attributes;
        return (
          <Link to={`/products/${items.id}`} key={items.id}>
            <div
              
              onClick={() => takeId(items.id)}
              className="card bg-base-150 shadow-4xl max-w-80 w-full shadow-[10px_15px_20px_rgba(0,0,0,0.08)]
            hover:shadow-[20px_12px_30px_rgba(0,0,0,0.12)]
            transition-all duration-300 pb-6 "
            >
              <img
                src={image}
                alt={title}
                className="object-cover rounded-box w-full h-50"
              />
              <article>
                <h2 className="text-2xl text-center mt-4 font-bold text-gray-400">
                  {title}
                </h2>
                <p className="text-[20px] text-center mt-6">
                  {formatPrice(price)}
                </p>
              </article>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
