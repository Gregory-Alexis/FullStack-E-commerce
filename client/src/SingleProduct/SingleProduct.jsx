import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { setError } from "../redux/features/cartSlice";
import { setSingleProduct } from "../redux/features/productSlice";

const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const singleProduct = useSelector(
    (state) => state.productSlice.singleProduct
  );

  useEffect(() => {
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
        <div>
          <img
            src={singleProduct.image}
            alt={singleProduct.title}
            className="mt-5"
          />
          <div className="flex justify-between">
            <p className="pt-2">{singleProduct.description}</p>
            <p className="font-bold pt-2">{singleProduct.price}</p>
          </div>
          <button
            type="button"
            aria-label="add to cart"
            className="bg-blue-500 py-1 px-2 rounded text-white mt-4"
          >
            Add To Cart
          </button>
        </div>
      </li>
    </ul>
  );
};

export default SingleProduct;
