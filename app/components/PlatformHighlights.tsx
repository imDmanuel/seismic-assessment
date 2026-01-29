import Image from "next/image";
import Badge from "./ui/Badge";
import {
  PackageReceiving,
  ParcelConsolidation,
  ShippingCostCalculator,
  RealtimeTracking,
  AssistedPurchase,
  OrderNotifications,
} from "../assets/images";

const highlights = [
  {
    title: "Package Receiving",
    description:
      "We receive your international orders at our overseas warehouse.",
    image: PackageReceiving,
  },
  {
    title: "Parcel Consolidation",
    description:
      "Combine multiple packages into one shipment to reduce shipping costs.",
    image: ParcelConsolidation,
  },
  {
    title: "Shipping Cost Calculator",
    description: "See your shipping cost before paying. No surprises.",
    image: ShippingCostCalculator,
  },
  {
    title: "Real-Time Tracking",
    description: "Track your package from warehouse to delivery in Nigeria.",
    image: RealtimeTracking,
  },
  {
    title: "Assisted Purchase",
    description:
      "If a store doesn't accept your card, share the product link and we'll help you buy it.",
    image: AssistedPurchase,
  },
  {
    title: "Order Notifications",
    description:
      "Get updates when your package arrives, ships, and is delivered.",
    image: OrderNotifications,
  },
];

function HighlightCard({ highlight }: { highlight: (typeof highlights)[0] }) {
  return (
    <div className="bg-white rounded-[32px] border border-[#F2F4F7] flex flex-col h-full overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-center overflow-hidden">
        <div className="w-full h-full transform hover:scale-105 transition-transform duration-500">
          <Image
            src={highlight.image}
            alt={highlight.title}
            width={400}
            height={324}
            className="object-contain w-full h-full"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
      <div className="p-5 pb-6">
        <h3 className="text-xl font-bold text-[#181818] mb-2">
          {highlight.title}
        </h3>
        <p className="text-base text-[#717171] leading-relaxed">
          {highlight.description}
        </p>
      </div>
    </div>
  );
}

export default function PlatformHighlights() {
  return (
    <section className="py-12 overflow-hidden bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <Badge>Platform Highlights</Badge>
          </div>
          <h2 className="text-4xl md:text-[52px] font-medium text-[#181818] mb-4 leading-tight">
            Everything You Need, In One Place
          </h2>
          <p className="text-base md:text-lg text-[#717171] max-w-2xl mx-auto">
            All your global shopping and shipping tools, together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <HighlightCard key={index} highlight={highlight} />
          ))}
        </div>
      </div>
    </section>
  );
}
