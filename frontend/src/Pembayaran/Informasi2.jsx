import { Link } from "react-router-dom"

export default function Info() {
    return (
        <div class="md:px-[56px] py-[16px] px-auto">
            <div class="bg-white p-[32px] rounded-lg shadow-lg relative">
                <h2 class="text-2xl font-bold mb-2 text-gray-800">TPA Kp. Jawa</h2>
                <p class="text-gray-700 mb-[8px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="py-[15px]">
                    <button className="h-[30px] px-[32px] float-right rounded-lg font-bold text-[#000] hover:bg-[#065F46] hover:bg-opacity-50">
                        <Link to="/bayar">Bayar</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}