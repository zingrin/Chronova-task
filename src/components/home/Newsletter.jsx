const Newsletter = () => {
  return (
    <section className="py-16 md:py-24 bg-zinc-950">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Join Chronova Club</h2>

        <p className="text-gray-400 mt-4">
          Get exclusive offers and new arrivals updates.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-xl bg-zinc-900 outline-none"
          />

          <button className="bg-yellow-500 text-black px-6 py-4 rounded-xl font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
