export default function InputUsername() {
  return (
    <div className="mb-5">
      <label for="name" className="block mb-2 font-bold text-gray-600">
        Username
      </label>
      <div className="flex items-center ">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Username"
          className="border border-gray-300 shadow p-3 w-9/12 rounded bg-white text-[#000]"
        />
      </div>
    </div>
  );
}
