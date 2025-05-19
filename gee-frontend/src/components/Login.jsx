export default function Login() {
   
      return (
      <div
        id="contact-scroll"
        data-scroll-container
        className="min-h-screen p-10 bg-cover bg-top text-white font-sans"
      >
        <div className="form-container max-w-2xl mx-auto backdrop-blur-md rounded-2xl bg-gradient-to-t from-pink-400 to-blue-900 shadow-2xl p-15 gsap-fade-up">
          <h1 className="text-4xl font-bold text-center mb-8 text-white gsap-fade-up">
           Login
          </h1>
          <form className="space-y-6 gsap-fade-up">
            <input
              type="text"
              placeholder="Enter Your Username"
              className="w-full px-5 py-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-5 py-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <div className="text-center">
              <button
                type="Login"
                className="bg-gradient-to-r from-sky-400 to-sky-300 text-white font-semibold py-3 px-8 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  
  
  