import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function useGsapAnimations(scrollRef){
  useEffect(() => {
    // Ensure animations run each time the component is mounted or the page is navigated
    const elements = gsap.utils.toArray('.gsap-fade-up');
    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: el,
            scroller: scrollRef.current, // Use the container element for scrolling context
            start: 'top 80%',
          },
          duration: 1,
          delay: i * 0.2,
        }
      );
    });

    return () => {
      // Clean up scroll triggers to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Run this effect on every render without dependency on location.pathname
};

