import { Link } from "react-router-dom"
import Sidebar from "../dashboard/Sidebar";

export default function Bayar() {
    return (
        <div>
            <div className="text-black bg-white md:flex flex-row">
                <div>
                    <Sidebar />
                </div>
                <div className="grid grid-flow-row mx-44 my-56 px-36">
                    <h1 className="font-bold text-3xl">Rincian Pembayaran</h1>
                    <div>
                        <p>Nama Driver : Arhan</p>
                        <p>Jadwal Pengambilan Sampah : Senin, Rabu, Jumat</p>
                        <p>Total Pembayaran : Rp.25.000</p>
                        <p>Alamat : Jl. T Nyak Arief No. 441, Kopelma Darussalam, Kec. Syiah Kuala, Kota Banda</p>
                        <button className="h-10 px-14 m-2 rounded-md float-right font-bold hover:bg-[#065F46] hover:bg-opacity-50">
                            <Link to="/">Ganti</Link>
                        </button>
                    </div>
                    <div className="text-right">
                        <button className="h-10 px-14 m-2 rounded-md font-bold hover:bg-[#065F46] hover:bg-opacity-50">
                            <Link to="/">COD</Link>
                        </button>
                        <button className="h-10 px-14 m-2 rounded-md font-bold hover:bg-[#065F46] hover:bg-opacity-50">
                            <Link to="/">Cashless</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};