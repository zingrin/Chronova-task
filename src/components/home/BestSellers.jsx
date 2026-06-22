import products from "../../data/products";
import ProductCard from "../ProductCard";
import SectionTitle from "../shared/SectionTitle";

const BestSellers = () => {
  const best = products.filter((p) => p.bestSeller);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          title="Best Sellers"
          subtitle="Most loved luxury watches by our customers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {best.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
