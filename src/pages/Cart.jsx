import { Link } from "react-router";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-40">
        <h2 className="text-4xl font-bold">Your cart is empty</h2>

        <Link
          to="/"
          className="mt-6 inline-block bg-yellow-500 px-6 py-3 rounded"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-20 px-5">
      <h1 className="text-5xl font-bold mb-10">Shopping Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-zinc-900 p-5 rounded-xl mb-4"
        >
          <div>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>

          <div className="flex gap-3">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>

            <span>{item.quantity}</span>

            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <h2 className="text-3xl font-bold mt-10">Total: ${totalPrice}</h2>

      <Link
        to="/checkout"
        className="inline-block mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg"
      >
        Proceed To Checkout
      </Link>
    </div>
  );
};

export default Cart;
