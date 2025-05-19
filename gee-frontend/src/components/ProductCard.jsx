export default function ProductCard({ title, idx, description }) {
    return (
      <div key={idx} className="bg-white text-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl gsap-fade-up">
        <img
          src="https://images.unsplash.com/photo-1649194271438-dcd53ee4cce3?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={`Product ${idx + 1}`}
          className="w-full h-40 object-cover img"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-4 text-gray-700">{description}</p>
          <button className="mt-6 bg-gradient-to-r from-sky-400 to-sky-300 text-white px-6 py-2 rounded-full font-semibold hover:from-sky-300 hover:to-sky-400">
            View Details
          </button>
        </div>
      </div>
    );
  }