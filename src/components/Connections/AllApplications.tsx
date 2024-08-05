"use client";
import { useState } from "react";
import { Input } from "@headlessui/react";
import Image from "next/image";
import { Button } from "@headlessui/react";
import { MdArrowOutward } from "react-icons/md";
import InsatallModal from "../Modals/InsatallModal";

export type appTypes = {
  id: number;
  name: string;
  description: string;
  img: string;
};

export const applications = [
  {
    id: 1,
    name: "Whatsapp",
    description:
      "Easily receive and reply to Whatsapp messages from your inbox",
    img: "/socials/whatsapp.svg",
  },

  {
    id: 2,
    name: "Instagram",
    description: "Easily receive and reply to instagram from your inbox",
    img: "/socials/instagram.svg",
  },

  {
    id: 3,
    name: "Facebook",
    description: "Easily receive and reply to facebook from your inbox",
    img: "/socials/facebook.svg",
  },

  {
    id: 4,
    name: "Slack",
    description: "Easily receive and reply to slack from your inbox",
    img: "/socials/slack.svg",
  },

  {
    id: 5,
    name: "Email",
    description:
      "Easily receive and reply to Whatsapp instagram from your inbox",
    img: "/socials/mail.svg",
  },

  {
    id: 6,
    name: "Telegram",
    description: "Easily receive and reply to Telegram from your inbox",
    img: "/socials/telegram.svg",
  },

  {
    id: 7,
    name: "Discord",
    description: "Easily receive and reply to Discord from your inbox",
    img: "/socials/discord.svg",
  },

  {
    id: 8,
    name: "LiveChat",
    description: "Easily receive and reply to Telegram from your inbox",
    img: "/socials/livechat.svg",
  },
];

const AllApplication = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<appTypes | null>(null);

  const openModal = (app: appTypes) => {
    setSelectedApp(app);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="text-black h-full pb-20">
      <div className="h-16 border-b flex items-center pl-5">
        <h1 className="text-black text-xl font-semibold">Connectivity</h1>
      </div>

      <div className="h-full overflow-hidden hover:overflow-auto custom-scrollbar">
        <div className="flex justify-center mt-4 max-w-[47rem] mx-auto relative">
          <div className="absolute top-3 left-4">
            <Image src="/search.svg" alt="svg" width={20} height={20} />
          </div>
          <Input
            type="text"
            placeholder="Search for an app"
            className="w-full h-10 shadow-input pl-12 text-blackInactive placeholder:text-blackInactive text-sm font-medium border border-[#EEEFF1] rounded-[5px]"
          />
        </div>

        <div className="max-w-[58rem] mx-auto mt-8">
          <h1 className="font-semibold text-black">All applications</h1>

          <div className="grid grid-cols-3 gap-8 mt-4">
            {applications.map((a, i) => (
              <div
                key={i}
                className="border border-[#EEEFF1] px-4 py-[1.875rem]"
              >
                <Image src={a.img} alt="img" width={32} height={32} />

                <p className="text-sm font-medium mt-3">{a.name}</p>
                <p className="text-[0.75rem] mt-1">{a.description}</p>

                <Button
                  onClick={() => openModal(a)}
                  className="bg-black rounded-[5px] px-2.5 py-[0.3125rem] text-white text-sm font-medium flex items-center gap-2 mt-3"
                >
                  Connect
                  <MdArrowOutward size={20} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <InsatallModal
        closeModal={closeModal}
        open={isOpen}
        selectedApp={selectedApp}
      />
    </div>
  );
};

export default AllApplication;
