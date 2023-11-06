import React from 'react';
import jimmyApron from './images/jimmy-apron.png';

export const ContactForm = () => {
  return (
    <div>
      <div class="min-h-full py-10 flex items-center justify-center bg-gray-100">
        <div class="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">
            Contact me with any questions
          </h2>
          <form>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="name"></label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"></label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="message"></label>
              <textarea
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="5"
                placeholder="Your Message"></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="px-10">
          <img
            className="h-70 w-60 rounded-lg shadow-md"
            src={jimmyApron}
            alt="jimmy-apron"
          />
        </div>
      </div>
    </div>
  );
};
