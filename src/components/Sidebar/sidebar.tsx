"use client";
import { useState } from "react";
import Image from "next/image";
import Inbox from "./Inbox/inbox";
import {
  MdOutlineCampaign,
  MdBarChart,
  MdOutlineSettings,
  MdOutlineRemove,
  MdOutlineMarkEmailUnread,
  MdOutlineGroups,
  MdOutlineSchool,
} from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { LuPanelLeftClose } from "react-icons/lu";

interface SelectableItems {
  messages: string;
  mylo: string;
  finance: string;
  settings: string;
  campaign: string;
  minus: string;
  mylo_last: string;
}

interface ItemProps {
  onSelect?: any;
  isCollapsed: boolean;
  onCollapseToggle: () => void;
  // width: string;
}

export default function Sidebar({
  onSelect,
  isCollapsed,
  onCollapseToggle,
}: ItemProps) {
  const [selected, setSelected] = useState<SelectableItems | string>(
    "messages"
  );

  const handleSelect = (item: string) => {
    setSelected(item);
    // onSelect(item);
  };
  return (
    <section
      className={`transition-width ease-in-out duration-300 bg-[#FBFBFB] column-a ${
        isCollapsed ? "w-[3.571%]" : "w-[18.187%]"
      }`}
    >
      <div className="flex w-full h-full justify-center">
        <div
          className={`border-r column-a1 ${
            isCollapsed ? "w-full" : "w-[19.635%] "
          }`}
        >
          <div className="shadow-bottom h-16 justify-center flex items-center">
            <Image src="/sidebar/logo.svg" alt="logo" width={30} height={30} />
          </div>

          <div className="mt-2 flex flex-col items-center h-full pb-16">
            <div className="">
              <button
                onClick={() => handleSelect("messages")}
                className={`mb-5 p-2 ${
                  selected === "messages"
                    ? "bg-black rounded-lg"
                    : "hover:bg-[#EEEFF1] rounded-sm"
                }`}
              >
                <MdOutlineMarkEmailUnread
                  size={24}
                  color={selected === "messages" ? "white" : ""}
                />
              </button>
            </div>

            <div>
              <button
                onClick={() => handleSelect("mylo")}
                className={`mb-5 p-2 ${
                  selected === "mylo"
                    ? "bg-black rounded-lg"
                    : "hover:bg-[#EEEFF1] rounded-sm"
                }`}
              >
                <Image
                  src="/sidebar/navigation.svg"
                  alt="navigation"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <div>
              <button
                onClick={() => handleSelect("support")}
                className={`mb-5 p-2 ${
                  selected === "support"
                    ? "bg-black rounded-lg"
                    : "hover:bg-[#EEEFF1] rounded-sm"
                }`}
              >
                <MdOutlineGroups
                  size={24}
                  color={selected === "support" ? "white" : ""}
                />
              </button>
            </div>

            <div>
              <button
                onClick={() => handleSelect("campaign")}
                className={`mb-5 p-2 ${
                  selected === "campaign"
                    ? "bg-black rounded-lg"
                    : "hover:bg-[#EEEFF1] rounded-sm"
                }`}
              >
                <MdOutlineCampaign
                  size={24}
                  color={selected === "campaign" ? "white" : ""}
                />
              </button>
            </div>

            <div>
              <button
                onClick={() => handleSelect("finance")}
                className={`mb-5 p-2 ${
                  selected === "finance"
                    ? "bg-black rounded-lg"
                    : "hover:bg-[#EEEFF1] rounded-sm"
                }`}
              >
                <MdBarChart
                  size={24}
                  color={selected === "finance" ? "white" : ""}
                />
              </button>
            </div>

            <div>
              <button
                onClick={() => handleSelect("settings")}
                className={`mb-5 p-2 ${
                  selected === "settings"
                    ? "bg-black rounded-lg"
                    : "hover:bg-[#EEEFF1] rounded-sm"
                }`}
              >
                <MdOutlineSettings
                  size={24}
                  color={selected === "settings" ? "white" : ""}
                />
              </button>
            </div>

            <div className="flex-grow"></div>

            <div>
              <button
                onClick={() => handleSelect("mylo_last")}
                className={`mb-5 p-2 ${
                  selected === "mylo_last"
                    ? "bg-black rounded-lg"
                    : "hover:bg-[#EEEFF1] rounded-sm"
                }`}
              >
                <MdOutlineSchool
                  size={24}
                  color={selected === "mylo_last" ? "white" : ""}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Corresponding items */}

        <div
          className={`h-full transition-all duration-300 column-a2 ${
            isCollapsed ? "w-0" : "w-[80.365%]"
          }`}
        >
          <div className="h-16 sticky top-0 z-20">
            <div
              className={`h-16 flex items-center justify-between ${
                isCollapsed ? "w-full" : "px-2"
              }`}
            >
              <h1
                className={`font-bold lg:text-xl ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                <span className="font-medium">Wire</span>Desk
              </h1>

              <button
                onClick={onCollapseToggle}
                className={
                  isCollapsed
                    ? "w-full justify-center absolute left-2 items-center hidden"
                    : "w-full flex justify-end"
                }
              >
                <LuPanelLeftClose size={20} />
              </button>
            </div>
          </div>

          <div
            className={`w-full mt-2 h-full ${
              isCollapsed ? "hidden" : "block"
            } overflow-hidden hover:overflow-auto custom-scrollbar pr-[5px] hover:pr-[0]`}
          >
            {selected === "messages" && <Inbox />}
          </div>
        </div>
      </div>
    </section>
  );
}
