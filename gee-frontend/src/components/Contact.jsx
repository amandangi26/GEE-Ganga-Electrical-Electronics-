import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Map from "./Map";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div id="contact-scroll" data-scroll-container className="min-h-screen p-10 font-sans">
      {/* FORM PART */}
      <div className="form-container max-w-2xl mx-auto backdrop-blur-md rounded-2xl bg-gradient-to-t from-pink-400 to-blue-900 shadow-2xl p-10 mb-20 gsap-fade-up">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Get in Touch</h1>
        
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-5 py-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 gsap-fade-up"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-5 py-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 gsap-fade-up"
          />
          <input
            type="number"
            name="user_phone"
            placeholder="Your Phone"
            required
            className="w-full px-5 py-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 gsap-fade-up"
          />
          <textarea
            rows={5}
            name="message"
            placeholder="Your Message"
            required
            className="w-full px-5 py-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 gsap-fade-up"
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-sky-400 to-sky-300 text-white font-semibold py-3 px-8 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* MAP + TEXT PART */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-[#f1f1f1]">
        {/* LEFT SIDE TEXT */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Visit our store for affordable electronics including TVs, mixers, washing machines, and coolers. 
            We also offer easy EMI options.
          </p>
          <div className="space-y-4 text-gray-800">
            <div>
              <h3 className="font-semibold">Location</h3>
              <p>Gaya, Bihar , Pin- 823001</p>
            </div>
            <div>
              <h3 className="font-semibold">Hours</h3>
              <p>9 AM - 6 PM</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE MAP */}
        <div className="flex-1 bg-sky-400">
          <Map />
        </div>
      </div>
    </div>
  );
}





// import React from "react";
// import Map from "./Map";

// export default function Contact() {
  
//   return (
//     <div id="contact-scroll" data-scroll-container className="bg-[#fdfdfd] min-h-screen p-10 font-sans">
      
//       {/* FORM PART */}
//       <div className="form-container max-w-2xl mx-auto backdrop-blur-md rounded-2xl bg-gradient-to-t from-pink-400 to-blue-900 shadow-2xl p-10 mb-20 gsap-fade-up">
//         <h1 className="text-4xl font-bold text-center mb-8 text-white">
//           Get in Touch
//         </h1>
//         <form className="space-y-6">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full px-5 py-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 gsap-fade-up"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full px-5 py-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 gsap-fade-up"
//           />
//           <input
//             type="number"
//             placeholder="Your Phone"
//             className="w-full px-5 py-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 gsap-fade-up"
//           />
//           <textarea
//             rows={5}
//             placeholder="Your Message"
//             className="w-full px-5 py-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 gsap-fade-up"
//           />
//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-gradient-to-r from-sky-400 to-sky-300 text-white font-semibold py-3 px-8 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* MAP + TEXT PART */}
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-[#f1f1f1]">
        
//         {/* LEFT SIDE TEXT */}
//         <div className="flex-1">
//           <h2 className="text-4xl font-bold mb-4 text-gray-900">Contact Us</h2>
//           <p className="text-gray-600 mb-6">
//             Visit our store for affordable electronics including TVs, mixers, washing machines, and coolers. 
//             We also offer easy EMI options.
//           </p>
//           <div className="space-y-4 text-gray-800">
//             <div>
//               <h3 className="font-semibold">Location</h3>
//               <p>Gaya, Bihar , Pin- 823001</p>
//             </div>
//             <div>
//               <h3 className="font-semibold">Hours</h3>
//               <p>9 AM - 6 PM</p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE MAP */}
//         <div className="flex-1 bg-sky-400">
//           <Map />
//         </div>

//       </div>
//     </div>
//   );
// }