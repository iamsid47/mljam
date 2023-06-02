import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Getintouch = () => {
  return (
    <section>
      <NavBar />
      <section class="bg-gray-900 text-gray-50">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-center  ">
            Get in touch
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center max-w-lg mx-auto">
            Got an issue, want to send feedback, or need details about the
            conference? Let us know and we'd get back to you soon!
          </p>
          <form action="#" class="space-y-8">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium  ">
                Name
              </label>
              <input
                type="name"
                id="name"
                class="shadow-sm bg-gray-800 border   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="Jon Doe"
                required
              />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium  ">
                Email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-800 border   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="sample@email.com"
                required
              />
            </div>
            <div>
              <label for="subject" class="block mb-2 text-sm font-medium  ">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm  bg-gray-800 rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500  "
                placeholder="Regarding this ..."
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium  ">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm  bg-gray-800 rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500 "
                placeholder="So the thing that I was telling ..."
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
      <Footer />
    </section>
  );
};

export default Getintouch;
