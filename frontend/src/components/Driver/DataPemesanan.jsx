import { useState } from "react";

const DataPemesanan = ({ data, handleShowModal, user }) => {
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataBayar = {
      namaTempat: user.tempatKerja,
      namaDriver: user.nama,
      harga: user.harga,
      namaUser: data.nama,
      alamatUser: data.alamat,
    };
    console.log(dataBayar);

    const response = await fetch("/api/user/pembayaran", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataBayar),
    });

    const response2 = await fetch("/api/user/pesan/" + data.nama, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: true }),
    });

    const json = await response.json();
    const json2 = await response.json();
    console.log(json);
    console.log(json2);

    if (!response.ok || !response2.ok) {
      setError(json.message);
    }

    if (response.ok || response2.ok) {
      setError(null);
      handleShowModal();
    }
  };

  return (
    <div className="bg-white w-full h-fit p-10 drop-shadow-lg rounded-2xl">
      <form method="post" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{data.nama}</h2>
        <h1 className="text-gray-700 mb-[8px]">Alamt : {data.alamat}</h1>
        <h1 className="text-gray-700 mb-[8px]">Tarif : {user.harga}</h1>
        <div className="flex items-center justify-end">
          <button className="bg-emerald-700 w-36 rounded-xl h-10 font-poppins font-medium text-white hover:bg-emerald-400 hover:text-black">
            Terima
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
  );
};

export default DataPemesanan;
