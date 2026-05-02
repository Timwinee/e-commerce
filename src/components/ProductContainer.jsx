import { useLoaderData } from "react-router-dom";
import ProductsList from "./ProductsList";
import ProductsGrid from "./ProductsGrid";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useState } from "react";

const ProductContainer = () => {
  const { meta } = useLoaderData();
  const total = meta.pagination.total;
  
  const [layout, setLayout] = useState("grid");
  const setActiveStyle = (pattern) => {
    return `return-xl btn btn-static btn-sm ${pattern === layout ? "btn-primary text-primary-content" : "btn-ghost test-based-content"}`;
  };
  return (
    <div>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4>
          {total} product{total < 1 ? "" : "s"}
        </h4>
        <div className="flex gap-2 ">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            className={setActiveStyle("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => setLayout("list")}
            className={setActiveStyle("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {total === 0 ? (
        <h5 className="text-4xl text-center mt-14">
          Sorry, no products matched your search...
        </h5>
      ) : layout === "grid" ? (
        <ProductsGrid />
      ) : (
        <ProductsList />
      )}
    </div>
  );
};

export default ProductContainer;
