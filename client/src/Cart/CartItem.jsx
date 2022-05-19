const CartItem = ({ title, price, image, description }) => {
  return (
    <div className="flex m-5">
      <img src={image} alt={title} className="w-36" />
      <div className="text-sm ml-5">
        <h1>{title}</h1>
        <p className="pt-2">{description}</p>
        <p className="font-bold pt-2">{price}</p>
      </div>
      <div></div>
    </div>
  );
};

export default CartItem;
