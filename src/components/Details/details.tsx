import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { LuPanelRightClose } from "react-icons/lu";
import ProfileDetails from "./ProfileDetails";
import Attributes from "./Attributes";

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
            <div
              className={`h-16 shadow-bottom w-full flex items-center shadow-b-2 ${
                isCollapsed ? "" : "px-8"
              }`}
            >
              <TabList
                className={`justify-between font-semibold text-lg ${
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
                <LuPanelRightClose size={20} />
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
