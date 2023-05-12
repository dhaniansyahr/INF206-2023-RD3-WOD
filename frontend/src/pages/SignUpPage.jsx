import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "./../hooks/useSignup";
// import ReactModal from "react-modal";

const SignUpPage = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signUp, error, isLoading } = useSignup();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(nama, email, password, "user");
    console.log(nama, email, password);

    if (!error) {
      setShowModal(true);
    }
  };

  return (
    <div className="bg-[#065f46] h-screen flex justify-center items-center p-10 ">
      <div className="relative w-[800px] h-[500px] bg-white shadow-lg overflow-hidden ">
        <div className="absolute top-0 left-0 w-full h-full flex usr signupBx">
          <div className="relative md:w-6/12 w-full h-full bg-white flex justify-center items-center p-10 duration-500 ">
            <form onSubmit={handleSubmit}>
              <h2 className="text-[18px] font-semibold uppercase text-center tracking-widest w-full mb-2.5 text-[#555]">
                Create an account
              </h2>
              <input
                className="relative w-full p-[10px] bg-[#f5f5f5] text-[#333] placeholder-[#333] border-none outline-none my-2 text-[14px] font-light tracking-wide"
                type="text"
                placeholder="Username"
                onChange={(e) => setNama(e.target.value)}
                value={nama}
              />
              <input
                className="relative w-full p-[10px] bg-[#f5f5f5] text-[#333] placeholder-[#333] border-none outline-none my-2 text-[14px] font-light tracking-wide"
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                className="relative w-full p-[10px] bg-[#f5f5f5] text-[#333] placeholder-[#333] border-none outline-none my-2 text-[14px] font-light tracking-wide"
                type="password"
                placeholder="Create Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <input
                className="relative w-full p-[10px] bg-[#f5f5f5] text-[#333] placeholder-[#333] border-none outline-none my-2 text-[14px] font-light tracking-wide"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              <button
                className="max-w-[100px] bg-[#065f46] text-[#E2F1FF] cursor-pointer text-[14px] font-medium tracking-wide transition duration-500 p-[10px] w-full my-2 hover:bg-white hover:text-emerald-800"
                disabled={isLoading}
              >
                Sign Up
              </button>
              {showModal && !error ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto md:max-w-3xl max-w-2xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*body*/}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          <Link to="/login">
                            <button
                              type="button"
                              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                              data-modal-hide="popup-modal"
                              onClick={() => setShowModal(false)}
                            >
                              <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              <span className="sr-only">Close modal</span>
                            </button>
                          </Link>
                          <div className="p-6 text-center">
                            <svg
                              aria-hidden="true"
                              className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                              Registrasi Berhasil <br /> Terima Kasih Telah
                              Mendaftar pada aplikasi Kami &#128591;
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
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
              <p className="relative mt-20px text-[12px] text-[#555] font-light uppercase tracking-wide">
                Apakah kamu sudah memiliki akun?
                <button className="font-semibold mx-3 no-underline uppercase text-[#065f46]">
                  <Link to="/login">Sign In</Link>
                </button>
              </p>
            </form>
          </div>
          <div className="relative w-1/2 h-full bg-[#5c9d8b] imgBx hidden md:block">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
