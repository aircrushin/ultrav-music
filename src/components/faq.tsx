import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion";
import { CardContent, Card } from "@/components/ui/card";

const faqData = [
  {
    question: "Why does turning my device off and on again solve all issues?",
    answer: "Because it clears the memory and starts the system from scratch."
  },
  {
    question: "Are extra cables in the box bonus decorations?",
    answer: "As tempting as it is to weave them into artistic sculptures, those cables are essential for connecting, charging, and beaming digital magic."
  },
  {
    question: "Can I wear my VR headset to my cousin's wedding?",
    answer: "Yes but you might end up inadvertently dodging invisible dance partners or trying to high-five digital confetti."
  },
  {
    question: "How often should I update my software?",
    answer: "It's recommended to keep your software up to date to ensure you have the latest security patches and features."
  },
  {
    question: "Why does my device get hot when I'm using it?",
    answer: "Devices can generate heat during operation, especially when running intensive tasks. This is normal, but if it gets too hot, it may indicate a problem."
  }
];

export default function Component() {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-[600px] bg-[rgb(243 244 246 / var(--tw-bg-opacity))] border-none">
        <CardContent className="p-6">
          <Accordion className="w-full" type="multiple">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="hover:underline-none">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
