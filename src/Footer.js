import React from 'react';

export const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow p-4 dark:bg-gray-800 dark:rounded-none">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              Jimmy Smith - {''}
            </a>
            All Rights Reserved
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://docs.google.com/document/d/1IDTmK13A-aQH_Uv0n4WJPM2zCdEWkiAU-D9gkVe8B4E/edit?usp=sharing"
                className="mr-4 hover:underline md:mr-6 "
                target="_blank"
                rel="noreferrer">
                Resume
              </a>
            </li>
            {/* <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li> */}
            {/* <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li> */}
            <li>
              <a href="tel:+17049098461" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
