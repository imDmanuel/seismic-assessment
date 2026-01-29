import Image from "next/image";
import {
  GlobalIcon,
  HouseIcon,
  GroupIcon,
  ShieldSearchIcon,
} from "../assets/images";

const services = [
  {
    icon: GlobalIcon,
    title: "Shop Globally",
    description: "Buy from US and other international stores.",
  },
  {
    icon: HouseIcon,
    title: "Overseas Warehouse",
    description: "We receive and process your items securely.",
  },
  {
    icon: GroupIcon,
    title: "Delivered to Nigeria",
    description: "Your package arrives at your chosen Nigerian address.",
  },
  {
    icon: ShieldSearchIcon,
    title: "Transparent & Secure",
    description: "Clear costs, real tracking, safe payments.",
  },
];

export default function ServiceHighlights() {
  return (
    <section className="py-12 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#EDEDED] rounded-[40px] p-8 flex flex-col items-center text-center group transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={52}
                  height={52}
                  className="w-[52px] h-[52px]"
                />
              </div>
              <h3 className="text-xl font-bold text-[#181818] mb-3">
                {service.title}
              </h3>
              <p className="text-base text-[#717171] leading-tight">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
