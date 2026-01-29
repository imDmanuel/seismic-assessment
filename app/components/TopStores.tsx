import Image from "next/image";
import Badge from "./ui/Badge";

const stores = [
  { name: "adidas", logo: "/images/addidas.png" },
  { name: "chanel", logo: "/images/chanel.png" },
  { name: "nike", logo: "/images/nike.png" },
  { name: "chanel-duplicate", logo: "/images/chanel.png" },
  { name: "amazon", logo: "/images/amazon.png" },
  { name: "ebay", logo: "/images/ebay.png" },
  { name: "the-north-face", logo: "/images/the-northern-face.png" },
  { name: "amazon-duplicate", logo: "/images/amazon.png" },
];

export default function TopStores() {
  return (
    <section className="w-full py-12 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-[124px] flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <Badge>Popular Stores</Badge>
          </div>
          <h2 className="text-4xl md:text-[48px] font-medium text-[#181818] mb-3">
            Top Stores Nigerians Shop From
          </h2>
          <p className="text-base text-[#717171] max-w-2xl mx-auto leading-relaxed">
            Shop from trusted international brands across fashion, electronics,
            home, and more. We handle the delivery from abroad and bring your
            items safely to Nigeria.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {stores.map((store, index) => (
            <div
              key={`${store.name}-${index}`}
              className="bg-[#EDEDED] aspect-video rounded-[24px] flex items-center justify-center p-8 hover:bg-[#e5e5e5] transition-colors w-full h-full"
            >
              <Image
                src={store.logo}
                alt={store.name}
                // fill
                width={192}
                height={132}
                className="object-contain w-[99px] h-[66px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
