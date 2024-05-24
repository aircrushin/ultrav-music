import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion";
import { CardContent, Card } from "@/components/ui/card";

const faqData = [
  {
    question: "How old are you and when did you start making music?",
    answer: "I was born in 2002 and started making music when I was 16 (in middle school)."
  },
  {
    question: "What genres are you best at?",
    answer: "I make mostly electronic music, specifically tropical house/future bass, but I also like to make lofi music."
  },
  {
    question: "How can I contact/collab with you?",
    answer: "You can reach me at my email address: ultrav0229@gmail.com. also, you can add my wechat: aircrushin."
  },
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
