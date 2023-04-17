import { Link } from "react-router-dom";

export default function CardTPAKpJawa() {
  return (
    <div class="md:px-[56px] py-[16px] px-auto">
      <div class="bg-white p-[32px] rounded-lg shadow-lg relative">
        <h2 class="text-2xl font-bold mb-2 text-gray-800">TPA Kp.Jawa</h2>
        <p class="text-gray-700 mb-[8px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button class="float-right mr-[16px] font-medium mb-3 hover:underline hover:italic">
          <Link to="/Pemesanan">Order Now</Link>
        </button>
      </div>
    </div>
  );
}
