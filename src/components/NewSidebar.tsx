"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  MdOutlineCampaign,
  MdBarChart,
  MdOutlineSettings,
  MdContactless,
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
    <div className={`column-a1 w-[3.571%] bg-narrowSidebar pb-4`}>
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
                  ? "bg-sidebarSelected rounded-[4px]"
                  : "hover:bg-sidebarSelected rounded-sm"
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3779_6929)">
                  <mask
                    id="mask0_3779_6929"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_3779_6929)">
                    <path
                      d="M4.5 17C4.09722 17 3.74653 16.8507 3.44792 16.5521C3.14931 16.2535 3 15.9028 3 15.5V4.5C3 4.0875 3.14931 3.73438 3.44792 3.44063C3.74653 3.14688 4.09722 3 4.5 3H15.5C15.9125 3 16.2656 3.14688 16.5594 3.44063C16.8531 3.73438 17 4.0875 17 4.5V15.5C17 15.9028 16.8531 16.2535 16.5594 16.5521C16.2656 16.8507 15.9125 17 15.5 17H4.5ZM10 13C10.5556 13 11.0278 12.8056 11.4167 12.4167C11.8056 12.0278 12 11.5556 12 11H15.5V4.5H4.5V11H8C8 11.5556 8.19444 12.0278 8.58333 12.4167C8.97222 12.8056 9.44444 13 10 13Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3779_6929">
                    <rect
                      width="20"
                      height="20"
                      fill={selected === "messages" ? "#fff" : "#EEEFF1"}
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </Link>
        </div>

        {/* <div>
          <Link href="/automation">
            <button
              onClick={() => handleSelect("automation")}
              className={`mb-5 p-2 hover:scale-110 transition-transform duration-200 ${
                selected === "automation"
                  ? "bg-sidebarSelected rounded-[4px]"
                  : "hover:bg-sidebarSelected rounded-sm"
              }`}
            >
              <svg
                width={selected === "automation" ? "24" : "20"}
                height={selected === "automation" ? "24" : "20"}
                viewBox="0 0 21 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6629 9.93715C20.779 9.66324 20.779 9.19896 19.6629 8.91957L17.1977 8.30601C16.0828 8.0321 14.9393 6.88441 14.6612 5.76959L14.0477 3.30438C13.7738 2.18819 13.3081 2.18819 13.0301 3.30438L12.4165 5.76959C12.1426 6.88441 10.9936 8.02799 9.87873 8.30601L7.41353 8.91957C6.29871 9.19348 6.29871 9.65913 7.41353 9.93715L9.87873 10.5507C10.9936 10.8246 12.1371 11.9737 12.4165 13.0885L13.0301 15.5537C13.304 16.6685 13.7683 16.6685 14.0477 15.5537L14.6612 13.0885C14.9351 11.9737 16.0828 10.8301 17.1977 10.5507L19.6629 9.93715ZM8.72694 3.81386C9.17615 3.70156 9.17615 3.5153 8.72694 3.40299L7.73127 3.1551C7.49041 3.08061 7.27135 2.94851 7.09308 2.77023C6.9148 2.59196 6.7827 2.3729 6.70821 2.13204L6.46032 1.13774C6.34801 0.687159 6.16312 0.687159 6.04945 1.13774L5.80156 2.13204C5.72707 2.3729 5.59496 2.59196 5.41669 2.77023C5.23842 2.94851 5.01936 3.08061 4.7785 3.1551L3.78283 3.40299C3.33362 3.5153 3.33362 3.70156 3.78283 3.81386L4.7785 4.06038C5.01919 4.13519 5.23809 4.2674 5.41631 4.44563C5.59454 4.62385 5.72675 4.84275 5.80156 5.08344L6.04945 6.07911C6.16175 6.52832 6.34664 6.52832 6.46032 6.07911L6.70821 5.08344C6.78301 4.84275 6.91523 4.62385 7.09345 4.44563C7.27168 4.2674 7.49057 4.13519 7.73127 4.06038L8.72694 3.81386ZM5.78512 12.6311C6.23434 12.5188 6.23434 12.3325 5.78512 12.2202L4.78946 11.9737C4.5483 11.8985 4.32911 11.7656 4.15085 11.5867C3.97259 11.4077 3.84063 11.188 3.7664 10.9465L3.51851 9.95085C3.4062 9.50164 3.22131 9.50164 3.10764 9.95085L2.85564 10.9465C2.78083 11.1872 2.64862 11.4061 2.47039 11.5843C2.29217 11.7626 2.07327 11.8948 1.83258 11.9696L0.836911 12.2161C0.387696 12.3284 0.387696 12.5147 0.836911 12.627L1.83258 12.8749C2.0739 12.9497 2.29326 13.0825 2.47157 13.2615C2.64988 13.4405 2.78173 13.6604 2.85564 13.902L3.10353 14.8963C3.21583 15.3469 3.40072 15.3469 3.5144 14.8963L3.76229 13.902C3.83678 13.6612 3.96888 13.4421 4.14716 13.2638C4.32543 13.0856 4.54449 12.9535 4.78535 12.879L5.78512 12.6311Z"
                  fill={selected === "automation" ? "#fff" : "#232529"}
                />
              </svg>
            </button>
          </Link>
        </div> */}

        <div>
          <Link href="/automation">
            <button
              onClick={() => handleSelect("automation")}
              className={`mb-5 p-2 hover:scale-110 transition-transform duration-200 ${
                selected === "automation"
                  ? "bg-sidebarSelected rounded-[4px]"
                  : "hover:bg-sidebarSelected rounded-sm"
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_3779_6936"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_3779_6936)">
                  <mask
                    id="mask1_3779_6936"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask1_3779_6936)">
                    <path
                      d="M9.10417 14.8125L12.9167 10H9.8125L10.3542 5.39583L6.75 11H9.79167L9.10417 14.8125ZM7 18L8 12.5H4L10.75 2H12.25L11.5 8.5H16L8.5 18H7Z"
                      fill={selected === "automation" ? "#fff" : "#EEEFF1"}
                    />
                  </g>
                </g>
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
                  ? "bg-sidebarSelected rounded-[4px]"
                  : "hover:bg-sidebarSelected rounded-sm"
              }`}
            >
              <MdOutlineGroups
                size={selected === "support" ? "24" : "20"}
                color={selected === "support" ? "white" : "#EEEFF1"}
              />
            </button>
          </Link>
        </div>

        <div>
          <button
            onClick={() => handleSelect("campaign")}
            className={`mb-5 p-2 hover:scale-110 transition-transform duration-200 ${
              selected === "campaign"
                ? "bg-sidebarSelected rounded-[4px]"
                : "hover:bg-sidebarSelected rounded-sm"
            }`}
          >
            <MdOutlineCampaign
              size={selected === "campaign" ? "24" : "20"}
              color={selected === "campaign" ? "white" : "#EEEFF1"}
            />
          </button>
        </div>

        <div>
          <button
            onClick={() => handleSelect("finance")}
            className={`mb-5 p-2 hover:scale-110 transition-transform duration-200 ${
              selected === "finance"
                ? "bg-sidebarSelected rounded-[4px]"
                : "hover:bg-sidebarSelected rounded-sm"
            }`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 14C1.0875 14 0.734375 13.8531 0.440625 13.5594C0.146875 13.2656 0 12.9125 0 12.5V0H1.5V12.5H14V14H1.5ZM2.5 11.5V4.5H5.5V11.5H2.5ZM6.5 11.5V1H9.5V11.5H6.5ZM10.5 11.5V7.5H13.5V11.5H10.5Z"
                fill={selected === "finance" ? "#fff" : "#EEEFF1"}
              />
            </svg>
          </button>
        </div>

        {/* <div>
          <button
            onClick={() => handleSelect("settings")}
            className={`mb-5 p-2 hover:scale-110 transition-transform duration-200 ${
              selected === "settings"
                ? "bg-sidebarSelected rounded-[4px]"
                : "hover:bg-sidebarSelected rounded-sm"
            }`}
          >
            <MdOutlineSettings
              size={selected === "settings" ? "24" : "20"}
              color={selected === "settings" ? "white" : ""}
            />
          </button>
        </div> */}

        <div className="flex-grow"></div>
        <div>
          <Link href="/connections">
            <button
              onClick={() => handleSelect("connection")}
              className={`mb-5 p-2 hover:scale-110 transition-transform duration-200 ${
                selected === "connection"
                  ? "bg-sidebarSelected rounded-[4px]"
                  : "hover:bg-sidebarSelected rounded-sm"
              }`}
            >
              <MdContactless
                size={selected === "connection" ? "24" : "20"}
                color={selected === "connection" ? "white" : "#EEEFF1"}
              />
            </button>
          </Link>
        </div>
        <div>
          <button
            onClick={() => handleSelect("mylo_last")}
            className={`mb-5 p-2 hover:scale-110 transition-transform duration-200 ${
              selected === "mylo_last"
                ? "bg-sidebarSelected rounded-[4px]"
                : "hover:bg-sidebarSelected rounded-sm"
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3782_6964)">
                <mask
                  id="mask0_3782_6964"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_3782_6964)">
                  <path
                    d="M8.396 18L7.93766 15.625C7.61822 15.5 7.30919 15.3542 7.01058 15.1875C6.71197 15.0208 6.43072 14.8264 6.16683 14.6042L3.87516 15.375L2.271 12.6042L4.0835 11.0208C4.05572 10.8542 4.03488 10.6875 4.021 10.5208C4.00711 10.3542 4.00016 10.1806 4.00016 10C4.00016 9.81944 4.00711 9.64583 4.021 9.47917C4.03488 9.3125 4.05572 9.14583 4.0835 8.97917L2.271 7.39583L3.87516 4.625L6.16683 5.39583C6.43072 5.17361 6.71197 4.97917 7.01058 4.8125C7.30919 4.64583 7.61822 4.5 7.93766 4.375L8.396 2H11.6043L12.0627 4.375C12.3821 4.5 12.6911 4.64583 12.9897 4.8125C13.2884 4.97917 13.5696 5.17361 13.8335 5.39583L16.1252 4.625L17.7293 7.39583L15.9168 8.97917C15.9446 9.14583 15.9654 9.3125 15.9793 9.47917C15.9932 9.64583 16.0002 9.81944 16.0002 10C16.0002 10.1806 15.9932 10.3542 15.9793 10.5208C15.9654 10.6875 15.9446 10.8542 15.9168 11.0208L17.7293 12.6042L16.1252 15.375L13.8335 14.6042C13.5696 14.8264 13.2884 15.0208 12.9897 15.1875C12.6911 15.3542 12.3821 15.5 12.0627 15.625L11.6043 18H8.396ZM9.62516 16.5H10.3752L10.771 14.4375C11.2988 14.3403 11.7918 14.1597 12.2502 13.8958C12.7085 13.6319 13.1043 13.2986 13.4377 12.8958L15.4377 13.5625L15.8127 12.9375L14.2293 11.5417C14.3127 11.3056 14.3786 11.059 14.4272 10.8021C14.4759 10.5451 14.5002 10.2778 14.5002 10C14.5002 9.72222 14.4759 9.45486 14.4272 9.19792C14.3786 8.94097 14.3127 8.69444 14.2293 8.45833L15.8127 7.0625L15.4377 6.4375L13.4377 7.10417C13.1043 6.70139 12.7085 6.36806 12.2502 6.10417C11.7918 5.84028 11.2988 5.65972 10.771 5.5625L10.3752 3.5H9.62516L9.22933 5.5625C8.70155 5.65972 8.2085 5.84028 7.75016 6.10417C7.29183 6.36806 6.896 6.70139 6.56266 7.10417L4.56266 6.4375L4.18766 7.0625L5.771 8.45833C5.68766 8.69444 5.62169 8.94097 5.57308 9.19792C5.52447 9.45486 5.50016 9.72222 5.50016 10C5.50016 10.2778 5.52447 10.5451 5.57308 10.8021C5.62169 11.059 5.68766 11.3056 5.771 11.5417L4.18766 12.9375L4.56266 13.5625L6.56266 12.8958C6.896 13.2986 7.29183 13.6319 7.75016 13.8958C8.2085 14.1597 8.70155 14.3403 9.22933 14.4375L9.62516 16.5ZM10.0002 13C10.8335 13 11.5418 12.7083 12.1252 12.125C12.7085 11.5417 13.0002 10.8333 13.0002 10C13.0002 9.16667 12.7085 8.45833 12.1252 7.875C11.5418 7.29167 10.8335 7 10.0002 7C9.16683 7 8.4585 7.29167 7.87516 7.875C7.29183 8.45833 7.00016 9.16667 7.00016 10C7.00016 10.8333 7.29183 11.5417 7.87516 12.125C8.4585 12.7083 9.16683 13 10.0002 13Z"
                    fill={selected === "settings" ? "#fff" : "#EEEFF1"}
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_3782_6964">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <div>
          <Image
            src="/sidebar/avatar.png"
            alt="avatar"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default NewSidebar;
