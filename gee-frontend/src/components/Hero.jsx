
// import React, { useRef } from "react";
// import useLocoScroll from "../hooks/useLocoScroll";
// import useGsapAnimations from "../hooks/useGsapAnimations"; // Import the new animation hook
// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import tvImg from "../assets/tv-img.jpeg"
import tvImg from "../assets/tv.webp"


export default function Hero() {
  // const scrollRef = useRef(null);

  // // Call the custom hook for Locomotive Scroll
  // useLocoScroll(scrollRef);

  // // Call the custom hook for GSAP animations
  // useGsapAnimations(scrollRef);

    return (
      <main className="flex flex-col md:flex-row items-start justify-between px-4 md:px-24 md:py-15 relative md:min-h-screen max-w-screen min-h-screen gsap-fade-up" data-scroll data-scroll-speed="5" data-scroll-direction="horizontal">
        <div className="z-10 text-center md:text-left gsap-fade-up">
          <h1 className="md:text-8xl xl:text-10xl text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-400">
            Track your <br /> productivity <br /> online
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-md mx-auto md:mx-0">
            Welcome to GEE – your one-stop solution for quality electronic and electrical appliances. Unlock your dreams with us.
          </p>
          <button className="mt-6 bg-gradient-to-r from-sky-400 to-sky-300 text-white px-6 py-3 rounded-full font-semibold hover:from-sky-300 hover:to-sky-400 transition">
            Explore Products
          </button>
        </div>
        <div className="flex gsap-fade-up w-max ml-20" >
        <img src={tvImg} className="w-xlg object-cover z-2" alt="tvimg" data-scroll data-scroll-speed="5" data-scroll-direction="vertical"/>
        <div className="hidden lg:block absolute right-20 top-1/2 transform -translate-y-1/2 blur-3xl opacity-100 z-1" data-scroll data-scroll-speed="5" data-scroll-direction="vertical">
          <div className="clip-path-custom bg-sky-300 h-96 w-96"></div>
        </div>
        </div>
      </main>
    );
  }
  