import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import 'locomotive-scroll/dist/locomotive-scroll.css';

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(scrollRef) {
  const location = useLocation();
  const locoScrollRef = useRef(null);
  const animationsInitializedRef = useRef(false);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Cleanup previous Locomotive and GSAP triggers
    if (locoScrollRef.current) {
      locoScrollRef.current.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }

    const initLoco = () => {
      // Ensure the container is visible before initializing
      if (scrollRef.current) {
        scrollRef.current.style.visibility = 'visible';
        scrollRef.current.style.opacity = '1';
      }

      locoScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: true,
        lerp: 0.075,
        resetNativeScroll: true,
        tablet: {
          smooth: true,
          breakpoint: 1024
        },
        smartphone: {
          smooth: true
        }
      });

      // Handle scroll updates
      locoScrollRef.current.on('scroll', ScrollTrigger.update);

      // Handle content updates
      locoScrollRef.current.on('call', (func) => {
        if (func === 'updateScroll') {
          locoScrollRef.current.update();
        }
      });

      ScrollTrigger.scrollerProxy(scrollRef.current, {
        scrollTop(value) {
          if (!locoScrollRef.current) return 0;
          return arguments.length
            ? locoScrollRef.current.scrollTo(value, { duration: 0, disableLerp: true })
            : locoScrollRef.current.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollRef.current.style.transform ? 'transform' : 'fixed',
      });

      // Update on window resize
      window.addEventListener('resize', () => {
        if (locoScrollRef.current) {
          setTimeout(() => locoScrollRef.current.update(), 100);
        }
      });

      return true;
    };

    const initAnimations = () => {
      if (animationsInitializedRef.current) return;
      animationsInitializedRef.current = true;

      // Fade Up animations
      gsap.utils.toArray('.gsap-fade-up').forEach((el, i) => {
        if (!el) return;
        
        gsap.set(el, { opacity: 0, y: 50 }); // Set initial state
        
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            scroller: scrollRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Slide Left animations
      gsap.utils.toArray('.gsap-slide-left').forEach((el, i) => {
        if (!el) return;
        
        gsap.set(el, { opacity: 0, x: -100 }); // Set initial state
        
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            scroller: scrollRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      ScrollTrigger.refresh();
    };

    // Initialize immediately
    const success = initLoco();
    if (success) {
      requestAnimationFrame(() => {
        initAnimations();
        ScrollTrigger.refresh();
        // Force an update after initialization
        if (locoScrollRef.current) {
          locoScrollRef.current.update();
        }
      });
    }

    return () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
        locoScrollRef.current = null;
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      animationsInitializedRef.current = false;
    };
  }, [location.pathname]);

  // Expose update method for manual updates
  return {
    update: () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.update();
      }
    }
  };
}



//////////


// import { useEffect, useRef } from 'react';
// import { useLocation } from 'react-router-dom';
// import LocomotiveScroll from 'locomotive-scroll';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import gsap from 'gsap';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

// gsap.registerPlugin(ScrollTrigger);

// export default function useLocoScroll(scrollRef) {
//   const location = useLocation();
//   const locoScrollRef = useRef(null);

//   useEffect(() => {
//     if (!scrollRef.current) return;

//     const initLoco = () => {
//       // Initialize Locomotive Scroll
//       locoScrollRef.current = new LocomotiveScroll({
//         el: scrollRef.current,
//         smooth: true,
//         smoothMobile: true, // this is for mobile 
//         lerp: 0.075,  // Smoothness
//       });

//       locoScrollRef.current.on('scroll', ScrollTrigger.update);

//       // Setup ScrollTrigger proxy for Locomotive Scroll
//       ScrollTrigger.scrollerProxy(scrollRef.current, {
//         scrollTop(value) {
//           return arguments.length
//             ? locoScrollRef.current.scrollTo(value, 0, 0)
//             : locoScrollRef.current.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//           return {
//             top: 0,
//             left: 0,
//             width: window.innerWidth,
//             height: window.innerHeight,
//           };
//         },
//         pinType: scrollRef.current.style.transform ? 'transform' : 'fixed',
//       });

//       ScrollTrigger.addEventListener('refresh', () => locoScrollRef.current.update());
//       ScrollTrigger.refresh();
//     };

//     // Animate elements with specific GSAP classes
//     const animateGsapElements = () => {
//       // Fade up animation
//       gsap.utils.toArray('.gsap-fade-up').forEach((el, i) => {
//         if (!el) return;
//         gsap.fromTo(
//           el,
//           { opacity: 0, y: 50 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 1,
//             delay: i * 0.1,
//             scrollTrigger: {
//               trigger: el,
//               scroller: scrollRef.current,
//               start: 'top 80%',
//               toggleActions: 'play none none none',
//             },
//           }
//         );
//       });

//       // Add more animations for other classes like gsap-slide-left, etc.
//       gsap.utils.toArray('.gsap-slide-left').forEach((el, i) => {
//         if (!el) return;
//         gsap.fromTo(
//           el,
//           { opacity: 0, x: -100 },
//           {
//             opacity: 1,
//             x: 0,
//             duration: 1,
//             delay: i * 0.1,
//             scrollTrigger: {
//               trigger: el,
//               scroller: scrollRef.current,
//               start: 'top 80%',
//               toggleActions: 'play none none none',
//             },
//           }
//         );
//       });

//       ScrollTrigger.refresh();
//     };

//     // Cleanup previous instances
//     if (locoScrollRef.current) {
//       locoScrollRef.current.destroy();
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     }

//     // Delay Locomotive Scroll initialization slightly to ensure smoother load
//     setTimeout(() => {
//       initLoco();
//       animateGsapElements();
//     },); // Adjust this timeout if necessary

//     return () => {
//       if (locoScrollRef.current) locoScrollRef.current.destroy();
//     };
//   }, [location.pathname]);

// }



///
// const scrollRef = useRef(null);

// useEffect(() => {
//   const locoScroll = new LocomotiveScroll({
//     el: scrollRef.current,
//     smooth: true,
//   });

//   ScrollTrigger.scrollerProxy(scrollRef.current, {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },
//     pinType: scrollRef.current.style.transform ? 'transform' : 'fixed',
//   });

//   ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

//   return () => {
//     if (locoScroll) locoScroll.destroy();
//   };
// }, []);