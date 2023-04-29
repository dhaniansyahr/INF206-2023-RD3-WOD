import { useState, useEffect } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { WavyLink } from "react-wavy-transitions";

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
            <IoMenuOutline
              size={20}
              color="white"
              className={`${isMenuOpen && "hidden"}`}
            />
          </button>
        ) : (
          <div className="flex flex-row gap-20">
            <button className="text-2xl font-semibold font-serif hover:text-emerald-700 cursor-pointer text-white">
              <WavyLink to="/home" color="#065F46">
                Home
              </WavyLink>
            </button>
            <button className="text-2xl font-semibold font-serif hover:text-emerald-700 cursor-pointer text-white">
              <WavyLink to="/partnerwithus" color="#065F46">
                Partner With Us
              </WavyLink>
            </button>
            <button className="text-2xl font-semibold font-serif hover:text-emerald-700 cursor-pointer text-white">
              <WavyLink to="/aboutus" color="#065F46">
                About Us
              </WavyLink>
            </button>
            <button className="text-2xl font-semibold font-serif hover:text-emerald-700 cursor-pointer text-white">
              <WavyLink to="/help" color="#065F46">
                Help
              </WavyLink>
            </button>
            <button className="text-2xl font-semibold font-serif hover:text-emerald-700 cursor-pointer text-white">
              <WavyLink to="/login" color="#065F46">
                Login
              </WavyLink>
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
                <WavyLink to="/" color="#34D399">
                  Home
                </WavyLink>
              </button>
              <button className="text-lg font-serif mb-2 hover:text-emerald-700 cursor-pointer">
                <WavyLink to="/partnerwithus" color="#34D399">
                  Partner With Us
                </WavyLink>
              </button>
              <button className="text-lg font-serif mb-2 hover:text-emerald-700 cursor-pointer">
                <WavyLink to="/aboutus" color="#34D399">
                  About Us
                </WavyLink>
              </button>
              <button className="text-lg font-serif mb-2 hover:text-emerald-700 cursor-pointer">
                <WavyLink to="/help" color="#34D399">
                  Help
                </WavyLink>
              </button>
              <button className="text-lg font-serif mb-2 hover:text-emerald-700 cursor-pointer">
                <WavyLink to="/login" color="#34D399">
                  Login
                </WavyLink>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
