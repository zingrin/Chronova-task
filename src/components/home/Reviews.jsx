const reviews = [
  {
    name: "James Carter",
    text: "Exceptional craftsmanship.",
  },
  {
    name: "Sophia Lee",
    text: "Looks even better in person.",
  },
  {
    name: "Daniel White",
    text: "Absolutely premium quality.",
  },
];

const Reviews = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold mb-10">Customer Reviews</h2>

        <div className="space-y-5">
          {reviews.map((review, index) => (
            <div key={index} className="bg-zinc-900 p-5 rounded-xl">
              <h3 className="text-xl font-bold">{review.name}</h3>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
