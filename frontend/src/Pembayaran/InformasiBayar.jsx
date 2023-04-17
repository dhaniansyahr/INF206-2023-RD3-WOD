import { Link } from "react-router-dom"

export default function Info() {
    return (
        <div class="md:px-[56px] py-[16px] px-auto">
            <div class="bg-white p-[32px] rounded-lg shadow-lg relative">
                <h2 class="text-2xl font-bold mb-2 text-gray-800">Rincian Pembayaran</h2>
                <div class="text-gray-700 mb-[8px]">
                    <p>Nama Driver : Arhan</p>
                    <p>Jadwal Pengambilan Sampah : Senin, Rabu, Jumat</p>
                    <p>Total Pembayaran : Rp.25.000</p>
                    <p className="float-left">Alamat : Jl. T Nyak Arief No. 441, Kopelma Darussalam, Kec. Syiah Kuala, Kota Banda</p>
                    <div className="text-right">
                        <button className="text-gray-500 h-[30px] px-[32px] hover:underline hover:italic">
                            Ganti
                        </button>
                    </div>
                </div>
                <div className="text-right pt-[30px]">
                    <button className="h-[30px] px-[32px] rounded-lg font-bold text-[#000] hover:bg-[#065F46] hover:bg-opacity-50">
                        <Link to="/">COD</Link>
                    </button>
                    <button className="h-[30px] px-[32px] rounded-lg font-bold text-[#000] hover:bg-[#065F46] hover:bg-opacity-50">
                        <Link to="/">Cashless</Link>
                    </button>
                </div>
        </div>
    </div>
    )
}