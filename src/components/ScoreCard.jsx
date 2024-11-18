import React from "react";

export default function ScoreCard() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-light text-gray-700 text-center my-8">
        Parallax Flipping Cards
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {["Diligord", "Strizzes", "Clossyo"].map((title, index) => (
          <div
            key={index}
            className="group w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)] cursor-pointer relative"
          >
            <div className="relative w-full h-[280px] rounded-lg shadow-lg transform-style-3d transition-transform duration-700">
              {/* Front */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg flex items-center justify-center text-white text-xl font-semibold transform group-hover:rotate-y-180 backface-hidden transition-transform duration-700"
                style={{
                  backgroundImage: `url(https://unsplash.it/500/${500 + index})`,
                }}
              >
                <div className="text-center">
                  <p>{title}</p>
                  <span className="text-sm text-gray-300">Lorem ipsum</span>
                </div>
              </div>
              {/* Back */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-600 text-white rounded-lg p-6 flex items-center justify-center transform rotate-y-180 backface-hidden transition-transform duration-700">
                <p className="text-center text-gray-800">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
