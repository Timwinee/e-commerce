import { useLoaderData, Link } from "react-router-dom";
import { formatPrice, customFetch, generateAmountOption } from "../utils/Index";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import Login from "./login";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};
export default function SingleProduct() {
  const { product } = useLoaderData();
  console.log(product);
  
  const { image, title, company, price, description, colors } = product.attributes;
  const dollars = formatPrice(price);
  const [productsColors, setProductColors] = useState(colors[0]);
  const [amount, setAmount] = useState(0);
  const cartProduct = {
    cartID: product.id + productsColors,
    productID: product.id,
    image,
    title,
    price,
    company, 
    productsColors,
    amount
  }
  
  const dispatch = useDispatch()
  const addToCart = ()=>{
    dispatch(addItem({product:cartProduct}))
    
  }
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
        </ul>
      </div>
      <div className="grid mt-6 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg"
        />
        {/*Products article */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h3 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h3>
          <p className="mt-3 text-xl">{dollars}</p>
          <p className="mt-3 leading-8">{description}</p>
          {/* color */}
          <div className="mt-6">
            <h4>Colors</h4>
            <div className="flex justify-between max-w-60 ">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    className={`bg-[${color}] cursor-pointer w-9 h-9 badge ${color === productsColors ? `border-2 border-secondary` : ""}`}
                    type="button"
                    style={{ background: color }}
                    onClick={() => setProductColors(color)}
                  ></button>
                );
              })}
            </div>
            {/* Amoun */}
            <div className="form-control w-full max-w-xs mt-6">
              <label htmlFor="amount" className="label">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  amount
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-md"
                name="amount"
                id="amount"
                value={amount}
                onChange={handleAmount}
              >
                {generateAmountOption(20)}
              </select>
              {/* cart btn */}
              <button className="btn btn-secondary btn-md mt-8" onClick={addToCart}>
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
