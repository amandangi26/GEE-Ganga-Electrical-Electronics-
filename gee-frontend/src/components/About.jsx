export default function About() {
    return (
      <section className="py-20 bg-gradient-to-r from-gray-100 to-white text-black text-center min-h-screen">
        <h2 className="text-3xl font-bold gsap-fade-up">About GEE</h2>
        <p className="mt-6 text-lg max-w-3xl mx-auto text-center gsap-fade-up">
          GEE (Gyan Ganga Electrical & Electronics) is your trusted partner in delivering modern appliances. From sleek Smart TVs to efficient Air Conditioners, our products combine technology and design for a premium lifestyle.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10" data-scroll data-scroll-speed="5" data-scroll-direction="horizontal">
          <div className="bg-white shadow-lg rounded-lg p-6 gsap-fade-up">
            <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
            <p className="mt-4 text-gray-700">
              Our vision is to lead the electronic and electrical appliances industry through sustainable innovation, providing our customers with products that enhance their lifestyles.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 gsap-fade-up">
            <h3 className="text-xl font-semibold text-gray-900">Our Commitment</h3>
            <p className="mt-4 text-gray-700">
              We are committed to delivering products that meet the highest standards of quality, durability, and efficiency. Our mission is to help you achieve more, whether at work, home, or on the go.
            </p>
          </div>
        </div>
      </section>
    );
  }
  