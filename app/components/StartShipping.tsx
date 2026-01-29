import Image from "next/image";
import Button from "./ui/Button";

export default function StartShipping() {
  return (
    <section className="py-12 bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-[124px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-[52px] font-bold text-[#181818] mb-4 leading-[1.1] tracking-tight">
              Start Shipping From <br />
              Abroad Without Stress
            </h2>
            <p className="text-lg text-[#717171] mb-8 max-w-lg leading-relaxed">
              Shop internationally with confidence and receive your items in
              Nigeria with ease.
            </p>
            <Button
              href="/get-started"
              className="bg-[#002B26] hover:bg-[#003631] px-10 py-4 text-lg"
            >
              Create an Account
            </Button>
          </div>

          {/* Right Illustrations Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Featured Image */}
            <div className="col-span-2 rounded-[32px] overflow-hidden relative border border-[#D7D7D7]">
              <Image
                src="/images/start-shipping/featured-1.png"
                alt="Shipping process 1"
                width={620}
                height={248}
                className="object-contain w-full h-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="rounded-[32px] overflow-hidden border border-[#D7D7D7]">
              <Image
                src="/images/start-shipping/featured-2.png"
                alt="Shipping process 2"
                width={298}
                height={248}
                className="object-contain w-full h-full"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="rounded-[32px] overflow-hidden border border-[#D7D7D7]">
              <Image
                src="/images/start-shipping/featured-3.png"
                alt="Shipping process 3"
                width={298}
                height={248}
                className="object-contain w-full h-full"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
