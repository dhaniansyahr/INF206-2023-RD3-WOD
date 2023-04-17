import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BackHome() {
  return (
    <div className="relative bottom-[120px] h-[80px]  text-white rotate-90 w-[100px] flex align-center w-30">
      <button className="font-light text-[10px] hover:text-[#00C78A]">
        <Link to="/Pemesanan">
          <FaArrowLeft className="relative right-[20px] top-[15px] text-white flex-initial w-30 -rotate-90 hover:text-[#00C78A]" />
          Back To Home
        </Link>
      </button>
    </div>
  );
}
