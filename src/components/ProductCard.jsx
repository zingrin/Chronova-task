import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold">{product.name}</h3>

        <p className="text-yellow-500 text-lg mt-2">${product.price}</p>

        <Link
          to={`/product/${product.id}`}
          className="inline-block mt-4 px-5 py-2 bg-yellow-500 text-black rounded-lg font-semibold"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
