import products from "../../data/products";

const BestSellers = () => {
  const best = products.filter((item) => item.bestSeller);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold mb-10">Best Sellers</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {best.map((item) => (
            <div key={item.id} className="bg-zinc-900 p-6 rounded-xl">
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
