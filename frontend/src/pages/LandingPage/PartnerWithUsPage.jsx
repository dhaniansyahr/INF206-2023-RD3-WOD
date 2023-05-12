// Component
import Navbar from "../../components/LandingPage/Navbar";
import { WavyLink } from "react-wavy-transitions";

// Image
import bgImage from "../../assets/images/LandingPage/8.jpg";

// Icon
import DriverIcon from "../../atom/LandingPage/DriverIcon";
import DokumenIcon from "../../atom/LandingPage/DokumenIcon";
import KendaraanIcon from "../../atom/LandingPage/KendaraanIcon";

const PartnerWithUsPage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="md:w-full md:h-[40rem] md:flex"
        style={{
          backgroundImage: `url(${bgImage})`,
          height: "800px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full flex flex-col gap-8 items-start justify-center mx-5 md:mx-60">
          <div className="flex flex-col gap2">
            <div>
              <h1 className="text-white text-2xl md:text-4xl font-serif font-bold italic text-left">
                Tertarik Menjadi Bagian <br /> Dari Kami?
              </h1>
            </div>
            <div>
              <h1 className=" text-base md:text-xl text-left text-white font-serif font-medium">
                Cari Tahu Persyaratan dan Cara Daftarnya Disini.
              </h1>
            </div>
          </div>
          <div>
            <WavyLink to="/signup-driver" color="#065F46">
              <button className="bg-emerald-800 hover:bg-emerald-600 w-[15rem] h-[3rem] text-white hover:text-black font-medium italic rounded-full text-base">
                Daftar Sekarang
              </button>
            </WavyLink>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-emerald-800 flex flex-col gap-10 items-center justify-center">
        <div className="mt-10 md:mt-10">
          <h1 className="text-2xl md:text-6xl font-bold font-serif text-black">
            Persyaratan Menjadi Mitra Kami
          </h1>
        </div>
        <div className=" w-full h-full flex flex-col gap-20 items-center justify-center md:p-20 p-10">
          <div className="bg-white opacity-80 w-fit md:w-full h-fit md:h-[25rem] flex flex-col gap-2 p-5 rounded-xl">
            <DriverIcon />
            <div className=" w-full h-full">
              <h1 className="text-xl md:text-4xl font-semibold font-serif text-black">
                Mitra
              </h1>
              <div className="md:mx-10 mx-5 w-full px-5">
                <li className="text-base md:text-2xl font-serif font-medium md:leading-10 text-black">
                  Warga negara Indonesia
                </li>
                <li className="text-base font-serif md:text-2xl font-medium md:leading-10 text-black">
                  Umur minimum 18 tahun dan maksimum 65 tahun pada saat
                  pendaftaran
                </li>
              </div>
            </div>
          </div>
          <div className="bg-white opacity-80 w-fit md:w-full h-fit md:h-[25rem] flex flex-col gap-2 p-5 rounded-xl">
            <DokumenIcon />
            <div className=" w-full h-full">
              <h1 className="text-xl md:text-4xl font-semibold font-serif text-black">
                Dokumen
              </h1>
              <div className="md:mx-10 mx-5 w-full px-5">
                <li className="text-base md:text-2xl font-serif font-medium text-black">
                  e-KTP Asli
                </li>
                <li className="text-base md:text-2xl font-serif font-medium text-black">
                  SIM C / D Asli (dalam masa berlaku)
                </li>
                <li className="text-base md:text-2xl font-serif font-medium text-black">
                  STNK dan SKPD Asli (pajak 5 tahunan dalam masa berlaku)
                </li>
                <li className="text-base md:text-2xl font-serif font-medium text-black">
                  SKCK Asli / Legalisir
                </li>
                <li className="text-base md:text-2xl font-serif font-medium text-black">
                  Rekening bank
                </li>
              </div>
            </div>
          </div>
          <div className="bg-white opacity-80 w-fit md:w-full h-fit md:h-[25rem] flex flex-col gap-2 p-5 rounded-xl">
            <KendaraanIcon />
            <div className=" w-full h-full">
              <h1 className="text-xl md:text-4xl font-semibold font-serif text-black">
                Kendaraan
              </h1>
              <div className="md:mx-10 mx-5 w-full px-5">
                <li className="text-base md:text-2xl font-serif font-medium text-black">
                  Batas maksimal umur kendaraan 8 tahun (dihitung dari tahun
                  pendaftaran)
                </li>
                <li className="text-base md:text-2xl font-serif font-medium text-black">
                  Maksimal CC tidak boleh lebih dari sama dengan 250 cc
                </li>
                <li className="text-base md:text-2xl font-serif font-medium text-black">
                  Kendaraan 4 Tak
                </li>
                <li className="text-base md:text-2xl font-serif font-medium text-black">
                  Bukan kendaraan motor tipe Trail, Sport atau Touring
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUsPage;
