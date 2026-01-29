import Image from "next/image";
import Badge from "./ui/Badge";

export default function WhoIsThisFor() {
  return (
    <section className="py-24 bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <Badge>Built for You</Badge>
          </div>
          <h2 className="text-2xl md:text-2xl font-medium text-[#181818] mb-4 leading-tight">
            Who Is This For?
          </h2>
          <p className="text-base md:text-lg text-[#717171] max-w-2xl mx-auto">
            Designed for Nigerians who shop internationally and want reliable
            delivery back home.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Card 1: Small Business Owners - Text Top, Image Bottom */}
          <div className="bg-white rounded-[32px] border border-[#F2F4F7] flex flex-col overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
            <div className="p-5">
              <h3 className="text-2xl font-bold text-[#181818] mb-2">
                Small Business Owners
              </h3>
              <p className="text-base text-[#717171] leading-relaxed">
                Importing items for resale in Nigeria.
              </p>
            </div>
            <div className="relative w-full aspect-[1.3/1] rounded-bl-3xl overflow-hidden">
              <Image
                src="/images/who-its-for/smal-business-featured.png"
                alt="Small Business Owners"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Card 2: Everyday Shoppers - Image Top, Text Bottom */}
          <div className="md:pt-24 w-full">
            <div className="bg-white rounded-[32px] border border-[#F2F4F7] flex flex-col overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
              <div className="relative w-full aspect-[1.3/1] rounded-tr-3xl overflow-hidden">
                <Image
                  src="/images/who-its-for/everyday-shoppers-featured.png"
                  alt="Everyday Shoppers"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-bold text-[#181818] mb-2">
                  Everyday Shoppers
                </h3>
                <p className="text-base text-[#717171] leading-relaxed">
                  Buying clothes, gadgets, and accessories from abroad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
