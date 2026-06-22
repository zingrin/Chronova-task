import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-black text-white">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-6xl font-bold">
          Time Isn't Measured.
          <br />
          It's Worn.
        </h1>

        <p className="text-gray-400 mt-5 max-w-xl">
          Discover handcrafted luxury watches designed for modern visionaries.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-yellow-500 px-6 py-3 rounded-lg text-black font-semibold"
        >
          Explore Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
