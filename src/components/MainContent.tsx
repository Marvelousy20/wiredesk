"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar/sidebar";
import Message from "./Message/message";
import Details from "./Details/details";

export default function MainContent() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDetailedSidebarCollapsed, setIsDetailedSidebarCollapsed] =
    useState(false);
  const [selected, setSelected] = useState("messages");

  const getMessageWidth = () => {
    let defaultWidth = "58.796%";

    if (isSidebarCollapsed) {
      defaultWidth = "73.412%";
    }
    if (isDetailedSidebarCollapsed) {
      defaultWidth = "81.872%";
    }
    if (isDetailedSidebarCollapsed && isSidebarCollapsed) {
      defaultWidth = "96.429%";
    }

    console.log(defaultWidth);

    return defaultWidth;
  };

  const handleSelect = (item: string) => {
    setSelected(item);
  };

  return (
    <div className={`w-full flex h-screen overflow-hidden`}>
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onCollapseToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        key={isSidebarCollapsed ? "collapsed" : "expanded"}
        onSelect={handleSelect}
        getMessageWidth={getMessageWidth}
        isDetailedSidebarCollapsed={isDetailedSidebarCollapsed}
        onDetailsCollapseToggle = {() =>
          setIsDetailedSidebarCollapsed(!isDetailedSidebarCollapsed)
        }
        selected={selected}
      />

      {/* <div
        className={`transition-all overflow-auto duration-300 ease-out column-b [58.796%]`}
        style={{ width: getMessageWidth() }}
      >
        <Message
          isCollapsedDetailsbar={isDetailedSidebarCollapsed}
          onCollapseToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          onDetailsCollapseToggle={() =>
            setIsDetailedSidebarCollapsed(!isDetailedSidebarCollapsed)
          }
          isCollapsed={isSidebarCollapsed}
        />
      </div>
      <Details
        isCollapsed={isDetailedSidebarCollapsed}
        onCollapseToggle={() =>
          setIsDetailedSidebarCollapsed(!isDetailedSidebarCollapsed)
        }
      /> */}
    </div>
  );
}
