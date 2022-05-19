import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cartSlice.cart);

  console.log(cart);

  return (
    <>
      <ul className="m-5">
        {cart.map((el) => (
          <li>
            <CartItem
              title={el.title}
              image={el.image}
              price={el.price}
              quantity={el.quantity}
              id={el.id}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
