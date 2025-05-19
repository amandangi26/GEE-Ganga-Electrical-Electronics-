import Hero from './Hero';
import About from './About';
import Products from './Products';

export default function GEELandingPage() {



  
 // Call the custom hook////Locomotive code
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
  /////locomotive end
  

  return (
   <div className=''>
      <Hero />
      <About />
      <Products />
  </div>
  );
}




// import { motion } from 'framer-motion';

// let idx=1;
// let title="Smart TV"

// export default function GEELandingPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0c1a3c] to-[#1f8fff] text-white font-sans">
//       {/* Header */}
//       <header className="flex flex-col md:flex-row justify-between items-center px-6 py-6 md:px-12 ">
//         <div className="text-4xl font-bold text-sky-400">
//           G<span className="text-white">EE</span>
//         </div>
//         <nav className="mt-4 md:mt-0 bg-white text-black px-6 py-3 shadow-md rounded-full hover:bg-white hover:text-black transition duration-300">
//     <ul className="flex flex-wrap gap-6 font-medium shaddow-md">
//       <li className="hover:text-yellow-400 cursor-pointer">About</li>
//       <li className="hover:text-yellow-400 cursor-pointer">How it works</li>
//       <li className="hover:text-yellow-400 cursor-pointer">Login</li>
//       <li className="hover:text-yellow-400 cursor-pointer">Products</li>
//     </ul>
//   </nav>
//         <div className="mt-4 md:mt-0">
//           <button className="bg-gradient-to-r from-sky-400 to-sky-300 text-black px-6 py-2 rounded-full font-semibold hover:from-sky-300 hover:to-sky-400 transition duration-300">
//             Join us
//           </button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className="flex flex-col md:flex-row items-start justify-between px-10 md:px-24 py-20 relative min-h-screen">
//         <motion.div
//           className="z-10 text-center md:text-left"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//            <h1 className="text-8xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-400">
//             Track your <br /> productivity <br /> online
//           </h1>
//           <p className="mt-6 text-lg text-gray-200 max-w-md mx-auto md:mx-0">
//             Welcome to GEE – your one-stop solution for quality electronic and electrical appliances. Unlock your dreams with us.
//           </p>
//           <button className="mt-6 bg-gradient-to-r from-sky-400 to-sky-300 text-white px-6 py-3 rounded-full font-semibold hover:from-sky-300 hover:to-sky-400 transition">
//             Explore Products
//           </button>
//         </motion.div>

//         <motion.div
//           className="hidden lg:block absolute right-10 top-1/2 transform -translate-y-1/2 blur-3xl opacity-70"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.5 }}
//         >
//           <div className="clip-path-custom bg-sky-300 h-96 w-96"></div>
//         </motion.div>
//       </main>

//       {/* About Section */}
//       <section className="py-20 bg-gradient-to-r from-gray-100 to-white text-black text-center">
//       <motion.h2
//           className="text-3xl font-bold text-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           About GEE
//         </motion.h2>
//         <motion.p
//           className="mt-6 text-lg max-w-3xl mx-auto text-center"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           GEE (Gyan Ganga Electrical & Electronics) is your trusted partner in delivering modern appliances. From sleek Smart TVs to efficient Air Conditioners, our products combine technology and design for a premium lifestyle.
//         </motion.p>
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
//             <p className="mt-4 text-gray-700">
//               Our vision is to lead the electronic and electrical appliances industry through sustainable innovation, providing our customers with products that enhance their lifestyles.
//             </p>
//           </div>
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h3 className="text-xl font-semibold text-gray-900">Our Commitment</h3>
//             <p className="mt-4 text-gray-700">
//               We are committed to delivering products that meet the highest standards of quality, durability, and efficiency. Our mission is to help you achieve more, whether at work, home, or on the go.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="py-20 px-6 md:px-24 bg-gradient-to-br from-[#0c1a3c] to-[#1f8fff]">
//       <motion.h2
//           className="text-3xl text-center text-white font-bold"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           Our Products
//         </motion.h2>
//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//           {["Smart TV", "Air Conditioner", "Washing Machine"].map((title, idx) => (
//             <motion.div
//               key={idx}
//               className="bg-white text-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
//               initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.2 }}
//             >
//               <img
//                 src={`https://via.placeholder.com/300x200?text=Product+${idx + 1}`}
//                 alt={`Product ${idx + 1}`}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold">{title}</h3>
//                 <p className="mt-4 text-gray-700">
//                   {title === 'Smart TV'
//                     ? 'Experience amazing visuals with our state-of-the-art Smart TV.'
//                     : title === 'Air Conditioner'
//                     ? 'Stay cool with our energy-efficient air conditioners.'
//                     : 'Efficient and reliable washing machines for your daily needs.'}
//                 </p>
//                 <button className="mt-6 bg-gradient-to-r from-sky-400 to-sky-300 text-white px-6 py-2 rounded-full font-semibold hover:from-sky-300 hover:to-sky-400 transition">
//                   View Details
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#0c1a3c] text-white text-center py-6">
//         <p>&copy; 2025 GEE - All Rights Reserved</p>
//         <p className="text-sm text-gray-400 mt-1">Designed with ❤️ by Aman Dangi</p>

//       </footer>
//     </div>
//   );
// }

