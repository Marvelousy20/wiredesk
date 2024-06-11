"use client";

import { useState } from "react";
import Sidebar from "./Sidebar/sidebar";
import Message from "./Message/message";
import Details from "./Details/details";

export default function MainContent() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDetailedSidebarCollapsed, setIsDetailedSidebarCollapsed] =
    useState(false);

  const getMessageWidth = () => {
    if (isSidebarCollapsed && isDetailedSidebarCollapsed) {
      return "w-[85%]";
    } else if (isSidebarCollapsed || isDetailedSidebarCollapsed) {
      return "w-[75%]";
    } else {
      return "w-[60%]";
    }
  };

  console.log(isDetailedSidebarCollapsed);

  return (
    <div className="w-full flex h-screen">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onCollapseToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <div className={`transition-all duration-300 ${getMessageWidth()}`}>
        <Message isCollapsedSidebar={isDetailedSidebarCollapsed} />
      </div>
      <Details
        isCollapsed={isDetailedSidebarCollapsed}
        onCollapseToggle={() =>
          setIsDetailedSidebarCollapsed(!isDetailedSidebarCollapsed)
        }
      />
    </div>
  );
}
