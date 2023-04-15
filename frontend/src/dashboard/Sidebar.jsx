import BackHome from "./BackHome";
import Menu from "./Menu";
import Profile from "./Profile";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Sidebar() {
  return (
    <div className="bg-[#FFFFFF] h-screen">
      <div className="drawer drawer-mobile">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle w-50"
        />
        <div className="drawer-content w-20 h-20 flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="drawer-button lg:hidden wap swap-rotate"
          >
            <GiHamburgerMenu size={20} className="fill-[#065f46]" />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="menu p-[10px] w-[256px] h-screen text-base-content bg-[#065F46] ">
            <h1 className="h-[80px] flex justify-center items-center text-[#fff] text-[24px] font-semibold hover:text-[#00C78A]">
              Waste On Delivery
            </h1>
            <Profile />
            <Menu />
            <BackHome />
          </div>
        </div>
      </div>
    </div>
  );
}
