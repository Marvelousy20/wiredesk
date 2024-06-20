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
  width: string;
}

export default function Sidebar({
  onSelect,
  isCollapsed,
  onCollapseToggle,
  width,
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
      className={`transition-width ease-in-out duration-300 bg-[#FBFBFB] ${
        isCollapsed ? "animate-" : "border-r animate-slidn"
      }`}
      style={{ width }}
    >
      <div className="flex w-full h-full justify-center">
        <div className={`border-r ${isCollapsed ? "w-[100%]" : "w-[20%]"}`}>
          <div className="shadow-bottom h-16 justify-center flex items-center">
            <Image src="/sidebar/logo.svg" alt="logo" width={30} height={30} />
          </div>

          <div className="mt-2 flex flex-col items-center h-full pb-16">
            <div className="">
              <button
                onClick={() => handleSelect("messages")}
                className={`mb-5 p-2 ${
                  selected === "messages" && "bg-black rounded-lg"
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
                  selected === "mylo" && "bg-black rounded-lg"
                }`}
              >
                <BsStars size={24} color={selected === "mylo" ? "white" : ""} />
              </button>
            </div>

            <div>
              <button
                onClick={() => handleSelect("support")}
                className={`mb-5 p-2 ${
                  selected === "support" && "bg-black rounded-lg"
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
                  selected === "campaign" && "bg-black rounded-lg"
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
                  selected === "finance" && "bg-black rounded-lg"
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
                  selected === "settings" && "bg-black rounded-lg"
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
                  selected === "mylo_last" && "bg-black rounded-lg"
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
          className={`${
            isCollapsed ? "w-[0%]" : "w-[80%]"
          } h-full transition-all duration-300`}
        >
          {/* <div className={`border-r-2 bg-[#FBFBFB] transition-all duration-300`}> */}
          <div className="h-16 sticky top-0 z-20">
            <div
              className={`h-16 flex items-center justify-between ${
                isCollapsed ? "w-full" : "px-2"
              }`}
            >
              <h1
                className={`font-semibold text-xl ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                <span className="font-normal">Wire</span>Desk
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
            className={` mt-2 h-full ${
              isCollapsed ? "hidden" : "block"
            } custom-scrollbar overflow-auto`}
          >
            {selected === "messages" && <Inbox />}
          </div>
        </div>
      </div>
    </section>
  );
}
