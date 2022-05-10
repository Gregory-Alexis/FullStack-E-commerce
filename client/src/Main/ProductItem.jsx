import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/features/cartSlice";
import { addToProduct } from "../redux/features/productSlice";

const ProductItem = ({ title, price, image, description, id }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice.cart);
  const cartList = cart.map((element) => {
    return element.id;
  });

  return (
    <div className="hover:scale-105 transition-all duration-200 ease-in-out">
      <Link to={`/product/${id}`}>
        <button
          className="flex flex-col items-center"
          onClick={() =>
            dispatch(
              addToProduct({
                id: id,
                title: title,
                image: image,
                price: price,
                description: description,
              })
            )
          }
        >
          <img src={image} alt={title} className="mt-5 h-full " />
        </button>
        <div className="flex justify-between bg-primary text-white p-4 rounded-b-lg">
          <h1>{title}</h1>
          <p>{price}</p>
        </div>
      </Link>
      {/*{cartList.includes(id) ? "" : ""}
      <button
        className="px-5 py-2 flex justify-center mt-2 bg-blue-500 text-white rounded m-auto"
        onClick={() =>
          dispatch(
            addToCart({
              title: title,
              image: image,
              price: price,
              id: id,
            })
          )
        }
      >
        Add to Cart
      </button>*/}
    </div>
  );
};

export default ProductItem;
