"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar/sidebar";
import Message from "./Message/message";
import Details from "./Details/details";

export default function MainContent() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDetailedSidebarCollapsed, setIsDetailedSidebarCollapsed] =
    useState(false);

  const [widths, setWidths] = useState({
    sidebarWidth: "20%",
    detailsWidth: "20%",
    messageWidth: "60%",
    firstChildWidth: "20%",
  });

  const calculateWidths = () => {
    if (typeof window === "undefined") {
      return;
    }
    const totalWidth = window.innerWidth;
    const sidebarWidth = isSidebarCollapsed
      ? 0.04 * totalWidth
      : 0.2 * totalWidth;
    const detailsWidth = isDetailedSidebarCollapsed
      ? 0.04 * totalWidth
      : 0.2 * totalWidth;
    const messageWidth = totalWidth - sidebarWidth - detailsWidth;
    const firstChildWidth = 0.2 * totalWidth;

    setWidths({
      sidebarWidth: `${sidebarWidth}px`,
      detailsWidth: `${detailsWidth}px`,
      messageWidth: `${messageWidth}px`,
      firstChildWidth: `${firstChildWidth}px`,
    });
  };

  useEffect(() => {
    calculateWidths();
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
        width={widths.sidebarWidth}
      />

      <div
        className={`transition-all overflow-auto duration-300 ease-out`}
        style={{ width: widths.messageWidth }}
      >
        <Message
          isCollapsedDetailsbar={isDetailedSidebarCollapsed}
          onCollapseToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          detailsWidth={widths.firstChildWidth}
          isCollapsed={isSidebarCollapsed}
        />
      </div>
      <Details
        isCollapsed={isDetailedSidebarCollapsed}
        onCollapseToggle={() =>
          setIsDetailedSidebarCollapsed(!isDetailedSidebarCollapsed)
        }
        width={widths.detailsWidth}
      />
    </div>
  );
}
