import Sidebar from "../../components/Sidebar";
import DataPemesanan from "../../components/Driver/DataPemesanan";
import { useDataPemesanan } from "../../hooks/useDataPemesanan.js";

import { useState, useEffect } from "react";

const Pemesanan = () => {
  const getDataLocalStorage = () => {
    const data = localStorage.getItem("user");
    const dataParse = JSON.parse(data);
    return dataParse;
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const { dataPemesanan, dispatch } = useDataPemesanan();
  const [showModal, setShowModal] = useState(false);

  // Fungsi Untuk mem Fetching datas dari DB ke FE
  useEffect(() => {
    const fetchData = async () => {
      // Variable Response Untuk menampung datas dari localhost BE
      const response = await fetch(
        "api/user/pesan/" + getDataLocalStorage().tempatKerja
      );
      // Kemudian di Ubah menjadi Data JSON
      const json = await response.json();

      // Jika REsponse OK maka datas akan di set
      if (response.ok) {
        dispatch({ type: "SET_DATAPEMESANAN", payload: json });
      }
    };

    // Call FUnction Fetch Data
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-white flex">
      <Sidebar />
      <div className="w-screen h-screen overflow-y-scroll">
        <div className="flex flex-col gap-20 items-center justify-center p-10">
          {dataPemesanan &&
            dataPemesanan.map((data) => (
              <DataPemesanan
                user={getDataLocalStorage()}
                data={data}
                handleShowModal={handleShowModal}
              />
            ))}
        </div>
        <div>
          {showModal ? (
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
                          Pesanan atas nama {getDataLocalStorage().nama} sudah
                          dikonfirmasi <br /> Silahkan Tunggu untuk pembayaran.
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
    </div>
  );
};

export default Pemesanan;
