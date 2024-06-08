import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { LuPanelRightClose } from "react-icons/lu";
import ProfileDetails from "./ProfileDetails";

interface ItemProps {
  isCollapsed: boolean;
  onCollapseToggle: () => void;
}

export default function Details({ isCollapsed, onCollapseToggle }: ItemProps) {
  return (
    <section className={`col-span-2 ${isCollapsed ? "w-[5%]" : "w-[20%]"}`}>
      <div className="relative">
        <div className="">
          <TabGroup className="">
            <div className="h-16 shadow-sm w-full flex items-center px-8">
              <TabList
                className={`justify-between font-semibold text-xl ${
                  isCollapsed ? "hidden" : "flex w-[85%]"
                }`}
              >
                <Tab className="data-[selected]:border-b-2 data-[selected]:outline-none  border-black data-[selected]:opacity-100 opacity-75">
                  Details
                </Tab>
                <Tab className="data-[selected]:border-b-2 data-[selected]:outline-none border-black data-[selected]:opacity-100 opacity-75">
                  Attributes
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
                <LuPanelRightClose size={20} className="cursor-pointer" />
              </button>
            </div>
            <TabPanels className={isCollapsed ? "hidden" : "block"}>
              <TabPanel>
                <ProfileDetails />
              </TabPanel>
              <TabPanel>Content 2</TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
}
