import Sidebar from "../../components/Sidebar";
import CardInformasi from "../../components/User/ComponentInformasi.";

const Informasi = () => {
  return (
    <div className="flex flex-row bg-[#fff]">
      <div className="md:basis-1/5 ">
        <Sidebar />
      </div>
      <div className="md:basis-4/5 flex justify-center pr-[50px] md:pl-[45px]">
        <CardInformasi />
      </div>
    </div>
  );
};

export default Informasi;
