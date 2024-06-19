"use client";
import Image from "next/image";
import {
  MdOutlinePersonAddAlt,
  MdOutlineGrade,
  MdOutlinePhoneInTalk,
  MdOutlineSnooze,
  MdOutlineArchive,
  MdOutlineUnarchive,
} from "react-icons/md";
import { Button } from "@headlessui/react";
import { useState } from "react";

const MessageDetails = () => {
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
            <h1 className="font-semibold text-lg">James Books</h1>
          </div>

          <div className="flex items-center gap-10">
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
              <span className="text-2xl mb-2 font-bold">...</span>

              <span className="hover:bg-[#EEEFF1] rounded-full p-1">
                <MdOutlinePersonAddAlt size={24} />
              </span>
              <span className="hover:bg-[#EEEFF1] rounded-full p-1">
                <MdOutlineGrade size={24} />
              </span>
              <span className="hover:bg-[#EEEFF1] rounded-full p-1">
                <MdOutlinePhoneInTalk size={24} />
              </span>

              <span className="hover:bg-[#EEEFF1] rounded-full p-1">
                <MdOutlineSnooze size={24} />
              </span>

              <Button className="bg-black text-white p-2 text-sm rounded-md">
                {isOpen ? (
                  <span className="flex gap-2 items-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageDetails;
