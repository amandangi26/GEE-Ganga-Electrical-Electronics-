import {Link,NavLink} from "react-router-dom"


export default function Header() {
    return (
      <header className="flex flex-col md:flex-row justify-between items-center px-6 py-6 md:px-12 z-999">
        <div className="text-4xl font-bold text-sky-400">
       <a href="/">G<span className="text-white">EE</span></a>   
        </div>
        <nav className="mt-4 md:mt-0 bg-white text-black px-6 py-3 shadow-md rounded-full hover:bg-sky-50 hover:text-black transition duration-300">
          <ul className="flex flex-wrap gap-6 font-medium">
            <li className="hover:text-sky-400 cursor-pointer"><NavLink to="/" className={({isActive}) =>`${isActive ? "text-sky-400" : "text-black"} hover:text-sky-400 cursor-pointer`}>Home</NavLink></li>
            <li className="hover:text-sky-400 cursor-pointer"><NavLink to="/contact" className={({isActive}) =>`${isActive ? "text-sky-400" : "text-black"} hover:text-sky-400 cursor-pointer`}>Contact</NavLink></li>
            <li className="hover:text-sky-400 cursor-pointer"><NavLink to="/login" className={({isActive}) =>`${isActive ? "text-sky-400" : "text-black"} hover:text-sky-400 cursor-pointer`}>Login</NavLink></li>
            <li className="hover:text-sky-400 cursor-pointer"><NavLink to="/products" className={({isActive}) =>`${isActive ? "text-sky-400" : "text-black"} hover:text-sky-400 cursor-pointer`}>Products</NavLink></li>
            <li className="hover:text-sky-400 cursor-pointer"><NavLink to="/verify" className={({isActive}) =>`${isActive ? "text-sky-400" : "text-black"} hover:text-sky-400 cursor-pointer`}>Verify</NavLink></li>
            <li className="hover:text-sky-400 cursor-pointer"><NavLink to="/admin" className={({isActive}) =>`${isActive ? "text-sky-400" : "text-black"} hover:text-sky-400 cursor-pointer`}>Admin</NavLink></li>


          </ul>
        </nav>
        <div className="mt-4 md:mt-0">
          <button className="bg-gradient-to-r from-sky-400 to-sky-300 text-black px-6 py-2 rounded-full font-semibold hover:from-sky-300 hover:to-sky-400 transition duration-300">
            Join us
          </button>
        </div>
      </header>
    );
  }
  