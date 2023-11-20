import React from 'react';
import jimmyApron from './images/jimmy-apron.png';

export const ContactForm = () => {
  return (
    <div id="form-placement">
      <div class=" flex-min-h-full py-10 flex  items-center justify-center  flex-col md:flex-row">
        <div class="max-w-md w-full px-6 py-8 rounded-lg shadow-md dark:bg-gray-700">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 dark:text-white">
            Contact me with any questions
          </h2>
          <form name="contact" method="POST" data-netlify="true">
            <div class="mb-4">
              {/* <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="name"></label> */}
              <input type="hidden" name="form-name" value="contact" />
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // id="name"
                type="text"
                placeholder="Your Name"
                name="name"
              />
            </div>
            <div class="mb-4">
              {/* <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"></label> */}
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // id="email"
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div class="mb-6">
              {/* <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="message"></label> */}
              <textarea
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // id="message"
                rows="5"
                placeholder="Your Message"
                name="message"></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="px-10">
          <img
            className="h-70 w-60 rounded-lg shadow-md sm my-10 max-sm:my-10"
            src={jimmyApron}
            alt="jimmy-apron"
          />
        </div>
      </div>
    </div>
  );
};
