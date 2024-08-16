import { Dispatch, SetStateAction } from "react";

export interface IAccordionData {
  id: number;
  title: string;
  body: string;
}

export interface IAccordionProps {
  data: IAccordionData;
  activeIndex: number | null;
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
  children: React.ReactNode;
}

export interface IAccordionContext {
  data: IAccordionData;
  activeIndex: number | null;
  handleToggle: () => void;
}
