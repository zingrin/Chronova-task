import SectionTitle from "../shared/SectionTitle";

const categories = ["Luxury", "Classic", "Sport", "Hybrid"];

const Categories = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          title="Categories"
          subtitle="Explore our premium collection."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item) => (
            <div
              key={item}
              className="bg-zinc-900 rounded-2xl p-10 text-center hover:border border-yellow-500 transition"
            >
              <h3 className="text-2xl font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
