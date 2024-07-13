"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface SidebarState {
  isLeftCollapsed: boolean;
  isRightCollapsed: boolean;
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
}

const SidebarContext = createContext<SidebarState | undefined>(undefined);

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
}) => {
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [isRightCollapsed, setIsRightCollapsed] = useState(false);

  const toggleLeftSidebar = () => setIsLeftCollapsed((prev) => !prev);
  const toggleRightSidebar = () => setIsRightCollapsed((prev) => !prev);

  return (
    <SidebarContext.Provider
      value={{
        isLeftCollapsed,
        isRightCollapsed,
        toggleLeftSidebar,
        toggleRightSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
