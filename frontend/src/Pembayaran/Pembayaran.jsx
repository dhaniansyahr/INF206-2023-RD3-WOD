import Koin from "./Koin";
import Informasi1 from "./Informasi1";
import Informasi2 from "./Informasi2";
import BackHome from "../dashboard/BackHome";
import Menu from "../dashboard/Menu";
import Profile from "../dashboard/Profile";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Pembayaran() {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="drawer drawer-mobile">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle w-50"
        />
        <div className="drawer-content w-screen h-screen p-[30px]">
          <label
            htmlFor="my-drawer-2"
            className="drawer-button lg:hidden wap swap-rotate flex align-start justify-start"
          >
            <GiHamburgerMenu size={20} className="fill-[#065f46]" />
          </label>
          <div className="bg-white h-screen md:mr-[256px]">
            <Koin />
            <Informasi1 />
            <Informasi2 />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="menu p-[10px] w-[256px] text-base-content bg-[#065f46]">
            <h1 className="h-[80px] flex justify-center items-center text-[#fff] text-[24px] font-semibold hover:text-[#00C78A]">
              Waste On Delivery
            </h1>
            <Profile className="text-[#000]" />
            <Menu />
            <BackHome />
          </div>
        </div>
      </div>
    </div>
  );
}
