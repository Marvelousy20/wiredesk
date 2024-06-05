"use client";
import { useState } from "react";
import Image from "next/image";
import Inbox from "./Inbox/inbox";

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
    onSelect(item);
  };
  return (
    <section className="border-r-2 w-[20%] bg-[#FBFBFB]">
      <div className="grid grid-cols-6 h-full">
        <div className="col-span-1 border-r-2">
          <div className="shadow-sm py-5 px-3">
            <Image src="/sidebar/logo.svg" alt="logo" width={30} height={30} />
          </div>

          <div className="px-2 mt-2">
            <div className="">
              <button
                onClick={() => handleSelect("messages")}
                className={`mb-5 p-2 ${
                  selected === "messages" && "bg-black rounded-lg "
                }`}
              >
                <Image
                  src="/sidebar/email.png"
                  alt="email"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <div>
              <button
                onClick={() => handleSelect("mylo")}
                className={`mb-5 p-2 ${
                  selected === "mylo" && "bg-black rounded-lg "
                }`}
              >
                <Image
                  src="/sidebar/mylo.png"
                  alt="email"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <div>
              <button
                onClick={() => handleSelect("three")}
                className={`mb-5 p-2 ${
                  selected === "three" && "bg-black rounded-lg "
                }`}
              >
                <Image
                  src="/sidebar/three.png"
                  alt="email"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <div>
              <button
                onClick={() => handleSelect("campaign")}
                className={`mb-5 p-2 ${
                  selected === "campaign" && "bg-black rounded-lg "
                }`}
              >
                <Image
                  src="/sidebar/campaign.png"
                  alt="email"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <div>
              <button
                onClick={() => handleSelect("finance")}
                className={`mb-5 p-2 ${
                  selected === "finance" && "bg-black rounded-lg "
                }`}
              >
                <Image
                  src="/sidebar/finance.png"
                  alt="email"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <div>
              <button
                onClick={() => handleSelect("settings")}
                className={`mb-5 p-2 ${
                  selected === "settings" && "bg-black rounded-lg "
                }`}
              >
                <Image
                  src="/sidebar/settings.png"
                  alt="email"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <div>
              <button
                onClick={() => handleSelect("minus")}
                className={`mb-5 p-2 ${
                  selected === "minus" && "bg-black rounded-lg "
                }`}
              >
                <Image
                  src="/sidebar/minus.png"
                  alt="email"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <div>
              <button
                onClick={() => handleSelect("mylo_last")}
                className={`mb-5 p-2 ${
                  selected === "mylo_last" && "bg-black rounded-lg "
                }`}
              >
                <Image
                  src="/sidebar/mylo_last.png"
                  alt="email"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Corresponding items */}
        <div className="col-span-5 h-full">
          {/* <div className={`border-r-2 bg-[#FBFBFB] transition-all duration-300`}> */}
          <div className="py-5 px-10 shadow-sm flex items-center justify-between">
            <h1 className="font-semibold text-xl">WireDesk</h1>

            <button onClick={onCollapseToggle}>
              <Image
                src="/sidebar/items/collapse.svg"
                width={18}
                height={18}
                alt="collapse"
              />
            </button>
          </div>

          <div className="px-2 mt-2">
            {selected === "messages" && <Inbox />}
          </div>
        </div>
      </div>
    </section>
  );
}
