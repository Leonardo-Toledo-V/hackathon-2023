import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function List({ title, subtitle, defaultContent, color }) {
  return (
    <Accordion>
      <AccordionItem  key="1" aria-label={`Accordion ${title}`} subtitle={subtitle} title={title} defaultContent={defaultContent} className="ml-5 text-white">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
