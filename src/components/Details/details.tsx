import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { LuPanelRightClose } from "react-icons/lu";
import ProfileDetails from "./ProfileDetails";

export default function Details() {
  return (
    <section className="col-span-2 w-[20%]">
      <div>
        <div className="h-16 shadow-sm px-5 flex items-center justify-between">
          <TabGroup className="w-3/4">
            <TabList className="w-full flex h-16 justify-between font-semibold text-xl">
              <Tab className="data-[selected]:border-b-2 border-black data-[selected]:opacity-100 opacity-75">
                Details
              </Tab>
              <Tab className="data-[selected]:border-b-2 border-black data-[selected]:opacity-100 opacity-75">
                Attributes
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>{/* <ProfileDetails /> */}</TabPanel>
              {/* <TabPanel>Content 2</TabPanel> */}
            </TabPanels>
          </TabGroup>

          <div>
            <LuPanelRightClose size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}
