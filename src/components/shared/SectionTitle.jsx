const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-500">
        {title}
      </h2>
      <p className="text-gray-400 mt-3">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
