// import { useEffect } from "react";
import { useLogin } from "../hooks/useLogin";
import { useState } from "react";
import { WavyLink } from "react-wavy-transitions";
// import { useNavigate } from "react-router-dom";

// Image
import { Link } from "react-router-dom";
import image1 from "../assets/images/ImageLogin.jpg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  // const changePage = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    console.log(email, password);
    // if (!res) {
    //   changePage("/Pemesanan");
    // }
  };
  return (
    <div className="p-5 w-screen h-screen flex items-center justify-center bg-emerald-800">
      <div className="md:flex w-[800px] h-fit shadow-md overflow-hidden">
        <h2 className="text-center font-bold font-poppins text-4xl text-black md:hidden p-10">
          Waste On Delvery
        </h2>
        <div
          className="md:w-[400px] md:h-[500px] md:visible hidden md:flex md:items-center md:justify-center
          md:text-center md:font-bold md:font-poppins md:text-4xl md:text-black md:p-10"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          Waste On Delvery
        </div>
        <div className="md:w-[400px] h-full md:h-[500px] bg-white opacity-90 px-10">
          <div className="w-full h-[36rem] md:h-[38.5rem] flex flex-col gap-5 items-center justify-center">
            <h1 className="font-poppins text-center md:text-4xl text-2xl text-black">
              Sign In
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 w-full h-fit items-center justify-center"
            >
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full bg-white focus:text-black"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full bg-white focus:text-black"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button
                className="bg-emerald-800 text-white font-poppins h-10 w-full hover:bg-white hover:text-emerald-800"
                disabled={isLoading}
              >
                Login
                {!error && (
                  <WavyLink to="/Pemesanan" color="#065F46"></WavyLink>
                )}
              </button>
            </form>
            <div className="my-2">
              {error && (
                <div className="alert alert-error shadow-lg">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{error}</span>
                  </div>
                </div>
              )}
            </div>
            <h1 className="text-center font-medium font-poppins text-xs text-black bottom-0">
              Belum Memiliki Akun?
              <Link
                to="/signup"
                className="text-left font-medium font-poppins text-xs text-green-800 mx-2"
              >
                Sign Up
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
