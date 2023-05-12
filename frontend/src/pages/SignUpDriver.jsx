import { WavyLink } from "react-wavy-transitions";
import { useState, useEffect } from "react";
import { useSignupDriver } from "../hooks/useSignup";
import { useDataPemesanan } from "../hooks/useDataPemesanan";

const SignUpDriver = () => {
  const [nama, setNama] = useState("");
  const [tempat_lahir, setTempat_lahir] = useState("");
  const [tanggal_lahir, setTangal_lahir] = useState("");
  const [no_hp, setNo_hp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tempatKerja, setTempatKerja] = useState("");
  const [harga, setHarga] = useState("");
  const [KTP, setKTP] = useState([]);
  const [SIM, setSIM] = useState([]);
  const [STNK, setSTNK] = useState([]);
  const [SKCK, setSKCK] = useState([]);
  const { signUpDriver, error, isLoading } = useSignupDriver();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpDriver(
      nama,
      email,
      password,
      no_hp,
      alamat,
      "driver",
      tempat_lahir,
      tanggal_lahir,
      tempatKerja,
      harga,
      KTP,
      SIM,
      STNK,
      SKCK
    );
    console.log("Berhasil Melakukan Sign Up Driver ", harga, tempatKerja);

    if (!error) {
      setShowModal(true);
    }
  };

  const { dataPemesanan, dispatch } = useDataPemesanan();

  // Fungsi Untuk mem Fetching datas dari DB ke FE
  useEffect(() => {
    const fetchData = async () => {
      // Variable Response Untuk menampung datas dari localhost BE
      const response = await fetch("/api/wod/pemesanan");
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
    <div className="py-1 bg-emerald-800">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-black text-xl font-bold">
                Waste On Delivery
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-slate-100">
            <form onSubmit={handleSubmit}>
              <h1 className="text-black text-sm mt-3 mb-6 font-bold uppercase">
                Informasi Pribadi
              </h1>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nama
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Nama"
                      onChange={(e) => setNama(e.target.value)}
                      value={nama}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Tempat lahir
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Tempat Lahir"
                      onChange={(e) => setTempat_lahir(e.target.value)}
                      value={tempat_lahir}
                    />
                  </div>
                </div>

                <div
                  className="w-full lg:w-6/12 px-4"
                  x-data
                  x-init="flatpickr($refs.datetimewidget, {wrap: true, dateFormat: 'M j, Y'});"
                  x-ref="datetimewidget"
                >
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Tanggal Lahir
                    </label>
                    <input
                      id="datetime"
                      type="date"
                      name="datetime"
                      x-ref="datetime"
                      data-input
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="mm/dd/yyyy"
                      onChange={(e) => setTangal_lahir(e.target.value)}
                      value={tanggal_lahir}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      No. Hp
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="No. Hp"
                      onChange={(e) => setNo_hp(e.target.value)}
                      value={no_hp}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Alamat
                    </label>
                    <textarea
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Alamat"
                      onChange={(e) => setAlamat(e.target.value)}
                      value={alamat}
                    />
                  </div>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-black" />
              <h6 className="text-black text-sm mt-3 mb-6 font-bold uppercase">
                Informasi Akun
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      placeholder="Username"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Konfirmasi Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Konfirmasi Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                    />
                  </div>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-black" />
              <h6 className="text-black text-sm mt-3 mb-6 font-bold uppercase">
                Informasi Kerja
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Tempat Kerja
                    </label>
                    <select
                      className="select w-full max-w-xs bg-white"
                      onChange={(e) => setTempatKerja(e.target.value)}
                      value={tempatKerja}
                    >
                      {dataPemesanan &&
                        dataPemesanan.map((data) => (
                          <option key={data.namaTempat} value={data.namaTempat}>
                            {data.namaTempat}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Tarif / Harga
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Harga"
                      onChange={(e) => setHarga(e.target.value)}
                      value={harga}
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-black" />

              <h6 className="text-black text-sm mt-3 mb-6 font-bold uppercase">
                Dokumen persyaratan
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      KTP
                    </label>
                    <input
                      type="file"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="KTP"
                      onChange={(e) => setKTP(e.target.value)}
                      value={KTP}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      SIM
                    </label>
                    <input
                      type="file"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="SIM"
                      onChange={(e) => setSIM(e.target.value)}
                      value={SIM}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      STNK
                    </label>
                    <input
                      type="file"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="STNK"
                      onChange={(e) => setSTNK(e.target.value)}
                      value={STNK}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      SKCK
                    </label>
                    <input
                      type="file"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="KTP"
                      onChange={(e) => setSKCK(e.target.value)}
                      value={SKCK}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[48px] ml-[32px] sm:text-right">
                <button
                  className="py-3 px-8 bg-green-500 text-green-100 font-bold rounded hover:bg-[#081D45]"
                  disabled={isLoading}
                >
                  Sign Up
                </button>
              </div>
              {showModal && !error ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto md:max-w-3xl max-w-2xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*body*/}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          <WavyLink to="/login">
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
                          </WavyLink>
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
                              Mendaftar Sebagai Mitra Kami &#128591;
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpDriver;
