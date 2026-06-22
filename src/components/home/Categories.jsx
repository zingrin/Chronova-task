const categories = ["Luxury", "Classic", "Sport", "Hybrid"];

const Categories = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((item) => (
            <div
              key={item}
              className="bg-zinc-900 p-10 rounded-xl text-center hover:border hover:border-yellow-500"
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
