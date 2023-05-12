import { WavyLink } from "react-wavy-transitions";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";

const DataPembayaran = ({ data }) => {
  const { setData } = useContext(DataContext);

  const handleClick = () => {
    setData(data);
  };
  return (
    <div class=" bg-emerald-800 w-full h-fit p-10 drop-shadow-lg rounded-2xl border border-white">
      <h2 class="text-2xl font-bold mb-2 text-black font-poppins">
        {data.namaTempat}
      </h2>
      <p class=" text-black mb-[8px] font-poppins">
        Driver : {data.namaDriver}
      </p>
      <p class=" text-black mb-[8px] font-poppins">Harga : {data.harga}</p>
      <div className="flex items-center justify-end">
        <WavyLink to={"/rincian-pembayaran"} color="#065F46">
          <button
            class="bg-emerald-700 w-36 rounded-xl h-10 font-poppins font-medium text-black hover:bg-emerald-400"
            onClick={handleClick}
          >
            Bayar
          </button>
        </WavyLink>
      </div>
    </div>
  );
};

export default DataPembayaran;
