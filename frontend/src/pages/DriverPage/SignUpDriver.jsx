const SignUpDriver = () => {
  return (
    <div class="py-1 bg-emerald-800">
      <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div class="rounded-t bg-white mb-0 px-6 py-6">
            <div class="text-center flex justify-between">
              <h6 class="text-black text-xl font-bold">Waste On Delivery</h6>
            </div>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0 bg-slate-100">
            <form>
              <h6 class="text-black text-sm mt-3 mb-6 font-bold uppercase">
                Informasi Pribadi
              </h6>
              <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-black text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      {" "}
                      Nama awal{" "}
                    </label>
                    <input
                      type="text"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="nama depan"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-black text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      {" "}
                      Nama akhir{" "}
                    </label>
                    <input
                      type="password"
                      class="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="nama belakang"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-black text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      {" "}
                      Tempat lahir{" "}
                    </label>
                    <input
                      type="text"
                      class="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="tempat lahir"
                    />
                  </div>
                </div>

                <div
                  class="w-full lg:w-6/12 px-4"
                  x-data
                  x-init="flatpickr($refs.datetimewidget, {wrap: true, dateFormat: 'M j, Y'});"
                  x-ref="datetimewidget"
                >
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-black text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      {" "}
                      Tanggal lahir
                    </label>
                    <input
                      id="datetime"
                      type="text"
                      name="datetime"
                      x-ref="datetime"
                      data-input
                      class="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="mm/dd/yyyy"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-12/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-black text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      {" "}
                      No. Hp{" "}
                    </label>
                    <input
                      type="number"
                      class="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="08xxxxxxxxx"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-12/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-black text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      {" "}
                      Address{" "}
                    </label>
                    <input
                      type="text"
                      class="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="alamat"
                    />
                  </div>
                </div>
              </div>
              <hr class="mt-6 border-b-1 border-black" />
              <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Akun saya
              </h6>
              <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-black text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      {" "}
                      Username{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="Username"
                      class="border-0 px-3 py-3 placeholder-black text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-black text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <input
                      type="email"
                      class="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Alamat Email"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-black text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <input
                      type="password"
                      class="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="password"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-black text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      {" "}
                      Konfirmasi password{" "}
                    </label>
                    <input
                      type="password"
                      class="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Konfirmasi password"
                    />
                  </div>
                </div>
              </div>

              <hr class="mt-6 border-b-1 border-black" />

              <h6 class="text-black text-sm mt-3 mb-6 font-bold uppercase">
                Dokumen persyaratan
              </h6>
              <div class="flex flex-wrap">
                <div class="w-full lg:w-12/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-black text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      {" "}
                      KTP{" "}
                    </label>
                    <input
                      type="file"
                      class="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="KTP"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-12/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-black text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      {" "}
                      SIM{" "}
                    </label>
                    <input
                      type="file"
                      class="border-0 px-3 py-3 placeholder-black text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="KTP"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-12/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-black text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      {" "}
                      STNK{" "}
                    </label>
                    <input
                      type="file"
                      class="border-0 px-3 py-3 placeholder-black text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="KTP"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-12/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-black text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      {" "}
                      SKCK{" "}
                    </label>
                    <input
                      type="file"
                      class="border-0 px-3 py-3 placeholder-black text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="KTP"
                    />
                  </div>
                </div>
              </div>
              <div class="mt-[48px] ml-[32px] sm:text-right">
                <button class="py-3 px-8 bg-green-500 text-green-100 font-bold rounded hover:bg-[#081D45]">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpDriver;
