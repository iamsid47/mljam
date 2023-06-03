import React from "react";

const CTA = () => {
  return (
    <section className="my-24">
      <div class="mt-12">
        <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white text-center">
          Stay tuned for the big day!
        </h2>
      </div>
      <div className="  px-8 mt-4 space-y-5">
        <form>
          <div className="w-full max-w-2xl md:ml-auto mx-auto">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <div className="w-full">
                <input
                  type="name"
                  id="name"
                  name="name"
                  className="py-2 px-4 block w-full shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 ring-1 transition duration-300 bg-slate-900 border-gray-700 text-gray-400"
                  placeholder="Jon Doe"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="py-2 px-4 block w-full shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 ring-1 transition duration-300 bg-slate-900 border-gray-700 text-gray-400"
                  placeholder="sample@email.com"
                />
              </div>
              <button
                className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 transition duration-300 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-2 px-4 "
                type="submit"
              >
                Free Ticket
              </button>
            </div>
            <p className="mt-3 text-sm text-gray-400 tracking-tight text-center">
              Get alerts. No spam, cancel at any time.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CTA;
