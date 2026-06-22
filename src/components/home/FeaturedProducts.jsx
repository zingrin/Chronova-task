import products from "../../data/products";
import ProductCard from "../ProductCard";
import SectionTitle from "../shared/SectionTitle";

const FeaturedProducts = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <SectionTitle
          title="Featured Products"
          subtitle="Our most loved watches"
        />

        <div className="grid md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
