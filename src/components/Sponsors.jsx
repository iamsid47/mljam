import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Sponsors = () => {
  return (
    <section>
      <NavBar />
      <section className="py-24 lg:pb-36 bg-gradient-to-tr from-slate-900 via-gray-800 to-gray-950 overflow-hidden text-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-xl text-center mx-auto mb-12">
            <p className="text-4xl lg:text-7xl font-bold uppercase text-center bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-700 bg-clip-text text-transparent">
              Sponsors
            </p>
          </div>
          <div className="max-w-2xl mx-auto mb-16">
            <div className="grid grid-cols-3 justify-center md:space-x-4 md:space-y-4 items-center">
              <div className="w-auto p-4 md:p-8 m-4 mx-auto ">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-muzica.png"
                  alt=""
                />
              </div>
              <div className="w-auto p-4 md:p-8 m-4 mx-auto">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-light-ai.png"
                  alt=""
                />
              </div>
              <div className="w-auto p-4 md:p-8 m-4 mx-auto">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-kyan.png"
                  alt=""
                />
              </div>
              <div className="hidden md:inline-block w-auto p-8 m-4 mx-auto col-span-2 border border-gray-50 rounded-3xl shadow-lg">
                <div>
                  <h1 className="text-xl lg:text-3xl">
                    Thanks to our sponsors to make this happen!
                  </h1>
                  <a
                    href="#sponsor"
                    className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 transition duration-300 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-2 px-4 my-4"
                  >
                    Become A Sponsor &rarr;
                  </a>
                </div>
              </div>
              <div className="w-auto p-4 md:p-8 m-4 mx-auto">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-utosia.png"
                  alt=""
                />
              </div>

              <div className="w-auto p-4 md:p-8 m-4 mx-auto">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-aven.png"
                  alt=""
                />
              </div>
              <div className="w-auto p-4 md:p-8 m-4 mx-auto">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-solaytic.png"
                  alt=""
                />
              </div>
              <div className="w-auto p-4 md:p-8 m-4 mx-auto">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-goldline.png"
                  alt=""
                />
              </div>
              <div className="w-auto p-4 md:p-8 m-4">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-ztos.png"
                  alt=""
                  className="w-2/3 mx-auto"
                />
              </div>
              <div className="w-auto p-4 md:p-8 m-4 mx-auto">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-amara.png"
                  alt=""
                />
              </div>
              <div className="w-auto p-4 md:p-8 m-4 mx-auto">
                <img
                  src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-liva.png"
                  alt=""
                  className="w-2/3 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="" id="sponsor">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-center  ">
              Become a sponsor!
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center max-w-2xl mx-auto">
              By becoming a sponsor of a{" "}
              <span className="font-bold">mljam</span>, you gain valuable
              exposure and networking opportunities within the industry,
              showcasing your brand, products, and expertise to a targeted
              audience of professionals and decision-makers.
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label for="name" className="block mb-2 text-sm font-medium  ">
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  className="shadow-sm bg-gray-800 border   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  placeholder="Jon Doe"
                  required
                />
              </div>
              <div>
                <label for="email" className="block mb-2 text-sm font-medium  ">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-800 border   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  placeholder="sample@email.com"
                  required
                />
              </div>
              <div>
                <label
                  for="company"
                  className="block mb-2 text-sm font-medium  "
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="block p-3 w-full text-sm  bg-gray-800 rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500  "
                  placeholder="Sample, Inc."
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium  "
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm  bg-gray-800 rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="We wanted to sponsor mljam ..."
                ></textarea>
              </div>
              <button
                className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 transition duration-300 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-2 px-4 "
                type="submit"
              >
                Send Message
              </button>
            </form>
            <p className="text-xs py-4 text-gray-400">
              By clicking the send message button, you agree to our terms and
              privacy.
            </p>
          </div>
        </section>
      </section>
      <Footer />
    </section>
  );
};

export default Sponsors;
