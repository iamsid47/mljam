import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Sponsors = () => {
  return (
    <section>
      <NavBar />
      <section className="py-24 lg:pb-36 bg-gradient-to-tr from-slate-900 via-gray-800 to-gray-950 overflow-hidden text-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-xl text-center mx-auto mb-20">
            <p className="text-4xl lg:text-7xl font-semibold uppercase text-center">
              Sponsors
            </p>
          </div>
          <div className="max-w-2xl mx-auto mb-16">
            <div className="grid grid-cols-3 justify-center md:space-x-4 md:space-y-4 items-center">
              <div className="w-auto p-8 m-4">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-ztos.png"
                  alt=""
                  className="w-2/3 mx-auto"
                />
              </div>
              <div className="w-auto p-8 m-4 mx-auto">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-muzica.png"
                  alt=""
                />
              </div>
              <div className="w-auto p-8 m-4 mx-auto">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-kyan.png"
                  alt=""
                />
              </div>
              <div className="w-auto p-8 m-4 mx-auto">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-utosia.png"
                  alt=""
                />
              </div>
              <div className="w-auto p-8 m-4 mx-auto col-span-2 border border-gray-50 rounded-3xl shadow-lg">
                <div>
                  <h1 className="text-xl lg:text-3xl">
                    Thanks to our sponsors to make this happen!
                  </h1>
                  <a
                    href="/contact"
                    className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 transition duration-300 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-2 px-4 my-4"
                  >
                    Become A Sponsor &rarr;
                  </a>
                </div>
              </div>
              <div className="w-auto p-8 m-4 mx-auto">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-aven.png"
                  alt=""
                />
              </div>
              <div className="w-auto p-8 m-4 mx-auto">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-solaytic.png"
                  alt=""
                />
              </div>
              <div className="w-auto p-8 m-4 mx-auto">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-goldline.png"
                  alt=""
                />
              </div>
              <div className="w-auto p-8 m-4 mx-auto">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-light-ai.png"
                  alt=""
                />
              </div>
              <div className="w-auto p-8 m-4 mx-auto">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-amara.png"
                  alt=""
                />
              </div>
              <div className="w-auto p-8 m-4 mx-auto">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-liva.png"
                  alt=""
                  className="w-2/3 mx-auto"
                />
              </div>
            </div>
          </div>
          <p className=" text-center">
            Join a growing group of satisfied customers who have made the
            switch.
          </p>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Sponsors;
