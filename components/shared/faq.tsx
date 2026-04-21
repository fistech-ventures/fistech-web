"use client";

import gsap from "gsap";
import React, { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IFAQ } from "@/types";
import { useGSAP } from "@gsap/react";

export default function FAQSection({
  isShowTitle = true,
  faqs,
}: {
  isShowTitle?: boolean;
  faqs: IFAQ[];
}) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!titleRef.current) return;

      const words = titleRef.current.innerText.split(" ");
      titleRef.current.innerHTML = "";

      const spans: HTMLSpanElement[] = [];

      words.forEach((word) => {
        const span = document.createElement("span");
        span.innerText = word + " ";
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(40px)";
        titleRef.current?.appendChild(span);
        spans.push(span);
      });

      gsap.to(spans, {
        opacity: 1,
        y: 0,
        stagger: 0.06,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1.2,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="section-gap" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-4">
        {isShowTitle && (
          <h2
            ref={titleRef}
            className="section-title font-semibold max-w-4xl mx-auto py-5 text-center"
          >
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
              className="border rounded-xl bg-[#F2F2F2] px-6 data-[state=open]:bg-white transition-all duration-300"
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
