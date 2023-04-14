import { useState, useEffect } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`w-full h-20 md:h-20 flex items-center justify-center fixed z-50 ${
        isMenuOpen && "bg-emerald-800"
      }`}
    >
      <div
        className={`${
          screenSize < 768
            ? "flex items-center justify-between w-screen px-[20px]"
            : "flex flex-row gap-96"
        }`}
      >
        <div className="flex flex-row gap-3 items-center">
          <IoTrashOutline size={20} color="white" />
          <h2 className="text-2xl font-semibold font-serif text-white hover:text-emerald-700 cursor-pointer">
            WOD
          </h2>
        </div>
        {screenSize < 768 ? ( // add an HiMenu icon if screen width is less than md
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <IoMenuOutline size={20} color="white" />
          </button>
        ) : (
          <div className="flex flex-row gap-20">
            <button className="text-2xl font-semibold font-serif hover:text-emerald-700 cursor-pointer text-white">
              <Link to="/home">Home</Link>
            </button>
            <button className="text-2xl font-semibold font-serif hover:text-emerald-700 cursor-pointer text-white">
              <Link to="/partnerwithus">Partner With Us</Link>
            </button>
            <button className="text-2xl font-semibold font-serif hover:text-emerald-700 cursor-pointer text-white">
              <Link to="/aboutus">About Us</Link>
            </button>
            <button className="text-2xl font-semibold font-serif hover:text-emerald-700 cursor-pointer text-white">
              <Link to="/help">Help</Link>
            </button>
            <button className="text-2xl font-semibold font-serif hover:text-emerald-700 cursor-pointer text-white">
              <Link to="/login">Login</Link>
            </button>
          </div>
        )}
        {isMenuOpen && ( // show the menu if the HiMenu icon is clicked
          <div className="fixed top-0 left-0 w-screen h-screen">
            <div className="flex justify-end p-[1.70rem]">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <IoMenuOutline size={20} color="white" />
              </button>
            </div>
            <div className="flex flex-col gap-10 items-center justify-center bg-emerald-800 h-screen">
              <button className="text-lg font-serif mb-2 hover:text-emerald-700 cursor-pointer">
                <Link to="/">Home</Link>
              </button>
              <button className="text-lg font-serif mb-2 hover:text-emerald-700 cursor-pointer">
                <Link to="/partnerwithus">Partner With Us</Link>
              </button>
              <button className="text-lg font-serif mb-2 hover:text-emerald-700 cursor-pointer">
                <Link to="/aboutus">About Us</Link>
              </button>
              <button className="text-lg font-serif mb-2 hover:text-emerald-700 cursor-pointer">
                <Link to="/help">Help</Link>
              </button>
              <button className="text-lg font-serif mb-2 hover:text-emerald-700 cursor-pointer">
                <Link to="/login">Login</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
