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
        <div className="text-center mb-8 relative z-10 max-w-[470px]">
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
        <div className="relative w-full max-w-[1000px] mx-auto pb-24">
          {/* Desktop Dual-Grid Layout */}
          <div className="hidden md:flex flex-col">
            {/* Block 1: Steps 1 & 2 */}
            <div className="grid grid-cols-[1fr_minmax(100px,180px)_1fr] items-start">
              {/* Step 1 */}
              <div className="col-start-1 row-start-1">
                <StepCard
                  number="01"
                  title="STEP ONE"
                  header="Shop Online"
                  description="Buy items from international stores that ship to our overseas warehouse."
                />
              </div>

              {/* Connector 1-2 (Skewed) */}
              <div className="col-start-2 row-start-1 row-span-2 relative pointer-events-none">
                <div className="absolute top-[200px] left-0 w-full">
                  <img
                    src="/images/one-two-connector.svg"
                    alt=""
                    className="w-full object-fill"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="col-start-3 row-start-2 -mt-[200px]">
                <StepCard
                  number="02"
                  title="STEP TWO"
                  header="We Receive Your Item"
                  description="Your order arrives at our shared overseas warehouse, where it is checked in and prepared for shipping."
                />
              </div>
            </div>

            {/* Vertical Bridge (Connector 2-3) */}
            <div className="grid grid-cols-[1fr_minmax(100px,180px)_1fr] relative z-0">
              <div className="col-start-3 flex justify-center relative h-[100px]">
                <div className="h-[100px]">
                  <img
                    src="/images/two-three-connector.svg"
                    alt=""
                    className="h-full w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Block 2: Steps 3 & 4 */}
            <div className="grid grid-cols-[1fr_minmax(100px,180px)_1fr] items-start">
              {/* Step 3 */}
              <div className="col-start-3 row-start-1">
                <StepCard
                  number="03"
                  title="STEP THREE"
                  header="Choose Shipping & Pay"
                  description="Select your shipping option, view the cost, and complete payment."
                />
              </div>

              {/* Connector 3-4 (Skewed) */}
              <div className="col-start-2 row-start-1 row-span-2 relative pointer-events-none">
                <div className="absolute top-[200px] left-0 w-full">
                  <img
                    src="/images/three-four-connector.svg"
                    alt=""
                    className="w-full object-fill"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="col-start-1 row-start-2 -mt-[200px]">
                <StepCard
                  number="04"
                  title="STEP FOUR"
                  header="Delivered to Nigeria"
                  description="Your package is shipped to Nigeria and delivered to your address, with tracking updates along the way."
                />
              </div>
            </div>
          </div>

          {/* Mobile Stack Layout */}
          <div className="flex md:hidden flex-col">
            <StepCardMobile
              number="01"
              title="STEP ONE"
              header="Shop Online"
              description="Buy items from international stores that ship to our overseas warehouse."
            />
            <MobileConnector />
            <StepCardMobile
              number="02"
              title="STEP TWO"
              header="We Receive Your Item"
              description="Your order arrives at our shared overseas warehouse, where it is checked in and prepared for shipping."
            />
            <MobileConnector />
            <StepCardMobile
              number="03"
              title="STEP THREE"
              header="Choose Shipping & Pay"
              description="Select your shipping option, view the cost, and complete payment."
            />
            <MobileConnector />
            <StepCardMobile
              number="04"
              title="STEP FOUR"
              header="Delivered to Nigeria"
              description="Your package is shipped to Nigeria and delivered to your address, with tracking updates along the way."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  number,
  title,
  header,
  description,
}: {
  number: string;
  title: string;
  header: string;
  description: string;
}) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="bg-white rounded-full flex items-center justify-between p-3 pl-6 shadow-sm border border-white">
        <span className="text-xl md:text-2xl tracking-wider text-[#181818]">
          {title}
        </span>
        <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-dashed border-[#003631] flex items-center justify-center">
          <span className="text-base md:text-lg text-[#003631]">{number}</span>
        </div>
      </div>
      <div className="bg-white rounded-[32px] md:rounded-[40px] p-8 md:p-10 min-h-[200px] md:min-h-[250px] shadow-sm border border-white relative flex flex-col justify-end group">
        <h3 className="text-xl md:text-2xl font-bold text-[#181818] mb-4">
          {header}
        </h3>
        <p className="text-sm md:text-base text-[#717171] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function StepCardMobile({
  number,
  title,
  header,
  description,
}: {
  number: string;
  title: string;
  header: string;
  description: string;
}) {
  return (
    <div className="w-full max-w-[350px] mx-auto flex flex-col gap-4">
      <div className="bg-white rounded-full flex items-center justify-between p-3 pl-6 shadow-sm border border-white">
        <span className="text-xl tracking-wider text-[#181818]">{title}</span>
        <div className="w-10 h-10 rounded-full border border-dashed border-[#003631] flex items-center justify-center">
          <span className="text-base text-[#003631]">{number}</span>
        </div>
      </div>
      <div className="bg-white rounded-[32px] p-8 min-h-[200px] shadow-sm border border-white flex flex-col justify-end">
        <h3 className="text-xl font-bold text-[#181818] mb-4">{header}</h3>
        <p className="text-sm text-[#717171] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function MobileConnector() {
  return (
    <div className="flex justify-center h-16 pointer-events-none z-0">
      <img
        src="/images/two-three-connector.svg"
        alt=""
        className="h-full w-auto"
      />
    </div>
  );
}
