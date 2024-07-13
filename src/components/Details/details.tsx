"use client";
import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { LuPanelRightClose, LuPanelRightOpen } from "react-icons/lu";
import ProfileDetails from "./ProfileDetails";
import Comments from "./Comment";
import { useSidebar } from "@/context/sidebarContext";

export default function Details() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { isRightCollapsed, toggleRightSidebar } = useSidebar();

  return (
    <section
      className={`col-span-2 transition-all duration-300 ease-in-out column-c ${
        isRightCollapsed ? "w-0" : "w-[28.13%]"
      }`}
    >
      <div className="relative">
        <div className="">
          <TabGroup
            selectedIndex={selectedIndex}
            onChange={setSelectedIndex}
            className=""
          >
            <div
              className={`h-16 shadow-bottom w-full flex items-center shadow-b-2 ${
                isRightCollapsed ? "" : "px-8"
              }`}
            >
              <TabList
                className={`justify-between font-semibold text-xl text-blackInactive ${
                  isRightCollapsed ? "hidden" : "flex w-[85%]"
                }`}
              >
                <Tab
                  className={`data-[selected]:outline-none relative border-black data-[selected]:text-black ${
                    selectedIndex === 0 && "tab-selected"
                  }`}
                >
                  Details
                </Tab>
                <Tab
                  className={`data-[selected]:outline-none relative border-black data-[selected]:text-black ${
                    selectedIndex === 1 && "tab-selected"
                  }`}
                >
                  Comments
                </Tab>
              </TabList>

              <button
                className={`flex ${
                  isRightCollapsed
                    ? "w-[100%] justify-center"
                    : "w-[15%] justify-end"
                }`}
                onClick={toggleRightSidebar}
              >
                {isRightCollapsed ? (
                  <LuPanelRightOpen size={20} />
                ) : (
                  <LuPanelRightClose size={20} />
                )}
                {/* <span className="hover:bg-[#EEEFF1] rounded-[10px] p-1 hover:scale-110 transition-transform duration-200">
                  <LuPanelRightClose size={20} />
                </span> */}
              </button>
            </div>
            <TabPanels className={isRightCollapsed ? "hidden" : "block"}>
              <TabPanel>
                <ProfileDetails />
              </TabPanel>
              <TabPanel>
                <Comments />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
}
