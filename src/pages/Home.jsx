import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import BestSellers from "../components/home/BestSellers";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Reviews from "../components/home/Reviews";
import Newsletter from "../components/home/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <BestSellers />
      <WhyChooseUs />
      <Reviews />
      <Newsletter />
    </>
  );
};

export default Home;
