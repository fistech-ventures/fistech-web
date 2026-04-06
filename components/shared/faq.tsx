import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";

export default function FAQSection({
  isShowTitle = true,
}: {
  isShowTitle?: boolean;
}) {
  return (
    <section className="section-gap">
      <div className="max-w-4xl mx-auto">
        {isShowTitle && (
          <h2 className="section-title font-semibold max-w-4xl mx-auto py-5 font-medium text-center">
            Frequently Asked Questions
          </h2>
        )}
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-xl bg-[#F2F2F2] px-6 data-[state=open]:bg-white data-[state=open]:pb-4 transition-all duration-300"
            >
              <AccordionTrigger className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold hover:no-underline py-6 text-left cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed"
                style={{ fontFamily: "var(--font-kanit)" }}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
