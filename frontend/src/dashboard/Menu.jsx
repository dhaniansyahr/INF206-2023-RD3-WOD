import { Link } from "react-router-dom";
// import BackHome from "./BackHome";

export default function Menu() {
  return (
    <div className="flex justify-end">
      <div className=" mt-[10px] align-center ml-[10px]">
        <div className="relative h-[50px] ">
          <button className="bg-transparent h-full w-full flex items-center decoretion-none transition-all duration-500 ease-linear hover:text-[#081D45] active">
            <Link to="/Pemesanan">
              <h2 className="text-[#fff] text-[12px] font-light hover:text-[#00C78A] whitespace-nowrap">
                Pemesanan
              </h2>
            </Link>
          </button>
        </div>
        <div className="relative h-[50px] ">
          <button className="bg-transparent h-full w-full flex items-center decoretion-none transition-all duration-500 ease-linear hover:text-[#081D45] active">
            <Link to="/AkunSaya">
              <h2 className="text-[#fff] text-[12px] font-light hover:text-[#00C78A] whitespace-nowrap">
                Akun Saya
              </h2>
            </Link>
          </button>
        </div>
        <div className="relative h-[50px] ">
          <button className="bg-transparent h-full w-full flex items-center decoretion-none transition-all duration-500 ease-linear hover:text-[#081D45] active">
            <Link to="/InformasiPemesanan">
              <h2 className="text-[#fff] text-[12px] font-light hover:text-[#00C78A] whitespace-nowrap">
                Informasi Pemesanan
              </h2>
            </Link>
          </button>
        </div>
        <div className="relative h-[50px] ">
          <button className="bg-transparent h-full w-full flex items-center decoretion-none transition-all duration-500 ease-linear hover:text-[#081D45] active">
            <Link to="/">
              <h2 className="text-[#fff] text-[12px] font-light hover:text-[#00C78A] whitespace-nowrap">
                Pembayaran
              </h2>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
