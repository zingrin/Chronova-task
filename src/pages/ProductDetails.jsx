import { useParams } from "react-router";
import products from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  return (
    <div className="max-w-7xl mx-auto px-5 py-20">
      <div className="grid md:grid-cols-2 gap-10">
        <img src={product.image} alt={product.name} className="rounded-xl" />

        <div>
          <h1 className="text-5xl font-bold">{product.name}</h1>

          <p className="text-yellow-500 text-3xl mt-4">${product.price}</p>

          <p className="mt-6 text-gray-400">{product.description}</p>

          <ul className="mt-6 space-y-2">
            {product.features.map((feature) => (
              <li key={feature}>✓ {feature}</li>
            ))}
          </ul>

          <button
            onClick={() => addToCart(product)}
            className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-lg"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
