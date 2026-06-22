const WhyChooseUs = () => {
  const items = [
    { title: "Swiss Precision", desc: "High-end craftsmanship" },
    { title: "Premium Materials", desc: "Only luxury-grade parts" },
    { title: "Lifetime Warranty", desc: "Trusted global quality" },
    { title: "Worldwide Shipping", desc: "Delivered anywhere" },
  ];

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-900 p-8 rounded-2xl text-center hover:border border-yellow-500 transition"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
