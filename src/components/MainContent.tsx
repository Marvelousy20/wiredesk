"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar/sidebar";
import Message from "./Message/message";
import Details from "./Details/details";

export default function MainContent() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDetailedSidebarCollapsed, setIsDetailedSidebarCollapsed] =
    useState(false);

  const calculateWidths = () => {
    const totalWidth = window.innerWidth;
    const sidebarWidth = isSidebarCollapsed
      ? 0.04 * totalWidth
      : 0.2 * totalWidth;
    const detailsWidth = isDetailedSidebarCollapsed
      ? 0.04 * totalWidth
      : 0.2 * totalWidth;
    const messageWidth = totalWidth - sidebarWidth - detailsWidth;
    const firstChildWidth = isDetailedSidebarCollapsed
      ? 0.2 * totalWidth
      : detailsWidth;

    return {
      sidebarWidth: `${sidebarWidth}px`,
      detailsWidth: `${detailsWidth}px`,
      messageWidth: `${messageWidth}px`,
      firstChildWidth: `${firstChildWidth}px`,
    };
  };

  const { sidebarWidth, detailsWidth, messageWidth, firstChildWidth } =
    calculateWidths();

  useEffect(() => {
    const handleResize = () => {
      calculateWidths();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarCollapsed, isDetailedSidebarCollapsed]);

  return (
    <div className="w-full flex h-screen overflow-hidden">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onCollapseToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        key={isSidebarCollapsed ? "collapsed" : "expanded"}
        width={sidebarWidth}
      />

      <div
        className={`transition-all overflow-auto duration-300`}
        style={{ width: messageWidth }}
      >
        <Message
          isCollapsedDetailsbar={isDetailedSidebarCollapsed}
          onCollapseToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          detailsWidth={firstChildWidth}
          isCollapsed={isSidebarCollapsed}
        />
      </div>
      <Details
        isCollapsed={isDetailedSidebarCollapsed}
        onCollapseToggle={() =>
          setIsDetailedSidebarCollapsed(!isDetailedSidebarCollapsed)
        }
        width={detailsWidth}
      />
    </div>
  );
}
