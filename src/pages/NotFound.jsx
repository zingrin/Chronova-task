import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold">404</h1>

      <p className="mt-4">Page Not Found</p>

      <Link
        to="/"
        className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-lg"
      >
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;
