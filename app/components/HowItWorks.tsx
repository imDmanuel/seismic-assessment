import Badge from "./ui/Badge";

export default function HowItWorks() {
  return (
    <section
      className="relative w-full py-24 overflow-hidden leading-tight"
      style={{
        backgroundImage:
          'radial-gradient(circle, #F7F7F700 0%, #F7F7F7 50%), url("/images/how-it-works-bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-[124px] flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-24 relative z-10">
          <div className="mb-6 flex justify-center">
            <Badge>Simple Steps</Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-[#181818] mb-6">
            How it Works
          </h2>
          <p className="text-base text-[#717171] max-w-2xl mx-auto leading-relaxed">
            Buying from international stores doesn&apos;t have to be
            complicated. Here&apos;s how we make it simple.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative w-full max-w-[900px] mx-auto min-h-[1400px]">
          {/* Connector Lines (Desktop) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <svg
              className="w-full h-full"
              viewBox="0 0 900 1400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMin meet"
            >
              {/* Path 1 -> 2 (Jog) */}
              <path
                d="M 355 202 H 425 Q 450 202 450 227 V 427 Q 450 452 475 452 H 545"
                stroke="#003631"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Path 2 -> 3 (Vertical) */}
              <path
                d="M 725 715 V 810"
                stroke="#003631"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Vertical dots */}
              <circle cx="725" cy="745" r="3" fill="#003631" />
              <circle cx="725" cy="780" r="3" fill="#003631" />

              {/* Path 3 -> 4 (Jog) */}
              <path
                d="M 545 1052 H 475 Q 450 1052 450 1077 V 1277 Q 450 1302 425 1302 H 355"
                stroke="#003631"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Cards Layer */}
          <div className="relative z-10 flex flex-col gap-16 md:gap-0">
            {/* Step 1 */}
            <div className="flex justify-start md:h-[430px]">
              <div className="w-full md:w-[350px] flex flex-col gap-4">
                <div className="bg-white rounded-full flex items-center justify-between p-3 pl-6 shadow-sm border border-white">
                  <span className="text-2xl tracking-wider text-[#181818]">
                    STEP ONE
                  </span>
                  <div className="w-11 h-11 rounded-full border border-dashed border-[#003631] flex items-center justify-center">
                    <span className="text-lg text-[#003631]">01</span>
                  </div>
                </div>
                <div className="bg-white rounded-[40px] p-8 md:p-10 min-h-[250px] shadow-sm border border-white relative flex flex-col justify-end">
                  <div className="hidden md:block absolute top-[110px] -right-[5px] w-2.5 h-2.5 rounded-full bg-[#003631] border-2 border-white shadow-sm" />
                  <h3 className="text-2xl font-bold text-[#181818] mb-4">
                    Shop Online
                  </h3>
                  <p className="text-base text-[#717171] leading-relaxed">
                    Buy items from international stores that ship to our
                    overseas warehouse.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex justify-end md:-mt-[180px] md:h-[430px]">
              <div className="w-full md:w-[350px] flex flex-col gap-4">
                <div className="bg-white rounded-full flex items-center justify-between p-3 pl-6 shadow-sm border border-white">
                  <span className="text-2xl tracking-wider text-[#181818]">
                    STEP TWO
                  </span>
                  <div className="w-11 h-11 rounded-full border border-dashed border-[#003631] flex items-center justify-center">
                    <span className="text-lg text-[#003631]">02</span>
                  </div>
                </div>
                <div className="bg-white rounded-[40px] p-8 md:p-10 min-h-[250px] shadow-sm border border-white relative flex flex-col justify-end">
                  <div className="hidden md:block absolute top-[110px] -left-[5px] w-2.5 h-2.5 rounded-full bg-[#003631] border-2 border-white shadow-sm" />
                  <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[5px] w-2.5 h-2.5 rounded-full bg-[#003631] border-2 border-white shadow-sm" />
                  <h3 className="text-2xl font-bold text-[#181818] mb-4">
                    We Receive Your Item
                  </h3>
                  <p className="text-base text-[#717171] leading-relaxed">
                    Your order arrives at our shared overseas warehouse, where
                    it is checked in and prepared for shipping.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex justify-end md:mt-[95px] md:h-[430px]">
              <div className="w-full md:w-[350px] flex flex-col gap-4">
                <div className="bg-white rounded-full flex items-center justify-between p-3 pl-6 shadow-sm border border-white">
                  <span className="text-2xl tracking-wider text-[#181818]">
                    STEP THREE
                  </span>
                  <div className="w-11 h-11 rounded-full border border-dashed border-[#003631] flex items-center justify-center">
                    <span className="text-lg text-[#003631]">03</span>
                  </div>
                </div>
                <div className="bg-white rounded-[40px] p-8 md:p-10 min-h-[250px] shadow-sm border border-white relative flex flex-col justify-end">
                  <div className="hidden md:block absolute top-[110px] -left-[5px] w-2.5 h-2.5 rounded-full bg-[#003631] border-2 border-white shadow-sm" />
                  <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[5px] w-2.5 h-2.5 rounded-full bg-[#003631] border-2 border-white shadow-sm" />
                  <h3 className="text-2xl font-bold text-[#181818] mb-4">
                    Choose Shipping & Pay
                  </h3>
                  <p className="text-base text-[#717171] leading-relaxed">
                    Select your shipping option, view the cost, and complete
                    payment.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex justify-start md:-mt-[180px] md:h-[430px]">
              <div className="w-full md:w-[350px] flex flex-col gap-4">
                <div className="bg-white rounded-full flex items-center justify-between p-3 pl-6 shadow-sm border border-white">
                  <span className="text-2xl tracking-wider text-[#181818]">
                    STEP FOUR
                  </span>
                  <div className="w-11 h-11 rounded-full border border-dashed border-[#003631] flex items-center justify-center">
                    <span className="text-lg text-[#003631]">04</span>
                  </div>
                </div>
                <div className="bg-white rounded-[40px] p-8 md:p-10 min-h-[250px] shadow-sm border border-white relative flex flex-col justify-end">
                  <div className="hidden md:block absolute top-[110px] -right-[5px] w-2.5 h-2.5 rounded-full bg-[#003631] border-2 border-white shadow-sm" />
                  <h3 className="text-2xl font-bold text-[#181818] mb-4">
                    Delivered to Nigeria
                  </h3>
                  <p className="text-base text-[#717171] leading-relaxed">
                    Your package is shipped to Nigeria and delivered to your
                    address, with tracking updates along the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
