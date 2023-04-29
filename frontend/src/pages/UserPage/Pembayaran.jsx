import Sidebar from "../../components/Sidebar";

import DataPembayaran from "../../components/User/DataPembayaran";
import KoinPembayaran from "../../components/User/KoinPembayaran";

import { useEffect } from "react";
import { useDataPembayaran } from "../../hooks/useDataPembayaran";

const Pembayaran = () => {
  const { dataPembayaran, dispatch } = useDataPembayaran();

  // Fungsi Untuk mem Fetching datas dari DB ke FE
  useEffect(() => {
    const fetchData = async () => {
      // Variable Response Untuk menampung datas dari localhost BE
      const response = await fetch("/api/wod/pembayaran");
      // Kemudian di Ubah menjadi Data JSON
      const json = await response.json();

      // Jika Response OK maka datas akan di set
      if (response.ok) {
        dispatch({ type: "SET_DATAPEMBAYARAN", payload: json });
      }
    };

    // Call FUnction Fetch Data
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-emerald-800 flex">
      <Sidebar />
      <div className="w-screen h-screen">
        <KoinPembayaran />
        <div className="flex flex-col gap-10 items-center justify-center px-5">
          {dataPembayaran &&
            dataPembayaran.map((data) => (
              <DataPembayaran key={data._id} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Pembayaran;