import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="h-72 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold">{product.name}</h3>

        <p className="text-yellow-500 mt-2">${product.price}</p>

        <Link
          to={`/product/${product.id}`}
          className="inline-block mt-4 bg-yellow-500 text-black px-5 py-2 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
