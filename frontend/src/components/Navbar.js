import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-200">
      <div className="max-w-screen-2xl mx-0 my-auto px-3 py-5 flex items-center justify-between">
        <Link to="/">
          <h1 className=" font-bold">My Data & My World</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
