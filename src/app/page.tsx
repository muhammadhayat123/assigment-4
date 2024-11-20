import Image from "next/image";
import Hero from "./components/Hero/page";
import Navbar from "./components/Navbar/page";
import Products from "./components/Products/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />

    </div>
  );
}
