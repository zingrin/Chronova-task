const Reviews = () => {
  const reviews = [
    { name: "John Carter", text: "Absolutely premium quality!" },
    { name: "Sophia Lee", text: "Feels like real luxury brand." },
    { name: "Daniel Smith", text: "Design is super modern." },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Customer Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-zinc-900 p-8 rounded-2xl">
              <p className="text-gray-300">"{r.text}"</p>
              <h4 className="mt-4 font-bold text-yellow-500">{r.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
