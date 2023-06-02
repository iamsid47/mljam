import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="tracking-tighter">
        <section className="relative pt-12 overflow-hidden bg-gradient-to-tr from-slate-900 via-gray-800 to-gray-950 sm:pt-16">
          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-thin tracking-wide uppercase">
                <span className="text-gray-50 rounded-full px-4 py-2 inline-flex hover:ring-white ring-1 ring-blue-500 text-sm transition duration-200">
                  coming soon
                </span>
              </p>
              <h1 className="mt-8 text-4xl text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Pune's <span className="font-bold">Largest</span> Machine
                Learning Conference
              </h1>

              <div className="  px-8 mt-12 space-y-5">
                <form>
                  <div className="w-full max-w-2xl md:ml-auto mx-auto">
                    <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                      <div className="w-full">
                        <input
                          type="name"
                          id="name"
                          name="name"
                          className="py-2 px-4 block w-full shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 ring-1 transition duration-300 bg-slate-900 border-gray-700 text-gray-400"
                          placeholder="Jim Halpert"
                        />
                      </div>
                      <div className="w-full">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="py-2 px-4 block w-full shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 ring-1 transition duration-300 bg-slate-900 border-gray-700 text-gray-400"
                          placeholder="jim@dundermifflin.com"
                        />
                      </div>
                      <button
                        className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 transition duration-300 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-2 px-4 "
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                    <p className="mt-3 text-sm text-gray-400 tracking-tight">
                      Get alerts. No spam, cancel at any time.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            <div className="relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12 sm:mt-16 lg:mt-24">
              <div className="absolute top-0 transform -translate-x-1/2 left-1/2">
                <svg
                  className="blur-3xl filter"
                  width="645"
                  height="413"
                  viewBox="0 0 645 413"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M181.316 218.778C86.2529 123.715 -63.7045 134.94 31.3589 39.8762C126.422 -55.1873 528.427 41.1918 623.49 136.255C718.554 231.319 470.678 289.068 375.614 384.131C280.551 479.195 276.38 313.842 181.316 218.778Z"
                    fill="url(#d)"
                  />
                  <defs>
                    <linearGradient
                      id="d"
                      x1="665.741"
                      y1="178.506"
                      x2="296.286"
                      y2="474.62"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" />
                      <stop offset="100%" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full opacity-0 shadow-2xl"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                  alt=""
                />
              </div>

              <img
                className="relative w-full max-w-5xl mx-auto"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/4/dashboard-mockup.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
