import products from "../../data/products";
import ProductCard from "../ProductCard";
import SectionTitle from "../shared/SectionTitle";

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          title="Featured Products"
          subtitle="Our most popular luxury timepieces."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
