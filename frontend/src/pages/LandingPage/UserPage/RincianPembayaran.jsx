import Sidebar from "../../components/Sidebar";
import { useState } from "react";

const RincianPembayaran = () => {
  const [showModalCod, setShowModalCod] = useState(false);
  // const [showModalCashlesh, setShowModalCashlesh] = useState(false);

  const openModalCod = () => {
    setShowModalCod(true);
    console.log(showModalCod);
  };

  // const openModalCashlesh = () => {
  //   setShowModalCashlesh(true);
  //   console.log(showModalCashlesh);
  // };

  return (
    <div className="flex bg-emerald-800">
      <Sidebar />
      <div className="w-screen h-screen">
        <div className="flex items-center justify-center w-full h-full p-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <h1 className="text-black font-poppins text-lg md:text-4xl font-medium text-center ">
                Rincian pembayaran
              </h1>
              <h1 className=" text-black font-poppins text-sm md:text-xl">
                Nama Driver: Arhan
              </h1>
              <h1 className=" text-black font-poppins text-sm md:text-xl">
                Jadwal Pengambilan Sampah: <br /> Senin, Rabu, & Jumat
              </h1>
              <h1 className=" text-black font-poppins text-sm md:text-xl">
                Total Pembayaran: Rp. 25.000
              </h1>
              <h1 className=" text-black font-poppins text-sm md:text-xl">
                Alamat : Jl. T Nyak Arief No. 441, Kopelma Darussalam, Kec.Syiah
                Kuala, Kota Banda
              </h1>
            </div>
            <div className="flex flex-row gap-2 justify-end items-end">
              <button
                class="bg-emerald-700 w-28 md:w-36 text-sm md:text-xl rounded-xl h-10 font-poppins font-medium text-black hover:bg-emerald-400"
                onClick={openModalCod}
              >
                COD
              </button>
            </div>
          </div>
        </div>
        {showModalCod ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto md:max-w-3xl max-w-2xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none">
                  {/*body*/}
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button
                      type="button"
                      className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-modal-hide="popup-modal"
                      onClick={() => setShowModalCod(false)}
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
                        Terima Kasih Telah Memesan Pengambilan Sampah Ini <br />
                        Pesanan Akan DIkonfirmasi Oleh Driver Setelah
                        Penjemputan
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
    </div>
  );
};

export default RincianPembayaran;
