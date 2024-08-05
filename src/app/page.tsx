"use client";

import SecondColumnWrapper from "@/components/Common/SecondColumnWrapper";
import Inbox from "@/components/Sidebar/Inbox/inbox";
import Message from "@/components/Message/message";
// import Details from "@/components/Details/details";

import { useSidebar } from "@/context/sidebarContext";
import Details from "@/components/Details/Details";

export default function Home() {
  const { isRightCollapsed, isLeftCollapsed } = useSidebar();

  // const getMessageWidth = () => {
  //   let defaultWidth = "71.86%";
  //     defaultWidth = "86.476%";
  //   }
  //   if (isRightCollapsed) {
  //     defaultWidth = "94.94%";
  //   }
  //   if (isRightCollapsed && isLeftCollapsed) {
  //     defaultWidth = "96.429%";
  //   }

  //   console.log(defaultWidth);

  //   return defaultWidth;
  // };

  return (
    <main className="flex w-full h-full">
      <SecondColumnWrapper>
        <Inbox />
      </SecondColumnWrapper>

      <div className="w-[84.85%] flex flex-grow">
        <div
          className={`transition-all overflow-auto duration-300 ease-out column-b flex-grow`}
          // style={{ width: getMessageWidth() }}
        >
          <Message />
        </div>

        <Details />
      </div>
    </main>
  );
}
