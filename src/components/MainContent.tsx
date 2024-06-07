"use client";

import { useState } from "react";
import Sidebar from "./Sidebar/sidebar";
import Message from "./Message/message";
import Details from "./Details/details";

export default function MainContent() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="w-full flex h-screen">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onCollapseToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <div
        className={`transition-all duration-300 ${
          isSidebarCollapsed ? "w-[70%]" : "w-[60%]"
        }`}
      >
        <Message />
      </div>
      <Details />
    </div>
  );
}
