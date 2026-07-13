import { useState } from "react";
import { accordionData } from "./shared/data.ts";
import { IAccordionData } from "./lib/types.ts";
import Accordion from "./components/Accordion.tsx";

function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <>
      <div>
        <h2>Accordion</h2>
        {accordionData.map((data: IAccordionData) => (
          <Accordion
            key={data.id}
            data={data}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <Accordion.Item>
              <Accordion.Toggle />
              <Accordion.Panel />
            </Accordion.Item>
          </Accordion>
        ))}
      </div>
    </>
  );
}

export default App;
