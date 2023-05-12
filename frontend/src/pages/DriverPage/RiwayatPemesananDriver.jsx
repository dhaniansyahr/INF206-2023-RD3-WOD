import Sidebar from "../../components/Sidebar";
import DataRiwayatPemesanan from "../../components/Driver/DataRiwayatPemesanan";
import { useDataPemprosesan } from "../../hooks/useDataPemprosesan";
import { useEffect } from "react";

const RiwayatPemesananDriver = () => {
  const { dataPemprosesan, dispatch } = useDataPemprosesan();

  const getDataLocalStorage = () => {
    const data = localStorage.getItem("user");
    const dataParse = JSON.parse(data);
    return dataParse;
  };

  useEffect(() => {
    const fetchData = async () => {
      const namaDriver = getDataLocalStorage().nama;
      const response = await fetch("/api/user/riwayat-pemesanan/" + namaDriver);
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_DATAPEMPROSESAN", payload: json });
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-emerald-800 flex">
      <Sidebar />
      <div className="w-screen h-screen overflow-y-scroll">
        <div className="flex flex-col gap-20 items-center justify-center p-10">
          {dataPemprosesan &&
            dataPemprosesan.map((data) => (
              <DataRiwayatPemesanan key={data._id} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default RiwayatPemesananDriver;
