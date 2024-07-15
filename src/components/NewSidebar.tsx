"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  MdOutlineCampaign,
  MdBarChart,
  MdOutlineSettings,
  MdOutlineRemove,
  MdOutlineMarkEmailUnread,
  MdOutlineGroups,
  MdOutlineSchool,
} from "react-icons/md";

interface SelectableItems {
  messages: string;
  connections: string;
  finance: string;
  settings: string;
  campaign: string;
  minus: string;
  mylo_last: string;
}

const NewSidebar = () => {
  const [selected, setSelected] = useState<SelectableItems | string>(
    "messages"
  );

  const handleSelect = (item: string) => {
    setSelected(item);
    // onSelect(item);
  };
  return (
    <div className={`border-r column-a1 w-[3.571%] bg-[#FBFBFB]`}>
      <div className="shadow-bottom h-16 justify-center flex items-center">
        <Image src="/sidebar/logo.svg" alt="logo" width={30} height={30} />
      </div>

      <div className="mt-2 flex flex-col items-center h-full pb-16">
        <div className="">
          <Link href="/">
            <button
              onClick={() => handleSelect("messages")}
              className={`mb-5 p-2 hover:scale-110 transition-transform duration-200 ${
                selected === "messages"
                  ? "bg-black rounded-lg"
                  : "hover:bg-[#EEEFF1] rounded-sm"
              }`}
            >
              <MdOutlineMarkEmailUnread
                size={selected === "messages" ? "24" : "20"}
                color={selected === "messages" ? "white" : ""}
              />
            </button>
          </Link>
        </div>

        <div>
          <Link href="/connections">
            <button
              onClick={() => handleSelect("connection")}
              className={`mb-5 p-2 hover:scale-110 transition-transform duration-200 ${
                selected === "connection"
                  ? "bg-black rounded-lg"
                  : "hover:bg-[#EEEFF1] rounded-sm"
              }`}
            >
              <svg
                width={selected === "connection" ? "24" : "20"}
                height={selected === "connection" ? "24" : "20"}
                viewBox="0 0 21 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6629 9.93715C20.779 9.66324 20.779 9.19896 19.6629 8.91957L17.1977 8.30601C16.0828 8.0321 14.9393 6.88441 14.6612 5.76959L14.0477 3.30438C13.7738 2.18819 13.3081 2.18819 13.0301 3.30438L12.4165 5.76959C12.1426 6.88441 10.9936 8.02799 9.87873 8.30601L7.41353 8.91957C6.29871 9.19348 6.29871 9.65913 7.41353 9.93715L9.87873 10.5507C10.9936 10.8246 12.1371 11.9737 12.4165 13.0885L13.0301 15.5537C13.304 16.6685 13.7683 16.6685 14.0477 15.5537L14.6612 13.0885C14.9351 11.9737 16.0828 10.8301 17.1977 10.5507L19.6629 9.93715ZM8.72694 3.81386C9.17615 3.70156 9.17615 3.5153 8.72694 3.40299L7.73127 3.1551C7.49041 3.08061 7.27135 2.94851 7.09308 2.77023C6.9148 2.59196 6.7827 2.3729 6.70821 2.13204L6.46032 1.13774C6.34801 0.687159 6.16312 0.687159 6.04945 1.13774L5.80156 2.13204C5.72707 2.3729 5.59496 2.59196 5.41669 2.77023C5.23842 2.94851 5.01936 3.08061 4.7785 3.1551L3.78283 3.40299C3.33362 3.5153 3.33362 3.70156 3.78283 3.81386L4.7785 4.06038C5.01919 4.13519 5.23809 4.2674 5.41631 4.44563C5.59454 4.62385 5.72675 4.84275 5.80156 5.08344L6.04945 6.07911C6.16175 6.52832 6.34664 6.52832 6.46032 6.07911L6.70821 5.08344C6.78301 4.84275 6.91523 4.62385 7.09345 4.44563C7.27168 4.2674 7.49057 4.13519 7.73127 4.06038L8.72694 3.81386ZM5.78512 12.6311C6.23434 12.5188 6.23434 12.3325 5.78512 12.2202L4.78946 11.9737C4.5483 11.8985 4.32911 11.7656 4.15085 11.5867C3.97259 11.4077 3.84063 11.188 3.7664 10.9465L3.51851 9.95085C3.4062 9.50164 3.22131 9.50164 3.10764 9.95085L2.85564 10.9465C2.78083 11.1872 2.64862 11.4061 2.47039 11.5843C2.29217 11.7626 2.07327 11.8948 1.83258 11.9696L0.836911 12.2161C0.387696 12.3284 0.387696 12.5147 0.836911 12.627L1.83258 12.8749C2.0739 12.9497 2.29326 13.0825 2.47157 13.2615C2.64988 13.4405 2.78173 13.6604 2.85564 13.902L3.10353 14.8963C3.21583 15.3469 3.40072 15.3469 3.5144 14.8963L3.76229 13.902C3.83678 13.6612 3.96888 13.4421 4.14716 13.2638C4.32543 13.0856 4.54449 12.9535 4.78535 12.879L5.78512 12.6311Z"
                  fill={selected === "connection" ? "#fff" : "#232529"}
                />
              </svg>
            </button>
          </Link>
        </div>

        <div>
          <Link href="/support">
            <button
              onClick={() => handleSelect("support")}
              className={`mb-5 p-2 hover:scale-110 transition-transform duration-200 ${
                selected === "support"
                  ? "bg-black rounded-lg"
                  : "hover:bg-[#EEEFF1] rounded-sm"
              }`}
            >
              <MdOutlineGroups
                size={selected === "support" ? "24" : "20"}
                color={selected === "support" ? "white" : ""}
              />
            </button>
          </Link>
        </div>

        <div>
          <button
            onClick={() => handleSelect("campaign")}
            className={`mb-5 p-2 hover:scale-110 transition-transform duration-200 ${
              selected === "campaign"
                ? "bg-black rounded-lg"
                : "hover:bg-[#EEEFF1] rounded-sm"
            }`}
          >
            <MdOutlineCampaign
              size={selected === "campaign" ? "24" : "20"}
              color={selected === "campaign" ? "white" : ""}
            />
          </button>
        </div>

        <div>
          <button
            onClick={() => handleSelect("finance")}
            className={`mb-5 p-2 hover:scale-110 transition-transform duration-200 ${
              selected === "finance"
                ? "bg-black rounded-lg"
                : "hover:bg-[#EEEFF1] rounded-sm"
            }`}
          >
            <MdBarChart
              size={selected === "finance" ? "24" : "20"}
              color={selected === "finance" ? "white" : ""}
            />
          </button>
        </div>

        <div>
          <button
            onClick={() => handleSelect("settings")}
            className={`mb-5 p-2 hover:scale-110 transition-transform duration-200 ${
              selected === "settings"
                ? "bg-black rounded-lg"
                : "hover:bg-[#EEEFF1] rounded-sm"
            }`}
          >
            <MdOutlineSettings
              size={selected === "settings" ? "24" : "20"}
              color={selected === "settings" ? "white" : ""}
            />
          </button>
        </div>

        <div className="flex-grow"></div>

        <div>
          <button
            onClick={() => handleSelect("mylo_last")}
            className={`mb-5 p-2 hover:scale-110 transition-transform duration-200 ${
              selected === "mylo_last"
                ? "bg-black rounded-lg"
                : "hover:bg-[#EEEFF1] rounded-sm"
            }`}
          >
            <MdOutlineSchool
              size={selected === "mylo_last" ? "24" : "20"}
              color={selected === "mylo_last" ? "white" : ""}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewSidebar;
