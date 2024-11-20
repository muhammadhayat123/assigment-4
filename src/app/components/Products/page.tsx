import Link from "next/link";

const Products = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    price: "$120",
    rating: "4.5/5",
    image: "/Frame 32.png",  // Corrected image path (removed leading backslash)
    link: "/product/tshirt1",
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: "$240",
    oldPrice: "$260",
    discount: "-20%",
    rating: "3.5/5",
    image: "/Frame 33.png",  // Corrected image path (removed leading backslash)
    link: "/product/jeans1",
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: "$180",
    rating: "4.5/5",
    image: "/Frame 34.png",  // Corrected image path (removed leading backslash)
    link: "/product/shirt1",
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: "$130",
    oldPrice: "$160",
    discount: "-30%",
    rating: "4.5/5",
    image: "/Frame 38.png",  // Corrected image path (removed leading backslash)
    link: "/product/tshirt2",
  },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen p-8">
      {/* New Arrivals Heading */}
      <h1
        className="mb-10"
        style={{
          fontFamily: "'Integral CF', sans-serif",
          fontSize: "48px",
          fontWeight: "700",
          lineHeight: "57.6px",
          textAlign: "center",
          textDecoration: "underline",
          textDecorationSkipInk: "none",
        }}
      >
        New Arrivals
      </h1>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <Link href={product.link}>
              <div className="relative">
                {/* Adjusted Image Size */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"  // Adjusted height (h-56) to balance the card size
                />
              </div>
              <div className="p-4">
                {/* Product Name */}
                <h2 className="text-lg font-medium text-center">{product.name}</h2>
                {/* Product Rating */}
                <p className="text-gray-500 text-sm text-center">{product.rating}</p>
                {/* Price and Discount Section */}
                <div className="mt-2 flex justify-center items-center space-x-2">
                  <span className="text-lg font-semibold text-black">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <>
                      <span className="text-gray-500 line-through">
                        {product.oldPrice}
                      </span>
                      <span className="text-red-500 font-medium">
                        {product.discount}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-10 text-center">
        <Link href="/products">
          <div className="inline-block bg-white text-black px-6 py-2 rounded-full border-2 border-black hover:bg-gray-800 hover:text-white transition-all duration-300">
            View All
          </div>
        </Link>
      </div>
    </div>
  );
}
