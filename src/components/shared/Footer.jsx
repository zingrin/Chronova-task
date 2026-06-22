const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-yellow-500">Chronova</h2>
          <p className="text-gray-400 mt-3">
            Luxury watches for modern visionaries.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Collections</h3>
          <p className="text-gray-400">Luxury</p>
          <p className="text-gray-400">Classic</p>
          <p className="text-gray-400">Sport</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Support</h3>
          <p className="text-gray-400">Contact</p>
          <p className="text-gray-400">FAQ</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Follow</h3>
          <p className="text-gray-400">Instagram</p>
          <p className="text-gray-400">Facebook</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
