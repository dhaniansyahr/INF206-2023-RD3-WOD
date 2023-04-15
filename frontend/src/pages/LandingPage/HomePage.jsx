// Component
import Navbar from "../../components/LandingPage/Navbar";
import ImageSlider from "../../components/LandingPage/ImageSlider";

// Image
import image1 from "../../assets/images/LandingPage/1.jpg";

// Icon
import SecurityIcon from "../../atom/LandingPage/SecurityIcon";
import MapsIcon from "../../atom/LandingPage/MapsIcon";
import JadwalIcon from "../../atom/LandingPage/JadwalIcon";
import AmanIcon from "../../atom/LandingPage/AmanIcon";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="md:w-full md:h-[40rem] md:flex"
        style={{
          backgroundImage: `url(${image1})`,
          height: "800px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="md:absolute">
          <div className="md:flex">
            <div className="md:w-[30rem] md:h-[70rem] md:bg-white md:opacity-40 md:flex md:items-center md:justify-center">
              <div className="flex flex-col items-center justify-center h-[66.70rem] w-[20rem]">
                <div className="flex flex-col gap-8">
                  <h1 className="md:text-4xl text-xl font-bold text-white md:text-black italic font-serif">
                    Sampah Hilang <br /> Hati Senang.
                  </h1>
                  <div>
                    <h1 className="md:text-xl text-base font-medium font-serif text-white md:text-black">
                      Someone. Cendikiawan
                    </h1>
                    <h1 className="mdtext-xl text-base font-bold font-serif text-white md:text-black">
                      #BahagiaTanpaSampah
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:border-t-[40rem] md:border-l-[20rem] md:border-b-[30rem] md:border-solid md:border-t-transparent md:border-b-transparent border-l-white opacity-40"></div>
          </div>
        </div>
      </div>
      <ImageSlider />
      <div className="bg-emerald-800 w-full h-screen flex flex-col gap-5 pt-32">
        <h1 className="text-center md:text-6xl font-serif font-bold text-black text-3xl">
          Kenapa WOD?
        </h1>
        <div className="flex flex-col md:flex-row gap-16 md:gap-60 items-center justify-center w-full h-full">
          <div className="flex flex-col gap-16 md:gap-56">
            <div className="bg-white opacity-80 w-80 md:w-[40rem] h-40 md:h-[20rem] rounded-xl flex flex-col gap-4 md:gap-8 items-center justify-center">
              <SecurityIcon />
              <h1 className=" text-lg md:text-2xl font-serif font-semibold">
                Sampah Anda Akan Aman
              </h1>
            </div>
            <div className="bg-white opacity-80 w-80 md:w-[40rem] h-40 md:h-[20rem] rounded-xl flex flex-col gap-4 md:gap-8 items-center justify-center">
              <MapsIcon />
              <h1 className=" text-lg md:text-2xl font-serif font-semibold">
                Dapat Di Lacak
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-16 md:gap-56">
            <div className="bg-white w-80 md:w-[40rem] h-40 md:h-[20rem] opacity-80 rounded-xl flex flex-col gap-4 md:gap-8 items-center justify-center">
              <JadwalIcon />
              <h1 className=" text-lg md:text-2xl font-serif font-semibold">
                Terjadwal
              </h1>
            </div>
            <div className="bg-white w-80 md:w-[40rem] h-40 md:h-[20rem] opacity-80 rounded-xl flex flex-col gap-4 md:gap-8 items-center justify-center">
              <AmanIcon />
              <h1 className=" text-lg md:text-2xl font-serif font-semibold">
                Ramah Terhadap Pengguna
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
