import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function List({ title, subtitle }) {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion>
      <AccordionItem key="1" aria-label={`Accordion ${title}`} subtitle={subtitle} title={title} className="ml-5">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
