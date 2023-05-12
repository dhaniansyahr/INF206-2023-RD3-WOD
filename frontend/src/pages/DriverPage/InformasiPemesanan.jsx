import Sidebar from "../../components/Sidebar";
import DataInformasiPemesanan from "../../components/Driver/DataInformasiPemesanan";

const RiwayatPemesananDriver = () => {
  return (
    <div className="bg-white flex">
      <Sidebar />
      <div className="w-screen h-screen overflow-y-scroll">
        <div className="flex flex-col gap-20 items-center justify-center p-10">
          <DataInformasiPemesanan />
        </div>
      </div>
    </div>
  );
};
export default RiwayatPemesananDriver;
