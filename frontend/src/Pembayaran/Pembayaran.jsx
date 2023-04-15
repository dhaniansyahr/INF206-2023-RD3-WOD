import { Link } from "react-router-dom"
import Sidebar from "../dashboard/Sidebar"

export default function Pembayaran() {
    return (
        <div>
            <div className="text-black bg-white md:flex flex-row">
                <div>
                    <Sidebar />
                </div>
                <div className="grid grid-flow-row m-28 px-36">
                    <div>
                        <h1 className="font-bold text-2xl">W - Coin : 1000W</h1>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl">Bank Sampah USK</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <button className="h-10 px-14 m-2 rounded-md float-right font-bold hover:bg-[#065F46] hover:bg-opacity-50">
                            <Link to="/bayar">Bayar</Link>
                        </button>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl">TPA Kp. Jawa</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <button className="h-10 px-14 m-2 rounded-md float-right font-bold hover:bg-[#065F46] hover:bg-opacity-50">
                            <Link to="/bayar">Bayar</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
  } 