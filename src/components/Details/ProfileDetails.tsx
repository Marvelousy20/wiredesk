"use client";
import { useState } from "react";

import Image from "next/image";
import {
  MdCall,
  MdEmail,
  MdAdd,
  MdOutlineKeyboardArrowDown,
  MdOpenInNew,
} from "react-icons/md";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import MessageCard from "../Message/MessageCard";
import Attributes from "./Attributes";

const ProfileDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section>
      {isExpanded ? (
        <div>
          <Attributes />
        </div>
      ) : (
        <section className="flex flex-col text-center items-center justify-center mt-5 w-full">
          <div className="relative">
            <div className="relative flex">
              <Image
                src="/messages/i-avatar.svg"
                alt="avatar"
                width={45}
                height={45}
              />

              {/* <Image
          src="/messages/instagram.svg"
          alt="instagram"
          width={14}
          height={14}
          className="absolute top-full right-0"
        /> */}
            </div>

            <div className="absolute top-0 -right-20 cursor-pointer hover:bg-[#EEEFF1] rounded-full p-1">
              <MdOpenInNew onClick={handleExpanded} />
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-sm font-medium mt-2 text-black">James Books</h1>
            <p className="text-blackInactive text-[0.75rem] mt-1">
              Springfield, USA
            </p>

            <div className="flex items-center gap-2 text-blackInactive text-[0.75rem] mt-2 justify-center">
              <MdCall size={15} /> <span>+1 (555) 123-4567</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-blackInactive text-[0.75rem] mt-1">
              <MdEmail size={15} /> <span>James.brooks@wiredesk.com</span>
            </div>
          </div>

          <div className="bg-[#F4f4f4] w-full mt-6 py-4 text-[0.75rem] text-start space-y-5 flex flex-col lg:px-7 text-blackInactive">
            <div className="flex justify-between w-full font-medium">
              <h1 className="w-1/2 pl-10">Assignee:</h1>
              <div className="flex gap-1 w-1/2">
                <Image
                  src="/messages/s-avatar.svg"
                  alt="avatar"
                  width={18}
                  height={18}
                />
                <h1 className="underline">Darwin Cooper</h1>
              </div>
            </div>

            <div className="flex justify-between font-medium">
              <h1 className="w-1/2 pl-10">Team:</h1>
              <div className="flex gap-1 w-1/2">
                <span>🧰</span>
                <h1 className="underline">Tier/Support</h1>
              </div>
            </div>
          </div>

          <div className="w-full text-[0.75rem] text-black">
            <div className="flex items-center border-b justify-between py-5 font-medium px-6">
              <h1>Create Ticket</h1>

              <button>
                <MdAdd size={15} />
              </button>
            </div>

            <div className="flex items-center px-6 border-b justify-between py-5 font-medium">
              <h1>Add to Bulk Ticket</h1>

              <button>
                <MdAdd size={15} />
              </button>
            </div>
          </div>

          <div className="w-full text-[0.75rem] font-medium text-black">
            <Disclosure
              as="div"
              className="border-b text-start"
              defaultOpen={true}
            >
              <DisclosureButton className="group flex w-full items-center justify-between bg-[#F4f4f4] p-6">
                <span className="font-semibold">Previous Conversations</span>
                <MdOutlineKeyboardArrowDown className="size-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 font-semibold">
                <MessageCard
                  img="/messages/w-avatar.svg"
                  name="James Books"
                  status="Sent"
                  time="12:15 PM"
                  platform="/messages/Whatsapp.svg"
                  unread={8}
                />
              </DisclosurePanel>
            </Disclosure>

            <Disclosure as="div" className="p-6 border-b text-start text-black">
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="font-semibold">Notes</span>
                <MdOutlineKeyboardArrowDown className="size-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2">No.</DisclosurePanel>
            </Disclosure>
          </div>
        </section>
      )}
    </section>
  );
};

export default ProfileDetails;
