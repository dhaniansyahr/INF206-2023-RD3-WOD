const DataRiwayatPemesanan = ({ data }) => {
  return (
    <div class="bg-emerald-800 w-full h-fit p-10 drop-shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-2 text-white">{data.namaUser}</h2>
      <p className="text-white mb-[8px]">Alamat : {data.alamatUser}</p>
      <p className="text-white mb-[8px]">Harga : {data.harga}</p>
      <p className="text-white mb-[8px]">
        Metode Pembayaran : {data.metodePembayaran}
      </p>
    </div>
  );
};
export default DataRiwayatPemesanan;
