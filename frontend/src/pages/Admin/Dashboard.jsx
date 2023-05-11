import React from "react";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";

const Dashboard = () => {
  const [namaTempat, setNamaTempat] = useState("");
  const [deskripsiTempat, setDeskripsiTempat] = useState("");
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { namaTempat, deskripsiTempat };
    console.log(data);

    const response = await fetch("/api/user/pemesanan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      setError(json.message);
    }

    if (response.ok) {
      setNamaTempat("");
      setDeskripsiTempat("");
      setError(null);
      setShowModal(true);
    }
  };
  return (
    <div className="bg-white flex">
      <Sidebar />
      <div className="w-screen h-screen text-center font-poppins text-black text-6xl">
        <form onSubmit={handleSubmit} method="post" className="p-10">
          <h2 className="text-[18px] font-semibold uppercase text-center tracking-widest w-full mb-2.5 text-[#555]">
            Tambah Data Pembuangan Sampah
          </h2>
          <input
            className="relative w-full p-[10px] bg-[#f5f5f5] text-[#333] placeholder-[#333] border-none outline-none my-2 text-[14px] font-light tracking-wide"
            type="text"
            placeholder="Nama Tempat Sampah"
            onChange={(e) => setNamaTempat(e.target.value)}
            value={namaTempat}
          />
          <textarea
            className="relative w-full h-40 p-[10px] bg-[#f5f5f5] text-[#333] placeholder-[#333] border-none outline-none my-2 text-[14px] font-light tracking-wide"
            type="textarea"
            placeholder="Deskripsi"
            onChange={(e) => setDeskripsiTempat(e.target.value)}
            value={deskripsiTempat}
          />
          <div className="flex items-center justify-end w-full">
            <button className="max-w-[100px] bg-[#065f46] text-[#E2F1FF] cursor-pointer text-[14px] font-medium tracking-wide transition duration-500 p-[10px] w-full my-2 hover:bg-white hover:text-emerald-800">
              Tambah Data
            </button>
          </div>
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
      </div>
      {showModal && !error ? (
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
                      Penambahan Berhasil <br /> Data yang anda Tambahkan Telah
                      Di Tambahkan!
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
  );
};

export default Dashboard;
