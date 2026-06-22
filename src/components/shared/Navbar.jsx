import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/checkout">Checkout</Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-yellow-500">
          Chronova
        </Link>

        <div className="hidden md:flex items-center gap-8">{links}</div>

        <div className="flex items-center gap-5">
          <Link to="/cart" className="relative">
            <FaShoppingCart size={22} />
            <span className="absolute -top-2 -right-3 bg-yellow-500 text-black text-xs px-2 rounded-full">
              {cart.length}
            </span>
          </Link>

          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-zinc-900 flex flex-col gap-4 p-5">
          {links}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
