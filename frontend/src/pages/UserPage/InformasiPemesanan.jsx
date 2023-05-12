import Sidebar from "../../components/Sidebar";

import DataInformasiPemesanan from "../../components/User/DataInformasiPemesanan";

import { useEffect } from "react";
import { useDataPemesanan } from "../../hooks/useDataPemesanan";

const Informasi = () => {
  const { dataPemesanan, dispatch } = useDataPemesanan();

  const getDataLocalStorage = () => {
    const data = localStorage.getItem("user");
    const dataParse = JSON.parse(data);
    return dataParse;
  };

  // Fungsi Untuk mem Fetching datas dari DB ke FE
  useEffect(() => {
    const fetchData = async () => {
      // Variable Response Untuk menampung datas dari localhost BE
      const response = await fetch(
        "/api/user/pesan-nama/" + getDataLocalStorage().nama
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
    <div className="flex flex-row bg-[#fff]">
      <div className="md:basis-1/5 ">
        <Sidebar />
      </div>
      <div className="w-screen h-screen overflow-y-scroll">
        <div className="flex flex-col gap-10 items-center justify-center p-10">
          {dataPemesanan &&
            dataPemesanan.map((data) => (
              <DataInformasiPemesanan key={data._id} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Informasi;
