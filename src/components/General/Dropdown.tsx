"use client";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import {
  MdOutlineMoreHoriz,
  MdArrowForwardIos,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";

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
    <div className="w-full font-medium">
      <button
        className="flex justify-between items-center w-full focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <span className="text-[0.82rem] text-secondColumnText font-medium">
            {title}
          </span>
        </div>

        <div className="">
          <span>
            {isOpen ? (
              <MdKeyboardArrowDown size={20} color="#BFBFBF" />
            ) : (
              <MdKeyboardArrowRight size={20} color="#BFBFBF" />
            )}
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
            <div
              key={index}
              className="border-gray-300 hover:bg-[#35353580] cursor-pointer hover:bg-opacity-50 text-secondColumnText"
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
