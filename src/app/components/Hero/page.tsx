import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-[#F2F0F1]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/couple.png" // Correct path with forward slash
          alt="Fashion Models"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="brightness-110 contrast-125 saturate-150"
        />
        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-white/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 items-center">
        {/* Left Side: Text Content */}
        <div className="text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-gray-900">
            FIND CLOTHES <br />
            <span className="block">
              THAT <span className="text-black">MATCHES</span> YOUR STYLE
            </span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800"
            >
              Shop Now
            </a>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900">200+</h3>
              <p className="text-gray-500">International Brands</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900">2,000+</h3>
              <p className="text-gray-500">High-Quality Products</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900">30,000+</h3>
              <p className="text-gray-500">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
