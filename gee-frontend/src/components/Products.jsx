import ProductCard from './ProductCard';

export default function Products() {
  return (
    <section className="py-10 px-6 md:px-24 bg-gradient-to-br from-[#0c1a3c] to-[#1f8fff] min-h-screen" >
      <h2 className="text-3xl text-center text-white font-bold gsap-fade-up">
        Our Products
      </h2>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"  data-scroll data-scroll-speed="5" data-scroll-direction="horizontal">
        <ProductCard title="Smart TV" idx={1} description="Experience amazing visuals with our state-of-the-art Smart TV."/>
        <ProductCard title="Smart TV" idx={2} description="Experience amazing visuals with our state-of-the-art Smart TV."/>
        <ProductCard title="Smart TV" idx={3} description="Experience amazing visuals with our state-of-the-art Smart TV."/>
      </div>
    </section>
  );
}
