import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../api/data';
const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProducts();
            setProducts(response);
        };
        fetchProducts();
    }, []);

  return (
    <div id="main-scroll" data-scroll-container className="min-h-screen h-auto w-full text-white overflow-x-auto gsap-fade-up">
      <section className="text-center py-20 px-6 md:px-24 gsap-fade-up" data-scroll data-scroll-speed="5" data-scroll-direction="horizontal">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-sky-300 text-transparent bg-clip-text">
          Discover Our Products
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          From innovative design to reliable performance, explore the full range of GEE’s electronic and electrical appliances.
        </p>
      </section>

      <section className="px-6 md:px-24 pb-20 grid gap-12 md:grid-cols-2 lg:grid-cols-2 gsap-fade-up">
        {products.map((product) => (
          <div key={product._id} className="rounded-2xl overflow-hidden shadow-lg bg-white text-black hover:scale-[1.02]  cursor-pointer gsap-fade-up ">
            <Link to={`/products/${product._id}`} className='flex justify-center items-center flex-col'>
              <img
               loading="lazy"
                src={product.image}
                alt={product.name}
                className="w-1/2 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.features?.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-pink-300 to-blue-300 text-xs font-semibold text-white px-3 py-1 rounded-full shadow-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AllProducts;
