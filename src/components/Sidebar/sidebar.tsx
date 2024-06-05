"use client";
import { useState } from "react";
import Image from "next/image";

interface SelectableItems {
  messages: string;
  mylo: string;
  finance: string;
  settings: string;
  campaign: string;
  minus: string;
  mylo_last: string;
}

interface ItemProps {
  onSelect?: any;
}

export default function Sidebar({ onSelect }: ItemProps) {
  const [selected, setSelected] = useState<SelectableItems | string>(
    "messages"
  );

  const handleSelect = (item: string) => {
    setSelected(item);
    onSelect(item);
  };
  return (
    <section className="col-span-2 border-r-2">
      {/* logo */}
      <div className="shadow-sm pb-5">
        <Image src="/sidebar/logo.svg" alt="logo" width={30} height={30} />
      </div>

      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <div>
            <button onClick={() => handleSelect("messages")} className={`mb-5`}>
              <Image
                src="/sidebar/email.png"
                alt="email"
                width={24}
                height={24}
                className={`${selected === "messages" && "bg-black"}`}
              />
            </button>
          </div>

          <div>
            <button
              onClick={() => handleSelect("mylo")}
              className={`mb-5 ${selected === "mylo" && "black"}`}
            >
              <Image
                src="/sidebar/mylo.png"
                alt="email"
                width={24}
                height={24}
              />
            </button>
          </div>

          <div>
            <button
              onClick={() => handleSelect("three")}
              className={`mb-5 ${selected === "three" && "black"}`}
            >
              <Image
                src="/sidebar/three.png"
                alt="email"
                width={24}
                height={24}
              />
            </button>
          </div>

          <div>
            <button
              onClick={() => handleSelect("campaign")}
              className={`mb-5 ${selected === "campaign" && "black"}`}
            >
              <Image
                src="/sidebar/campaign.png"
                alt="email"
                width={24}
                height={24}
              />
            </button>
          </div>

          <div>
            <button
              onClick={() => handleSelect("finance")}
              className={`mb-5 ${selected === "finance" && "black"}`}
            >
              <Image
                src="/sidebar/finance.png"
                alt="email"
                width={24}
                height={24}
              />
            </button>
          </div>

          <div>
            <button
              onClick={() => handleSelect("settings")}
              className={`mb-5 ${selected === "settings" && "black"}`}
            >
              <Image
                src="/sidebar/settings.png"
                alt="email"
                width={24}
                height={24}
              />
            </button>
          </div>

          <div>
            <button
              onClick={() => handleSelect("minus")}
              className={`mb-5 ${selected === "minus" && "black"}`}
            >
              <Image
                src="/sidebar/minus.png"
                alt="email"
                width={24}
                height={24}
              />
            </button>
          </div>

          <div>
            <button
              onClick={() => handleSelect("mylo_last")}
              className={`mb-5 ${selected === "mylo_last" && "black"}`}
            >
              <Image
                src="/sidebar/mylo_last.png"
                alt="email"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>

        {/* Corresponding items */}
        <div className="col-span-2">{selected === "message"}</div>
      </div>
    </section>
  );
}
