"use client";
import React, { useState, Suspense } from "react";
import SecondColumnWrapper from "@/components/Common/SecondColumnWrapper";
import AllApplication from "@/components/Connections/AllApplications";
import InsatlledApplications from "@/components/Connections/InstalledApplications";

const ConnectionHome = () => {
  const [selected, setSelected] = useState("all");

  const handleSelected = (item: string) => {
    setSelected(item);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="h-full flex">
        <SecondColumnWrapper>
          <div className="mr-3">
            <button
              onClick={() => handleSelected("all")}
              className={`
            flex items-center hover:bg-[#EEEFF1] w-full justify-between p-2 cursor-pointer font-medium 
            ${
              selected === "all"
                ? "bg-[#EEEFF1] rounded-tr-lg border-black rounded-r-[3px] container text-black"
                : "text-blackInactive"
            }`}
            >
              All applications
            </button>
          </div>

          <div className="mr-3 mt-2.5">
            <button
              onClick={() => handleSelected("installed")}
              className={`
              flex items-center hover:bg-[#EEEFF1] w-full justify-between p-2 cursor-pointer font-medium
              ${
                selected === "installed"
                  ? "bg-[#EEEFF1] rounded-tr-lg border-black rounded-r-[3px] container text-black"
                  : "text-blackInactive"
              }`}
            >
              Installed application
            </button>
          </div>
        </SecondColumnWrapper>

        <div className="w-full flex-grow">
          {selected == "all" && <AllApplication />}
          {selected == "installed" && <InsatlledApplications />}
        </div>
      </div>
    </Suspense>
  );
};

export default ConnectionHome;
