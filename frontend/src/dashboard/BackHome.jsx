import { FaArrowLeft } from "react-icons/fa";

export default function BackHome() {
  return (
    <div className="relative bottom-[150px]  h-[80px] ml-[10px] text-white rotate-90 w-[100px] flex-initial w-30">
      <a
        href="/"
        className="ml-[10px] font-light text-[10px] hover:text-[#00C78A]"
      >
        <FaArrowLeft className="relative right-[20px] top-[15px] text-white flex-initial w-30 hover:text-[#00C78A]" />
        Back To Home
      </a>
    </div>
  );
}
