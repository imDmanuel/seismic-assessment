import Badge from "./ui/Badge";
import Button from "./ui/Button";

const faqs = [
  {
    question: "Do I get a personal warehouse address?",
    answer:
      "No. All packages are received at our shared overseas warehouse and processed securely.",
  },
  {
    question: "Do you handle customs fees?",
    answer:
      "Customs duties are determined by Nigerian customs and are not controlled by us.",
  },
  {
    question: "Can I shop from any international store?",
    answer: "Yes, as long as the store can ship to our warehouse location.",
  },
  {
    question: "Can I track my package?",
    answer: "Yes. You’ll receive tracking updates from warehouse to delivery.",
  },
  {
    question: "What if my item is damaged?",
    answer: "Optional insurance is available for eligible shipments.",
  },
];

export default function FAQs() {
  return (
    <section className="py-12 bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <Badge>Built for You</Badge>
          </div>
          <h2 className="text-4xl md:text-[52px] font-medium text-[#181818] mb-3 leading-tight">
            FAQs
          </h2>
          <p className="text-base text-[#717171] max-w-lg mx-auto leading-relaxed">
            Focused on your needs, our team delivers solutions to ensure
            adequate and secure buy and ship to Nigeria.
          </p>
        </div>

        {/* FAQs List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#EDEDED] rounded-[32px] p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                <h3 className="text-lg font-bold text-[#181818] leading-tight">
                  {faq.question}
                </h3>
                <p className="text-base text-[#717171] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-[#181818] mb-2">
            Still have a question?
          </h3>
          <p className="text-base text-[#717171] mb-8">
            Reach out to our support team.
          </p>
          <Button
            href="/contact"
            variant="outline"
            className="rounded-full px-12"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
