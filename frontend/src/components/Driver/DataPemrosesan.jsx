const DataPemrosesan = ({ data, handleShowModal }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/user/pemprosesan/" + data.namaUser, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Dikonfirmasi" }),
    });

    const json = await response.json();
    console.log(json);
    if (!response.ok) {
      console.log(json.message);
    }

    if (response.ok) {
      handleShowModal();
    };
  
    return (
      <div class="bg-emerald-800 w-full h-fit p-10 drop-shadow-lg rounded-2xl">
        <h2 class="text-2xl font-bold mb-2 text-white">Dahlia</h2>
        <p class="text-white mb-[8px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          suscipit?
        </p>
        <div className="flex items-center justify-end">
          <button
            className="bg-transparent w-36 rounded-xl h-10 font-poppins font-medium text-white hover:text-black hover:border-4 hover:border-transparent  hover:bg-emerald-400"
            onClick={handleClick}
          >
            Konfirmasi
          </button>
        </div>
      </div>
    );
  };
  
  export default DataPemrosesan;