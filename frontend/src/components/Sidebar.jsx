import profileImage from "../assets/images/profile.jpg";
import { WavyLink } from "react-wavy-transitions";

import { BsArrowLeftShort } from "react-icons/bs";
import { useState, useEffect } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const { user } = useAuthContext();
  const { logout } = useLogout();
  const back = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    logout();
    back("/login");
  };

  return (
    <div
      className={`${
        screenSize < 768
          ? "w-16 h-screen"
          : "w-fit h-screen border-r-2 border-black"
      }`}
    >
      {user && (
        <div>
          {screenSize < 768 ? ( // add an HiMenu icon if screen width is less than md
            <div className="w-full h-fit flex items-end justify-center pt-5 duration-500 overflow-visible">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <IoMenuOutline
                  size={20}
                  color="black"
                  className={`duration-500 ${isMenuOpen && "hidden"}`}
                />
              </button>
            </div>
          ) : (
            <>
              <div className="w-fit h-fit flex items-start justify-center p-10">
                <h1 className="text-left text-2xl text-black font-bold font-poppins border-b-2 border-black">
                  Waste On Delivery
                </h1>
              </div>
              <div className="w-fit h-fit flex flex-row gap-5 items-center justify-center p-10">
                <div className="avatar">
                  <div className="w-20 rounded-full">
                    <img src={profileImage} alt="ProfileImage" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <h1 className=" text-black font-poppins font-medium text-xl">
                    {user.nama}
                  </h1>
                </div>
              </div>
              {user.role === "user" ? (
                <div className="h-full flex items-center justify-center p-10">
                  <div className="flex flex-col justify-center items-center h-full w-fit gap-9">
                    <div className="pb-5">
                      <BsArrowLeftShort size={20} color="black" />
                    </div>
                    <div className="rotate-90">
                      <WavyLink to="/home" color="#065F46">
                        <button className=" text-base text-black font-medium font-poppins">
                          Back to Home
                        </button>
                      </WavyLink>
                    </div>
                  </div>
                  <div className="w-fit h-full flex flex-col gap-5 items-start justify-center">
                    <div>
                      <WavyLink to="/pemesanan" color="#ffffff">
                        <button className="text-lg text-black font-medium font-poppins">
                          Pemesanan
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <WavyLink to="/akun-saya" color="#065F46">
                        <button className="text-lg text-black font-medium font-poppins">
                          Akun Saya
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <WavyLink to="/informasi-pemesanan" color="#ffffff">
                        <button className="text-lg text-left text-black font-medium font-poppins">
                          Informasi <br /> Pemesanan
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <WavyLink to="/pembayaran" color="#065F46">
                        <button className="text-lg text-black font-medium font-poppins">
                          Pembayaran
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <button
                        className="text-lg text-black font-medium font-poppins"
                        onClick={handleClick}
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : user.role === "admin" ? (
                <div className="h-full flex items-center justify-center p-10">
                  <div className="flex flex-col justify-center items-center h-full w-fit gap-9">
                    <div className="pb-5">
                      <BsArrowLeftShort size={20} color="black" />
                    </div>
                    <div className="rotate-90">
                      <WavyLink to="/home" color="#065F46">
                        <button className=" text-base text-black font-medium font-poppins">
                          Back to Home
                        </button>
                      </WavyLink>
                    </div>
                  </div>
                  <div className="w-fit h-full flex flex-col gap-5 items-start justify-center">
                    <div>
                      <WavyLink to="/dashboard" color="#ffffff">
                        <button className="text-lg text-black font-medium font-poppins">
                          Dashboard
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <button
                        className="text-lg text-black font-medium font-poppins"
                        onClick={handleClick}
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : user.role === "driver" ? (
                <div className="h-full flex items-center justify-center p-10">
                  <div className="flex flex-col justify-center items-center h-full w-fit gap-9">
                    <div className="pb-5">
                      <BsArrowLeftShort size={20} color="black" />
                    </div>
                    <div className="rotate-90">
                      <WavyLink to="/home" color="#065F46">
                        <button className=" text-base text-black font-medium font-poppins">
                          Back to Home
                        </button>
                      </WavyLink>
                    </div>
                  </div>
                  <div className="w-fit h-full flex flex-col gap-5 items-start justify-center">
                    <div>
                      <WavyLink to="/pemesanan-driver" color="#ffffff">
                        <button className="text-lg text-black font-medium font-poppins">
                          Pemesanan
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <WavyLink to="/pemrosesan-driver" color="#065F46">
                        <button className="text-lg text-black font-medium font-poppins">
                          Pemrosesan
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <WavyLink to="/riwayat-driver" color="#065F46">
                        <button className="text-lg text-black font-medium font-poppins">
                          Riwayat
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <WavyLink to="/akunSaya-driver" color="#ffffff">
                        <button className="text-lg text-black font-medium font-poppins">
                          Akun Saya
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <button
                        className="text-lg text-black font-medium font-poppins"
                        onClick={handleClick}
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          )}
          {isMenuOpen && ( // show the menu if the HiMenu icon is clicked
            <div
              className={`fixed top-0 left-0 w-screen h-screen items-center justify-center z-50 bg-white`}
            >
              <div className="flex items-center justify-end p-5">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <IoClose size={20} color="black" />
                </button>
              </div>
              <div className="w-fit h-fit flex items-start justify-center p-10">
                <h1 className="text-left text-lg text-black font-bold font-poppins border-b-2 border-black">
                  Waste On Delivery
                </h1>
              </div>
              <div className="w-fit h-fit flex flex-row gap-5 items-center justify-center p-10">
                <div className="avatar">
                  <div className="w-14 rounded-full">
                    <img src={profileImage} alt="ProfileImage" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <h1 className=" text-black font-poppins font-medium text-sm">
                    {user.nama}
                  </h1>
                </div>
              </div>
              {user.role === "user" ? (
                <div className="h-full flex items-center justify-center p-10">
                  <div className="flex flex-col justify-center items-center h-full w-fit gap-9">
                    <div className="pb-5">
                      <BsArrowLeftShort size={20} color="black" />
                    </div>
                    <div className="rotate-90">
                      <WavyLink to="/home" color="#065F46">
                        <button className=" text-base text-black font-medium font-poppins">
                          Back to Home
                        </button>
                      </WavyLink>
                    </div>
                  </div>
                  <div className="w-fit h-full flex flex-col gap-5 items-start justify-center">
                    <div>
                      <WavyLink to="/pemesanan" color="#ffffff">
                        <button className="text-lg text-black font-medium font-poppins">
                          Pemesanan
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <WavyLink to="/akun-saya" color="#065F46">
                        <button className="text-lg text-black font-medium font-poppins">
                          Akun Saya
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <WavyLink to="/informasi-pemesanan" color="#ffffff">
                        <button className="text-lg text-left text-black font-medium font-poppins">
                          Informasi <br /> Pemesanan
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <WavyLink to="/pembayaran" color="#065F46">
                        <button className="text-lg text-black font-medium font-poppins">
                          Pembayaran
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <button
                        className="text-lg text-black font-medium font-poppins"
                        onClick={handleClick}
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : user.role === "admin" ? (
                <div className="h-full flex items-center justify-center p-10">
                  <div className="flex flex-col md:justify-center justify-start items-center h-full w-fit gap-9">
                    <div className="pb-5">
                      <BsArrowLeftShort size={20} color="black" />
                    </div>
                    <div className="rotate-90">
                      <WavyLink to="/home" color="#065F46">
                        <button className=" text-base text-black font-medium font-poppins">
                          Back to Home
                        </button>
                      </WavyLink>
                    </div>
                  </div>
                  <div className="w-fit h-full flex flex-col mt-20 gap-5 items-start justify-start md:justify-center">
                    <div>
                      <WavyLink to="/dashboard" color="#ffffff">
                        <button className="text-lg text-black font-medium font-poppins">
                          Dashboard
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <button
                        className="text-lg text-black font-medium font-poppins"
                        onClick={handleClick}
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : user.role === "driver" ? (
                <div className="h-full flex items-center justify-center p-10">
                  <div className="flex flex-col justify-center items-center h-full w-fit gap-9">
                    <div className="pb-5">
                      <BsArrowLeftShort size={20} color="black" />
                    </div>
                    <div className="rotate-90">
                      <WavyLink to="/home" color="#065F46">
                        <button className=" text-base text-black font-medium font-poppins">
                          Back to Home
                        </button>
                      </WavyLink>
                    </div>
                  </div>
                  <div className="w-fit h-full flex flex-col gap-5 items-start justify-center">
                    <div>
                      <WavyLink to="/pemesanan-driver" color="#ffffff">
                        <button className="text-lg text-black font-medium font-poppins">
                          Pemesanan
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <WavyLink to="/pemrosesan-driver" color="#ffffff">
                        <button className="text-lg text-black font-medium font-poppins">
                          Pemrosesan
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <WavyLink to="/riwayat-driver" color="#ffffff">
                        <button className="text-lg text-black font-medium font-poppins">
                          Riwayat
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <WavyLink to="/akunSaya-driver" color="#ffffff">
                        <button className="text-lg text-black font-medium font-poppins">
                          Akun Saya
                        </button>
                      </WavyLink>
                    </div>
                    <div>
                      <button
                        className="text-lg text-black font-medium font-poppins"
                        onClick={handleClick}
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      )}
      <div className="w-full h-fit p-5 fixed bottom-0">
        {user && user.role === "driver" ? (
          <div className="flex flex-col gap-5 items-start justify-center">
            <h1 className="text-black font-poppins font-medium text-xl">
              Status : Online
            </h1>
            <h1 className="text-black font-poppins font-medium text-xl">
              Lokasi : {user.tempatKerja}
            </h1>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Sidebar;
