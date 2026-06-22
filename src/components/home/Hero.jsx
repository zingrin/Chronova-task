import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-yellow-500 uppercase tracking-[6px]">
              Luxury Collection
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-4">
              Time Isn't
              <br />
              Measured.
              <br />
              It's Worn.
            </h1>

            <p className="text-gray-400 mt-6 max-w-xl">
              Discover handcrafted Swiss luxury watches designed for
              visionaries.
            </p>

            <button className="mt-8 px-8 py-4 bg-yellow-500 text-black rounded-xl font-semibold">
              Explore Collection
            </button>
          </motion.div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49"
              alt="watch"
              className="w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
