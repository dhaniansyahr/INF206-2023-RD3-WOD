import Sidebar from "../../components/Sidebar";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";

const AkunSayaDriver = () => {
  const { user, updateUser } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [no_hp, setNo_hp] = useState("");
  const [alamat, setAlamat] = useState("");

  const [showModalEmail, setShowModalEmail] = useState(false);
  const [showModalPassword, setShowModalPassword] = useState(false);
  const [showModalNo_hp, setShowModalNo_hp] = useState(false);
  const [showModalAlamat, setShowModalAlamat] = useState(false);

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    console.log(user.id, email);

    try {
      const response = await fetch("api/user/" + user.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
      const updatedUser = await response.json();
      updateUser(updatedUser);
      console.log("User updated", updatedUser);
      setShowModalEmail(true);
    } catch (err) {
      console.error(err);
    }
  };
  const handleSubmitPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("api/user/" + user.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: password }),
      });
      const updatedUser = await response.json();
      updateUser(updatedUser);
      console.log("User updated", updatedUser);
      setShowModalPassword(true);
    } catch (err) {
      console.error(err);
    }
  };
  const handleSubmitNo_hp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("api/user/" + user.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ no_hp: no_hp }),
      });
      const updatedUser = await response.json();
      updateUser(updatedUser);
      console.log("User updated", updatedUser);

      setShowModalNo_hp(true);
    } catch (err) {
      console.error(err);
    }
  };
  const handleSubmitAlamat = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("api/user/" + user.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ alamat: alamat }),
      });
      const updatedUser = await response.json();
      updateUser(updatedUser);
      console.log("User updated", updatedUser);

      setShowModalAlamat(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white flex">
      <Sidebar />
      {user && (
        <div className="flex flex-col gap-14 items-center p-8 w-full h-fit">
          <div className="w-full h-fit pr-16">
            <label
              htmlFor="Nama"
              className="text-black font-poppins font-medium text-sm md:text-2xl"
            >
              Nama
            </label>
            <input
              type="text"
              id="disabled-input-2"
              aria-label="disabled input 2"
              className="bg-white border w-full h-fit border-gray-400 text-black text-xs md:text-xl rounded-lg block p-2.5 cursor-not-allowed font-poppins"
              value={user.nama}
              disabled
              readOnly
            />
          </div>
          <div className="w-full h-fit">
            <form onSubmit={handleSubmitEmail}>
              <label
                htmlFor="Email"
                className="text-black font-poppins font-medium text-sm md:text-2xl"
              >
                Email
              </label>
              <div className="flex w-full flex-row gap-5">
                <input
                  className="relative bg-white border border-gray-400 text-black text-xs md:text-xl rounded-lg w-full h-fit p-2.5 font-poppins"
                  type="email"
                  placeholder={user.email}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <button className="text-xs text-black hover:text-emerald-400 md:text-xl">
                  Update
                </button>
              </div>
            </form>
          </div>
          <div className="w-full h-fit">
            <form onSubmit={handleSubmitPassword}>
              <label
                htmlFor="Password"
                className="text-black font-poppins font-medium text-sm md:text-2xl"
              >
                Password
              </label>
              <div className="flex w-full flex-row gap-5">
                <input
                  type="password"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className="bg-white border border-gray-400 text-black text-xs md:text-xl rounded-lg w-full h-fit p-2.5 font-poppins"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button className="text-xs text-black hover:text-emerald-400 md:text-xl">
                  Update
                </button>
              </div>
            </form>
          </div>
          <div className="w-full h-fit">
            <form onSubmit={handleSubmitNo_hp}>
              <label
                htmlFor="No. Hp"
                className="text-black font-poppins font-medium text-sm md:text-2xl"
              >
                No. Hp
              </label>
              <div className="flex w-full flex-row gap-5">
                <input
                  type="text"
                  placeholder={user.no_hp}
                  className="bg-white border border-gray-400 text-black text-xs md:text-xl rounded-lg block w-full h-fit p-2.5 cursor-not-allowed font-poppins"
                  onChange={(e) => setNo_hp(e.target.value)}
                  value={no_hp}
                />
                <button className="text-xs text-black hover:text-emerald-400 md:text-xl">
                  Update
                </button>
              </div>
            </form>
          </div>
          <div className="w-full h-fit">
            <form onSubmit={handleSubmitAlamat}>
              <label
                htmlFor="Alamat"
                className="text-black font-poppins font-medium text-sm md:text-2xl"
              >
                Alamat
              </label>
              <div className="flex w-full flex-row gap-5">
                <textarea
                  id="message"
                  rows="4"
                  placeholder={user.alamat}
                  className="bg-white border border-gray-400 text-black text-xs md:text-xl rounded-lg block w-full h-fit p-2.5 cursor-not-allowed font-poppins"
                  onChange={(e) => setAlamat(e.target.value)}
                  value={alamat}
                ></textarea>
                <button className="text-xs text-black hover:text-emerald-400 md:text-xl">
                  Update
                </button>
              </div>
            </form>
          </div>
          {showModalEmail ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto md:max-w-3xl max-w-2xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*body*/}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-hide="popup-modal"
                        onClick={() => setShowModalEmail(false)}
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
                          Email Berhasil Di Perbaharui!
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : showModalPassword ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto md:max-w-3xl max-w-2xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*body*/}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-hide="popup-modal"
                        onClick={() => setShowModalPassword(false)}
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
                          Password Berhasil Di Perbaharui!
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : showModalNo_hp ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto md:max-w-3xl max-w-2xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*body*/}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-hide="popup-modal"
                        onClick={() => setShowModalNo_hp(false)}
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
                          No. Hp Berhasil Di Perbaharui!
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : showModalAlamat ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto md:max-w-3xl max-w-2xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*body*/}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-hide="popup-modal"
                        onClick={() => setShowModalAlamat(false)}
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
                          Alaamt Berhasil Di Perbaharui!
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default AkunSayaDriver;
