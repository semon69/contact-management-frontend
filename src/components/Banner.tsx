"use client";

import Lottie from "lottie-react";
import lottie1 from "../jsonFile/banner1.json";

const Banner = () => {
  return (
    <div className="md:flex justify-between items-center mx-3 lg:mx-16">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-7xl font-semibold font-serif">Welcome to</h1>
        <h1 className="text-2xl md:text-4xl font-semibold font-serif my-2 text-pink-400">
          Contact Management Application
        </h1>
        <p className="text-xl md:text-2xl font-semibold font-serif">
          Smart Contact Management for Busy Professionals.
        </p>
        <p className="text-xl md:text-2xl font-semibold font-serif my-2">
          Effortless Organization, Seamless Connections.
        </p>
      </div>
      <div className="md:w-1/2">
        <div className="w-full md:-mt-12">
          <Lottie animationData={lottie1} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
