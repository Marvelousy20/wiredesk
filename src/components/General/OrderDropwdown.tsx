"use client";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface OrderDropwdownProps {
  title?: string;
  items?: any;
}

const OrderDropdown = ({ title, items }: OrderDropwdownProps) => {
  const [isOpen, setIsOpen] = useState(true);

  console.log(isOpen);

  return (
    <div className="">
      <button
        className="flex justify-between items-center w-full p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <span className="text-[0.75rem]">{title}</span>

          <span>
            {isOpen ? <ChevronDown size={15} /> : <ChevronUp size={15} />}
          </span>
        </div>
      </button>

      <Transition
        show={isOpen}
        enter="transition-all duration-300"
        enterFrom="opacity-0 max-h-0"
        enterTo="opacity-100 max-h-screen"
        leave="transition-all duration-300"
        leaveFrom="opacity-100 max-h-screen"
        leaveTo="opacity-0 max-h-0"
      >
        <div className="overflow-hidden">
          {items?.map((item: string, index: number) => (
            <div key={index} className="pl-4 border-gray-300">
              {item}
            </div>
          ))}
        </div>
      </Transition>
    </div>
  );
};

export default OrderDropdown;
