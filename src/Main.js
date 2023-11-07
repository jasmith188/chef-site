import React from 'react';

// import { Carousel } from './Carousel';
import { ContactForm } from './ContactForm';
import { ImageDeck } from './ImageDeck';

export const Main = () => {
  return (
    <div>
      {/* <CardDeck /> */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Lets plan your next big meal!
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            With over 16 years of experience in fine dining cooking, I possess a
            wealth of culinary expertise and a deep passion for creating
            exceptional dining experiences. As your private chef, I can curate
            exquisite meals tailored to your preferences, ensuring each dish is
            a harmonious blend of flavors, textures, and presentation.
          </p>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Drawing inspiration from a diverse range of culinary traditions and
            utilizing the finest ingredients, I will design a customized menu
            that reflects your tastes and dietary requirements. Whether you have
            a penchant for delicate seafood dishes, succulent cuts of meat, or
            vibrant vegetarian creations, I will meticulously craft each course
            to delight your palate.
          </p>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            In addition to my culinary skills, I bring a high level of
            professionalism, attention to detail, and commitment to excellence.
            I will work closely with you to understand your desires, taking into
            consideration any specific dietary restrictions or allergies. From
            intimate dinners to special occasions, I will ensure that your
            dining experience is both memorable and satisfying. As your private
            chef, I will not only plan your next meal but also handle the entire
            culinary process, from sourcing the freshest ingredients to
            preparing and presenting the dishes with artistic flair. You can sit
            back, relax, and enjoy the pleasure of a thoughtfully designed menu
            executed to perfection. Together, we can create extraordinary
            culinary moments that will tantalize your taste buds, leaving a
            lasting impression.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="https://docs.google.com/document/d/1IDTmK13A-aQH_Uv0n4WJPM2zCdEWkiAU-D9gkVe8B4E/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              View Resume
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <ImageDeck />
        {/* <Carousel /> */}
      </div>
      <ContactForm />
    </div>
  );
};
