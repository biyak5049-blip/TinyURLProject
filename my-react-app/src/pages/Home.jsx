
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#002744] min-h-screen text-white">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT CONTENT */}
            <div>

              <h1 className="text-4xl md:text-5xl font-bold leading-[1.25] mb-6">
                URL Shortener,
                <br />
                Branded Short Links
                <br />
                & Analytics
              </h1>

              <p className="text-lg leading-relaxed mb-5">
                Welcome to the original link shortener —
                simplifying the Internet through the power
                of the URL since 2002.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                You can use branded domains for fully custom links,
                track link analytics, and enjoy other powerful
                features with our paid plans.
              </p>

              <div className="flex flex-wrap gap-5">

                <button className="bg-white text-gray-900 px-5 py-3 rounded-md hover:bg-gray-200">
                  View Plans
                </button>

                <button className="bg-[#117f98] text-white px-5 py-3 rounded-md hover:bg-[#1595ad]">
                  Create Free Account
                </button>

              </div>

              <h2 className="text-xl font-bold mt-6">
                Your Recent Links:
              </h2>

            </div>


            {/* RIGHT CONTENT - FORM CARD */}
            <div className="bg-white text-gray-900 rounded-lg shadow-xl overflow-hidden">

              {/* Card Tabs */}
              <div className="grid grid-cols-2">

                <button className="bg-gray-100 py-5 font-bold">
                  🔗 Shorten a Link
                </button>

                <button className="bg-[#117f98] text-white py-5 font-bold">
                  ▦ Generate QR Code
                </button>

              </div>


              {/* Form Content */}
              <div className="p-5">

                {/* Long URL */}
                <div className="mb-6">

                  <label className="block font-semibold mb-3">
                    ➤ Long URL <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="url"
                    placeholder="Paste long URL here"
                    className="w-full border border-gray-300 rounded-md px-3 py-2.5 outline-none focus:border-teal-600"
                  />

                </div>


                {/* Domain and Alias */}
                <div className="grid grid-cols-2 gap-5 mb-6">

                  <div>
                    <label className="block font-semibold mb-3">
                      🌐 Domain
                    </label>

                    <select className="w-full border border-gray-300 rounded-md px-3 py-2.5">
                      <option>tinyurl.com</option>
                    </select>
                  </div>


                  <div>
                    <label className="block font-semibold mb-3">
                      🖉 Alias (optional)
                    </label>

                    <input
                      type="text"
                      placeholder="Add alias here"
                      className="w-full border border-gray-300 rounded-md px-3 py-2.5 outline-none"
                    />

                    <p className="text-xs text-gray-500 mt-2">
                      Must be at least 5 characters
                    </p>
                  </div>

                </div>


                {/* Shorten Button */}
                <button className="w-full bg-[#208447] hover:bg-green-800 text-white font-semibold py-3 rounded-md transition">
                  Shorten Link
                </button>


                {/* Terms */}
                <p className="text-xs italic text-gray-600 mt-5">
                  By clicking Shorten Link, you agree with our
                  <span className="text-blue-600"> Terms of Service</span>,
                  <span className="text-blue-600"> Privacy Policy</span>,
                  and Use of Cookies.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">
                Short Links
              </h3>
              <p className="text-gray-600">
                Convert long URLs into short links.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">
                Link Analytics
              </h3>
              <p className="text-gray-600">
                Track clicks and link performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">
                Custom Domains
              </h3>
              <p className="text-gray-600">
                Create branded short links.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Home;
