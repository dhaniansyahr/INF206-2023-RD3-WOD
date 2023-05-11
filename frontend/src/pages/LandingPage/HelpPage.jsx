// Component
import Navbar from "../../components/LandingPage/Navbar";

import { useEffect, useState } from "react";
import { useHelpDataContext } from "../../hooks/useHelpDataContext";

// Image
import bgimage1 from "../../assets/images/LandingPage/14.jpg";

// Icon
// import { HiOutlineSearch } from "react-icons/hi";
import CardRename from "../../components/LandingPage/CardRename";

const HelpPage = () => {
  const { helpData, dispatch } = useHelpDataContext();

  // Fungsi Untuk mem Fetching datas dari DB ke FE
  useEffect(() => {
    const fetchData = async () => {
      // Variable Response Untuk menampung datas dari localhost BE
      const response = await fetch("/api/wod/help/");
      // Kemudian di Ubah menjadi Data JSON
      const json = await response.json();

      // Jika REsponse OK maka datas akan di set
      if (response.ok) {
        dispatch({ type: "SET_HELPDATA", payload: json });
      }
    };

    // Call FUnction Fetch Data
    fetchData();
    // eslint-disable-next-line
  }, []);

  const [searchInput, setSearchInput] = new useState(helpData);

  const handleChange = async (e) => {
    const query = e.target.value;

    // Create Copy of Data
    var updateData = [...helpData];
    console.log(updateData);

    updateData = updateData.filter((data) => {
      return data.title.match(query);
    });

    setSearchInput(updateData);
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${bgimage1})`,
          height: "500px",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
          <div>
            <h1 className="text-2xl text-white font-medium font-serif">
              Butuh Bantuan?
            </h1>
          </div>
          <div className="form-control">
            <div className="input-group w-screen px-20 md:w-[70rem]">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered bg-white w-full"
                onChange={handleChange}
              />
              <button className="btn-square bg-white border-none flex items-center justify-center hover:bg-emerald-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:h-[41rem] flex-col md:flex-row gap-10 md:gap-60 md:items-stretch md:flex-wrap p-10 md:p-32 items-center justify-center bg-emerald-800">
        {searchInput &&
          searchInput.map((helpData) => (
            <CardRename key={helpData._id} helpData={helpData} />
          ))}
      </div>
    </div>
  );
};

export default HelpPage;
