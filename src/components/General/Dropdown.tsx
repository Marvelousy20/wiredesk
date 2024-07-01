"use client";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { MdOutlineMoreHoriz } from "react-icons/md";

interface DropdownProps {
  title?: string;
  items?: any;
}

const Dropdown = ({ title, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // resets to open when the component is mounted or remounted.
    setIsOpen(true);
  }, []);

  return (
    <div className="w-full mr-6 font-medium">
      <button
        className="flex justify-between items-center w-full p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <span>
            {isOpen ? (
              <ChevronDown size={15} color="#232529" />
            ) : (
              <ChevronUp size={15} color="#232529" />
            )}
          </span>
          <span className="text-[0.75rem] text-black font-medium">{title}</span>
        </div>

        <div className="hover:bg-[#EEEFF1] hover:scale-110 transition-transform duration-200">
          <MdOutlineMoreHoriz size={16} color="#232529" />
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
            <div
              key={index}
              className="pl-4 border-gray-300 hover:bg-[#EEEFF1] text-blackInactive"
            >
              {item}
            </div>
          ))}
        </div>
      </Transition>
    </div>
  );
};

export default Dropdown;
