import React from 'react';
import scallopTop from './images/scallops-side.jpg';
import chickenMarsala from './images/chicken-marsala.jpg';
import chicken from './images/chicken.jpg';
import buratta from './images/burrata.jpg';

export const ImageDeck = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between my-4 s">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div className="flex justify-center">
          <img src={scallopTop} alt="scallop" className="max-h-52 sm:h-52" />
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Seared Scallops
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Sweet Pea and Mint Puree, Bacon Lardons, Olive Oil
        </p>
      </div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div className="flex justify-center">
          <img src={chicken} alt="chicken" className="max-h-52 sm:h-52" />
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Chicken Roloude
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Goat Cheese, Mushrooms, Tomato Sauce, Micro Greens
        </p>
      </div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div className="flex justify-center">
          <img src={buratta} alt="chicken" className="max-h-52 sm:h-52" />
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Homemade Burrata
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Pesto, Truffle, Chili Oil, Crustinis
        </p>
      </div>

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div className="flex justify-center">
          <img
            src={chickenMarsala}
            alt="chicken"
            className="max-h-52 sm:h-52"
          />
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Chicken Marsala
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Wild Mushrooms Pan Sauce, Micro Greens
        </p>
      </div>
    </div>
  );
};
