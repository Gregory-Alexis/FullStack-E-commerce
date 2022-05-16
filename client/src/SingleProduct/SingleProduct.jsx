import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  setSingleProduct,
  setError,
  setLoading,
} from "../redux/features/productSlice";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const singleProduct = useSelector(
    (state) => state.productSlice.singleProduct
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  useEffect(() => {
    dispatch(setLoading(true));
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5000/shop/product/${id}`
        );
        if (result) {
          dispatch(setSingleProduct(result.data));
        }
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
    fetchData();
  }, [dispatch, id]);

  return (
    <ul className="flex justify-center mx-5">
      <li>
        <h1 className="text-xl">{singleProduct.title}</h1>
        <img
          src={singleProduct.image}
          alt={singleProduct.title}
          className="mt-5"
        />
        <div className="flex justify-between">
          <p className="pt-2">{singleProduct.description}</p>
          <p className="font-bold pt-2">{singleProduct.price}</p>
        </div>
        <div className="flex justify-between items-center">
          <button
            type="button"
            aria-label="add to cart"
            className="bg-blue-500 py-1 px-2 rounded text-white mt-4"
          >
            Add To Cart
          </button>
          <div>
            <button
              type="button"
              aria-label="increment quantity"
              className="mr-2 text-2xl"
              onClick={incrementQuantity}
            >
              +
            </button>
            <span className="text-2xl border px-2 border-gray-400 rounded">
              {quantity}
            </span>
            <button
              type="button"
              aria-label="increment quantity"
              className="ml-2 text-2xl"
              onClick={decrementQuantity}
            >
              -
            </button>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default SingleProduct;
