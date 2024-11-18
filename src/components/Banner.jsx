import React from "react";
import ScoreCard from "./ScoreCard";

export default function Banner() {
  return (
    <>
      <section class="relative bg-[url('/assets/Banner.png')] bg-cover bg-center bg-no-repeat">
      {/* <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparen"></div> */}


      

        <div class="relative mx-auto max-w-screen-xl px-4 py-28 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 justify-end">
          <div class="w-full max-w-2xl text-left ltr:sm:text-left rtl:sm:text-right bg-slate-100 p-2 px-6 rounded-lg">
          <ScoreCard />
            {/* <h1 class="text-3xl font-extrabold text-white sm:text-5xl">
              Let us find your
              <strong class="block font-extrabold text-rose-500">
                {" "}
                Forever Home.{" "}
              </strong>
            </h1> */}

            {/* <p class="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p> */}

            <div class="mt-8 flex flex-wrap gap-4 text-center justify-center">
              {/* <a
                href="#"
                class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a> */}

              {/* <a
                href="#"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
