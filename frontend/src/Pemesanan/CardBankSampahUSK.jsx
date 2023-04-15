import { Link } from "react-router-dom";

export default function CardBankSampahUSK() {
  return (
    <div class="lg:px-[56px] py-[16px] px-auto">
      <div class="bg-white p-[40px] rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold mb-2 text-gray-800">Bank sampah USK</h2>
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
