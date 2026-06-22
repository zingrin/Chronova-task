import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-5 h-20 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-yellow-500">
          Chronova
        </Link>

        <div className="space-x-5">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </div>

        <FaShoppingCart size={25} />

        <span className="bg-yellow-500 text-black rounded-full px-2 text-xs">
          {cart.length}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
