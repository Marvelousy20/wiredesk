"use client";
import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { LuPanelRightClose, LuPanelRightOpen } from "react-icons/lu";
import ProfileDetails from "./ProfileDetails";
import Attributes from "./Attributes";

interface ItemProps {
  isCollapsed: boolean;
  onCollapseToggle: () => void;
}

export default function Details({ isCollapsed, onCollapseToggle }: ItemProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      className={`col-span-2 transition-all duration-300 ease-in-out column-c ${
        isCollapsed ? "w-0" : "w-[23.076%]"
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
                isCollapsed ? "" : "px-8"
              }`}
            >
              <TabList
                className={`justify-between font-semibold text-xl text-blackInactive ${
                  isCollapsed ? "hidden" : "flex w-[85%]"
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
                  isCollapsed
                    ? "w-[100%] justify-center"
                    : "w-[15%] justify-end"
                }`}
                onClick={onCollapseToggle}
              >
                {isCollapsed ? (
                  <LuPanelRightOpen size={20} />
                ) : (
                  <LuPanelRightClose size={20} />
                )}
                {/* <span className="hover:bg-[#EEEFF1] rounded-[10px] p-1 hover:scale-110 transition-transform duration-200">
                  <LuPanelRightClose size={20} />
                </span> */}
              </button>
            </div>
            <TabPanels className={isCollapsed ? "hidden" : "block"}>
              <TabPanel>
                <ProfileDetails />
              </TabPanel>
              <TabPanel>
                <Attributes />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
}
