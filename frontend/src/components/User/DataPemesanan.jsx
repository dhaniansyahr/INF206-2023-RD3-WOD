import { useAuthContext } from "../../hooks/useAuthContext";

const DataPemesanan = ({ data, handleShowModal }) => {
  const { user } = useAuthContext();
  const handleClick = async (e) => {
    e.preventDefault();

    const pesan = {
      nama: user.nama,
      alamat: user.alamat,
      tempatKerja: data.namaTempat,
    };

    const response = await fetch("/api/user/pesan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pesan),
    });

    const json = await response.json();

    if (!response.ok) {
      console.log(json.message);
    }

    if (response.ok) {
      handleShowModal();
    }
  };

  return (
    <form method="post" onSubmit={handleClick} className=" w-full">
      <div class="bg-white w-full h-fit p-10 drop-shadow-lg rounded-2xl">
        <h2 class="text-2xl font-bold mb-2 text-gray-800">{data.namaTempat}</h2>
        <p class="text-gray-700 mb-[8px]">{data.deskripsiTempat}</p>
        <div className="flex items-center justify-end">
          <button class="bg-emerald-700 w-36 rounded-xl h-10 font-poppins font-medium text-black hover:bg-emerald-400">
            Order Now
          </button>
        </div>
      </div>
    </form>
  );
};

export default DataPemesanan;