import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import { Links } from "./constants";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-gray-900">
      <div className="flex items-center mr-4">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold text-white">Smithswork Consulting</a>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-3 h-3"
            >
              <path
                class="fill-current"
                d="M13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 001.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12z"
              />
            </svg>
          ) : (
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3a3 3 0 013-3h14a3 3 0 010 6H3a3 3 0 01-3-3zM0 10a3 3 0 013-3h14a3 3 0 010 6H3a3 3 0 01-3-3zM0 17a3 3 0 013-3h14a3 3 0 010 6H3a3 3 0 01-3-3z" />
            </svg>
          )}
        </button>
      </div>
      <div className={"hidden lg:block " + styles.navbarlinks}>
        <ul className="flex items-center">
          {Links.map((link, idx) => (
            <li key={idx} className="mr-6">
              <Link href={link.link} legacyBehavior>
                <a className="text-white hover:text-gray-500">{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`absolute top-0 left-0 p-8 bg-gray-900 h-screen w-64 transition-transform ease-out duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="items-center">
          {Links.map((link, idx) => (
            <li key={idx} className="mr-6 mb-4">
              <Link href={link.link} legacyBehavior>
                <a className="text-white hover:text-gray-500 font-bold">{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
