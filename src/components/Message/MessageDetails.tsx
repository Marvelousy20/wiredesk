"use client";
import Image from "next/image";
import {
  MdOutlinePersonAddAlt,
  MdOutlineGrade,
  MdOutlineMoreHoriz,
  MdOutlineSnooze,
  MdOutlineArchive,
  MdOutlineUnarchive,
} from "react-icons/md";
import { Button } from "@headlessui/react";
import { useState } from "react";
import { LuPanelRightClose } from "react-icons/lu";

interface MessageDetailsProps {
  isCollapsedDetailsbar: boolean;
  onCollapseToggle: () => void;
}

const MessageDetails = ({
  isCollapsedDetailsbar,
  onCollapseToggle,
}: MessageDetailsProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section>
      <div className="h-16 shadow-bottom flex items-center justify-between px-5 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2">
            <Image
              src="/messages/w-avatar.svg"
              alt="avatar"
              width={25}
              height={25}
            />
            <h1 className="font-semibold lg:text-lg text-black">James Books</h1>
          </div>

          <div className="flex items-center gap-x-3">
            <div className="relative">
              <Image
                src="/messages/w-avatar.svg"
                alt="avatar"
                width={20}
                height={20}
              />

              <Image
                src="/messages/i-avatar.svg"
                alt="avatar"
                width={20}
                height={20}
                className="absolute top-0 right-4"
              />
            </div>

            <div className="flex gap-x-3 items-center">
              <span className="hover:bg-[#EEEFF1] rounded-[10px] p-1 hover:scale-110 transition-transform duration-200">
                <MdOutlineMoreHoriz size={24} />
              </span>

              <span className="hover:bg-[#EEEFF1] rounded-[10px] p-1 hover:scale-110 transition-transform duration-200">
                <MdOutlinePersonAddAlt size={24} />
              </span>
              <span className="hover:bg-[#EEEFF1] rounded-[10px] p-1 hover:scale-110 transition-transform duration-200">
                <MdOutlineGrade size={24} />
              </span>

              <span className="hover:bg-[#EEEFF1] rounded-[10px] p-1 hover:scale-110 transition-transform duration-200">
                <MdOutlineSnooze size={24} />
              </span>

              <Button className="bg-black text-white p-1.5 px-2 text-sm rounded-md">
                {isOpen ? (
                  <span className="flex gap-1 items-center">
                    <MdOutlineArchive size={20} />
                    Close
                  </span>
                ) : (
                  <span className="flex gap-2 items-center">
                    <MdOutlineUnarchive size={20} />
                    Re-open
                  </span>
                )}
              </Button>
            </div>

            {isCollapsedDetailsbar && (
              <div className="cursor-pointer" onClick={onCollapseToggle}>
                <LuPanelRightClose size={20} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageDetails;
