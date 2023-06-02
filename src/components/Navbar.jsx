import { useState } from "react";
import mljam from "../components/assets/mljam.svg";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-gray-950 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-2 md:block">
            <a href="/">
              <img src={mljam} alt="mljam logo" className="w-1/4 shadow-md" />
            </a>
            <div className="md:hidden">
              <button
                className="p-2  rounded-md outline-none transition duration-300"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-50 transition duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-50 transition duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-8 mt-1 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-50 hover:text-blue-600 transition duration-300">
                <a href="/">Itinerary</a>
              </li>
              <li className="text-gray-50 hover:text-blue-600 transition duration-300">
                <a href="/">Sponsors</a>
              </li>
              <li className="text-gray-50 hover:text-blue-600 transition duration-300">
                <a href="/contact">Contact</a>
              </li>
              <li className="text-gray-50 hover:text-blue-600 transition duration-300">
                <button
                  className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-gray-600 hover:bg-gray-700 transition duration-300 border border-transparent text-gray-300 font-medium rounded-md focus:outline-none md:mx-2 py-2 px-4 mx-0 "
                  type="submit"
                >
                  Book Tickets
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
