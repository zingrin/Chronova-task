const Checkout = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-5">
      <h1 className="text-5xl font-bold mb-10">Checkout</h1>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-4 rounded-lg bg-zinc-900"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-lg bg-zinc-900"
        />

        <input
          type="text"
          placeholder="Phone"
          className="w-full p-4 rounded-lg bg-zinc-900"
        />

        <textarea
          placeholder="Address"
          className="w-full p-4 rounded-lg bg-zinc-900"
        />

        <div className="space-y-3">
          <label className="block">
            <input type="radio" name="payment" />
            Credit Card
          </label>

          <label className="block">
            <input type="radio" name="payment" />
            PayPal
          </label>

          <label className="block">
            <input type="radio" name="payment" />
            Cash On Delivery
          </label>
        </div>

        <button
          type="submit"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
