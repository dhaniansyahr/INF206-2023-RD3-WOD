import { Link } from "react-router-dom";

import Navbar from "../../components/LandingPage/Navbar";

// Image
import bgimage1 from "../../assets/images/LandingPage/9.jpg";
import bgimage2 from "../../assets/images/LandingPage/10.jpg";
import bgimage3 from "../../assets/images/LandingPage/11.jpg";
import bgimage4 from "../../assets/images/LandingPage/12.jpg";
import bgimage5 from "../../assets/images/LandingPage/13.jpg";

// Icon
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

const AboutUsPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div
        className="w-screen md:h-full md:first-letter:flex"
        style={{
          backgroundImage: `url(${bgimage1})`,
          height: "600px",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full flex flex-col gap-8 items-center md:items-start md:p-10 justify-center">
          <div>
            <h1 className="text-2xl md:text-6xl font-bold font-serif text-white">
              WOD UNTUK SEMUA
            </h1>
          </div>
          <div>
            <h1 className="text-lg md:text-2xl font-serif font-medium text-white text-center md:text-left">
              Sebuah Cara Simple untuk Memesan Pengambilan Sampah
              <br />
              Secara Online Tanpa Harus Meninggalkan Rumah.
            </h1>
          </div>
        </div>
      </div>
      <div
        className="w-screen md:h-full md:first-letter:flex"
        style={{
          backgroundImage: `url(${bgimage2})`,
          height: "600px",
          backgroundSize: "100% 100%",
          backgroundPosition: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-screen h-full flex flex-col gap-8 items-center justify-center">
          <div>
            <h1 className="text-2xl md:text-6xl text-center font-bold font-serif text-black">
              Kita Dapat Menghilangkan Bau <br /> Sampah yang Ada disekitar
              Kamu.
            </h1>
          </div>
        </div>
      </div>
      <div className=" bg-emerald-800 flex flex-col md:flex-row gap-10 justify-center md:justify-between md:px-96 items-center h-[40rem]">
        <div className="flex items-center md:items-start justify-center flex-col gap-10">
          <div>
            <h1 className="text-2xl md:text-4xl md:text-left text-black font-serif font-bold">
              Nilai yang Layak untuk Membantu
            </h1>
          </div>
          <div>
            <h1 className="text-center md:text-left md:text-xl text-black font-medium font-serif">
              Sebuah Nilai yang membuat seseorang merasa untuk diakui dan
              dihargai. Ketika seseorang telah diakui dan dihargai hingga lupa
              dengan sekitarnya. <br /> WOD membantu orang untuk membangun nilai
              tersebut dan tidak melupakan orang yang ada di sekitarnya.
            </h1>
          </div>
        </div>
        <div>
          <div
            className="rounded-lg w-[150px] h-[150px] md:w-[300px] md:h-[300px]"
            style={{
              backgroundImage: `url(${bgimage3})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="absolute rounded-lg m-[20px] md:m-[40px] w-[150px] h-[150px] md:w-[300px] md:h-[300px]"
              style={{
                backgroundImage: `url(${bgimage3})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: "30%",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col md:flex-row md:gap-32 gap-10 justify-center md:justify-between md:px-96 items-center h-[40rem]">
        <div>
          <div
            className="rounded-lg w-[150px] h-[150px] md:w-[300px] md:h-[300px]"
            style={{
              backgroundImage: `url(${bgimage4})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="absolute rounded-lg m-[20px] md:m-[40px] w-[150px] h-[150px] md:w-[300px] md:h-[300px]"
              style={{
                backgroundImage: `url(${bgimage4})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: "30%",
              }}
            ></div>
          </div>
        </div>
        <div className="flex items-center w-fit md:items-start justify-center flex-col gap-10">
          <div>
            <h1 className="text-2xl md:text-4xl md:text-left text-center text-black font-serif font-bold">
              Perubahan Besar dimulai dari Potongan Ide
            </h1>
          </div>
          <div>
            <h1 className="text-center md:text-left md:text-xl text-black font-medium font-serif">
              Cara terbaik untuk menemukan suatu yang inovatif adalah dengan
              melihat potongan - potongan ide yang di kembangkan menjadi sebuah
              potensi yang besar. Kemudian memberikan kebebasan terhadap orang -
              orang untuk menuangkan inspirasinya. <br /> Disaat Inspirasi yang
              telah dituangkan tersebut terkumpul, kita dapat mengkombinasikan
              inspirasi - inspirasi tersebut.
            </h1>
          </div>
        </div>
      </div>
      <div
        className="w-screen md:h-full md:first-letter:flex"
        style={{
          backgroundImage: `url(${bgimage5})`,
          height: "600px",
          backgroundSize: "100% 100%",
          backgroundPosition: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-screen h-full flex flex-col gap-8 items-center justify-center">
          <div>
            <h1 className="text-xl md:text-4xl text-center font-bold font-serif text-white">
              Our Mission
            </h1>
          </div>
          <div>
            <h1 className="text-2xl md:text-6xl text-center font-bold font-serif text-white">
              Membuat Sampah Tidak Berserakan
            </h1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-screen h-16 bg-emerald-800 border-t-2 border-black">
        <div className="mx-10">
          <h1 className="text-xl md:text-2xl font-serif font-bold text-black">
            WOD (Waste On Delivery)
          </h1>
        </div>
        <div className=" h-full flex flex-row gap-2 items-center justify-end mx-5 md:mx-20">
          <button>
            <Link
              to="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook size={25} />
            </Link>
          </button>
          <button>
            <Link
              to="https://www.instagram.com/riyadhus.sdq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter size={25} />
            </Link>
          </button>
          <button>
            <Link
              to="https://www.instagram.com/r.dhaniansyah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram size={25} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
