"use client";
import { useState } from "react";

import React from "react";
import { LuPanelLeftClose } from "react-icons/lu";
import { useSidebar } from "@/context/sidebarContext";

const SecondColumnWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isLeftCollapsed, toggleLeftSidebar } = useSidebar();

  return (
    <div
      className={`border-r h-full bg-secondColumn ${
        isLeftCollapsed ? "w-[0] hidden" : "w-[15.16%]"
      }`}
    >
      <div className={`h-16 sticky top-0 z-20 border-b border-[#2B2B2B]`}>
        <div
          className={`h-16 flex items-center justify-between w-full ${
            isLeftCollapsed ? "w-full" : "px-2"
          }`}
        >
          <h1
            className={`lg:text-xl font-bold text-white ${
              isLeftCollapsed ? "hidden" : "block"
            }`}
          >
            <span className="font-medium">Wire</span>Desk
          </h1>

          <button
            className={
              isLeftCollapsed
                ? "w-full justify-center absolute left-2 items-center hidden"
                : "w-full flex justify-end"
            }
          >
            <LuPanelLeftClose
              size={20}
              onClick={toggleLeftSidebar}
              color="#fff"
            />
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default SecondColumnWrapper;
