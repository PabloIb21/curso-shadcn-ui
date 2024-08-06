import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Page() {
  const items = [
    {
      title: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      title: "Is it styled?",
      content: "Yes. It comes with default styles that matches the other components' aesthetic.",
    },
    {
      title: "Is it animated?",
      content: "Yes. It's animated by default, but you can disable it if you prefer.",
    },
  ];

  return (
    <Accordion type="single" className="w-full">
      {
        items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))
      }
    </Accordion>
  );
}