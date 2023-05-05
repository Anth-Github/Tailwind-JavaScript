import React from 'react';
import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);

  return (
    <div>
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

        <ul className="list-none hidden justify-end items-center flex-1 sm:flex">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
              } `}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={Toggle ? close : menu}
            alt="closing icon"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              Toggle ? 'flex' : 'hidden'
            } p-6 bg-black-gradient absolute top-20 right-0 mx-2 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex-col justify-end items-center flex-1 flex">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                    index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                  } `}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* End of the div */}
    </div>
  );
};

export default Navbar;
