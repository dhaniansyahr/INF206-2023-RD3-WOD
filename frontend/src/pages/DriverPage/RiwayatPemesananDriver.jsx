import Sidebar from "../../components/Sidebar";
import DataRiwayatPemesanan from "../../components/Driver/DataRiwayatPemesanan";

const RiwayatPemesananDriver = () => {
  return (
    <div className="bg-emerald-800 flex">
      <Sidebar />
      <div className="w-screen h-screen">
        <div className="flex flex-col gap-20 items-center justify-center p-10">
          <DataRiwayatPemesanan />
        </div>
      </div>
    </div>
  );
};
export default RiwayatPemesananDriver;
