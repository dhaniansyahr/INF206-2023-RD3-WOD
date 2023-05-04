const DataInformasiPemesanan = ({ data }) => {
  return (
    <div class="bg-white w-full h-fit p-10 drop-shadow-lg rounded-2xl">
      <h2 class="text-2xl font-bold mb-2 text-gray-800">{data.namaTempat}</h2>
      <p class="text-gray-700 mb-[8px]">{data.deskripsiTempat}</p>
    </div>
  );
};

export default DataInformasiPemesanan;
