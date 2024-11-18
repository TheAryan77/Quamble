import React from "react";
import { Link } from "react-router-dom";

export default function QuizCardsSection() {

  
  return (
    <div className="bg-gray-200 px-2 py-10">
      <div id="features" className="mx-auto max-w-6xl">
        <p className="text-center text-base font-semibold leading-7 text-primary-500">
          Quizes
        </p>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        Quizzing has never been so fun and interactive.
        </h2>
        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm hover:shadow-lg hover:shadow-2xl hover:shadow-orange-200">
            <Link to={'/quiz/cricket'}>
            <img
              src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">
              Cricket
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              The cutting-edge language model that makes interactions a breeze.
              With its user-friendly interface, effortlessly tap into the world
              of AI-generated text.
            </p>
            </Link>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm hover:shadow-lg hover:shadow-2xl hover:shadow-orange-200">
          <Link to={'/quiz/Sports'}>
            <img
              src="https://www.svgrepo.com/show/530442/port-detection.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">Sports</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Simply input your subject, click the generate button, and the
              result will appear in seconds just like magic.
            </p>
          </Link>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm hover:shadow-lg hover:shadow-2xl hover:shadow-orange-200">
          <Link to={'/quiz/History'}>
            <img
              src="https://www.svgrepo.com/show/530444/availability.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">History</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              We offer advanced customization. You can freely combine options
              like roles, languages, publish, tones, lengths, and formats.
            </p>
          </Link>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm hover:shadow-lg hover:shadow-2xl hover:shadow-orange-200">
          <Link to={'/quiz/Law'}>
              <img
                src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
              Law
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                We offer a free trial service without login. We provide many
                payment options including pay-as-you-go and subscription.
              </p>
            </Link>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm hover:shadow-lg hover:shadow-2xl hover:shadow-orange-200">
          <Link to={'/quiz/Geography'}>
              <img
                src="https://www.svgrepo.com/show/530450/page-analysis.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
              Geography
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                We offer many templates covering areas such as writing,
                education, lifestyle and creativity to inspire your potential.
              </p>
            </Link>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm hover:shadow-lg hover:shadow-2xl hover:shadow-orange-200">
          <Link to={'/quiz/Bollywood'}>
              <img
                src="https://www.svgrepo.com/show/530453/mail-reception.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                Bollywood
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                Our product is compatible with multiple platforms including Web,
                Chrome, Windows, and Mac, so you can use MagickPen anywhere.
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
