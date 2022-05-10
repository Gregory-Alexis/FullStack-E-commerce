import React, { useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { setData, setError } from "../redux/features/shopSlice";

const Product = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.shopSlice.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:5000/shop");
        if (result) {
          dispatch(setData(result.data));
        }
      } catch (error) {
        dispatch(setError(error.message));
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <ul className="w-full">
      {data.map((el) => (
        <li key={el._id} className="mx-10">
          <ProductItem
            title={el.title}
            image={el.image}
            description={el.description}
            id={el._id}
            price={el.price}
          />
        </li>
      ))}
    </ul>
  );
};

export default Product;
