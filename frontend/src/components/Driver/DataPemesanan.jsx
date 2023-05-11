const DataPemesanan = ({ data, handleShowModal }) => {
  const handleClick = () => {
    handleShowModal();
  };

  return (
    <div class="bg-white w-full h-fit p-10 drop-shadow-lg rounded-2xl">
      <h2 class="text-2xl font-bold mb-2 text-gray-800">Dahlia</h2>
      <p class="text-gray-700 mb-[8px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
        suscipit?
      </p>
      <div className="flex items-center justify-end">
        <button
          class="bg-emerald-700 w-36 rounded-xl h-10 font-poppins font-medium text-white hover:bg-emerald-400 hover:text-black"
          onClick={handleClick}
        >
          Terima
        </button>
      </div>
    </div>
  );
};

export default DataPemesanan;
