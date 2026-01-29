import Image from "next/image";
import Button from "./ui/Button";
import Badge from "./ui/Badge";
import { HeroMain } from "../assets/images";

export default function Hero() {
  return (
    <section className="relative w-full pt-16 pb-12 overflow-hidden bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-[124px] flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-6">
          <Badge>Global Shopping, Made Simple</Badge>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[#181818] leading-[1.1] mb-6 max-w-4xl tracking-tight">
          Buy from International Stores. <br />
          We Deliver to Nigeria.
        </h1>

        {/* Image Section */}
        <div className="relative w-full max-w-5xl mb-6 px-4">
          <Image
            src={HeroMain}
            alt="International shopping items"
            width={1200}
            height={300}
            className="object-contain"
            priority
          />
        </div>

        {/* Description */}
        <p className="text-base text-gray-500 max-w-xl mb-6 leading-relaxed">
          We help{" "}
          <span className="text-gray-900 font-medium">
            Nigerians shop from abroad
          </span>
          , receive items at our overseas warehouse, and ship them safely to
          Nigeria, with clear pricing and full tracking.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button href="/get-started">Get Started</Button>
          <Button href="/how-it-works" variant="outline">
            How it Works
          </Button>
        </div>
      </div>
    </section>
  );
}
