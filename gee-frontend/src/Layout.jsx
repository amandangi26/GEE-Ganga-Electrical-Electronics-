import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { useRef, useState, useEffect } from 'react';
import useLocoScroll from './hooks/useLocoScroll'; // path where you saved it
// import useGsapAnimations from "./hooks/useGsapAnimations"; // Import the new animation hook
import './App.css';

export default function Layout() {
  const scrollRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Call the custom hook for Locomotive Scroll
    useLocoScroll(scrollRef);

  // Call the custom hook for GSAP animations
  // useGsapAnimations(scrollRef);

  // Handle initial loading
  useEffect(() => {
    // Hide content initially
    if (scrollRef.current) {
      scrollRef.current.style.visibility = 'hidden';
    }

    // Show content after a small delay to ensure everything is initialized
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.style.visibility = 'visible';
      }
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-gradient-to-br from-[#0c1a3c] to-[#1f8fff] z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      <div
        id="main-scroll"
        data-scroll-container
        ref={scrollRef}
        className="min-h-screen max-w-screen bg-gradient-to-br from-[#0c1a3c] to-[#1f8fff] text-white font-sans"
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

