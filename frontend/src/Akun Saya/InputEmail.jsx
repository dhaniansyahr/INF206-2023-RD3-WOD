export default function InputEmail() {
  return (
    <div className="mb-5">
      <label for="name" className="block mb-2 font-bold text-gray-600">
        Email
      </label>
      <div className="flex items-center ">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Email"
          className="border border-gray-300 shadow p-3 w-9/12 rounded bg-white text-[#000]"
        />
        <div className="ml-4">
          <button className="text-gray-500 hover:underline hover:italic">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
