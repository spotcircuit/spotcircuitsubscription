import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { FAQPageSchema } from './StructuredData'

const faqs = [
  {
    question: "What makes medical spa SEO different from regular SEO?",
    answer: "Medical spa SEO requires specialized knowledge of HIPAA compliance, medical terminology, and local healthcare regulations. It also needs to target high-intent keywords specific to aesthetic treatments and medical procedures."
  },
  {
    question: "How long does it take to see results from medical spa SEO?",
    answer: "While initial improvements can be seen in 3-4 months, significant results typically emerge within 6-8 months. This timeline allows for proper implementation of strategies, content creation, and search engine recognition of your authority in the medical spa space."
  },
  {
    question: "What's the ROI for medical spa SEO?",
    answer: "Our medical spa clients typically see a 300-500% ROI within the first year. This includes increased bookings for high-value treatments like laser therapy, body contouring, and anti-aging procedures, with average patient values ranging from $2,000 to $5,000."
  },
  {
    question: "How do you handle local SEO for medical spas?",
    answer: "We implement a comprehensive local SEO strategy including Google Business Profile optimization, local citation building, location-specific landing pages, and targeted content that attracts patients within your service area."
  },
  {
    question: "What's the difference between AEO and traditional SEO?",
    answer: "While traditional SEO focuses on ranking for keywords, AEO (Answer Engine Optimization) optimizes your content to appear in voice search results and featured snippets. This is crucial as 82% of medical spa searches are now voice-based."
  },
  {
    question: "Do you guarantee first page rankings?",
    answer: "While we don't guarantee specific rankings (as this would violate Google's guidelines), we have a proven track record of achieving first page results for our medical spa clients through ethical, white-hat SEO practices."
  },
  {
    question: "How do you track ROI for medical spas?",
    answer: "We track key metrics including appointment bookings, treatment inquiries, conversion rates, and patient acquisition costs. We also implement call tracking and form analytics to measure lead quality and conversion value."
  },
  {
    question: "What makes SpotCircuit different from other SEO agencies?",
    answer: "We specialize exclusively in medical spa and aesthetic practice marketing, with a focus on AEO and voice search optimization. Our team understands the unique challenges and opportunities in the medical spa industry."
  }
];

export default function FAQ() {
  return (
    <>
      <FAQPageSchema faqs={faqs} />
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently Asked Questions About Medical Spa SEO & AEO
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </dl>
        </div>
      </section>
    </>
  );
}
