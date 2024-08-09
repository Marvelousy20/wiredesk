"use client";

import Image from "next/image";
import MessageCard from "./MessageCard";
import OrderDropdown from "../General/OrderDropwdown";
import { LuPanelRightClose } from "react-icons/lu";
import { useSidebar } from "@/context/sidebarContext";

const MessagesInbox = () => {
  const { toggleLeftSidebar, isLeftCollapsed } = useSidebar();

  return (
    <section>
      <div
        className={`h-[56px] shadow-bottom flex items-center justify-between px-5`}
      >
        <div className={`flex items-center gap-5`}>
          <button
            onClick={toggleLeftSidebar}
            className={
              isLeftCollapsed
                ? "flex w-full justify-center left-2 items-center"
                : "w-full hidden justify-end"
            }
          >
            <LuPanelRightClose size={20} />
          </button>
          <h1 className="font-semibold">Inbox</h1>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src="/messages/search.svg"
            alt="search"
            width={24}
            height={24}
          />

          <Image
            src="/messages/check_box.svg"
            alt="search"
            width={24}
            height={24}
          />
        </div>
      </div>

      <div className="pl-5 pr-3 mt-2">
        <div className="flex justify-between w-full font-medium">
          <div className="flex items-center">
            <span className="bg-[#2325290D] bg-opacity-5 text-sm rounded-full">
              8
            </span>
            <OrderDropdown title="Open" />
          </div>
          <OrderDropdown title="Newest" />
        </div>
      </div>

      <div className="w-full h-full px-3">
        <MessageCard
          img="/messages/w-avatar.svg"
          name="Lucas Hernandez"
          status="Received it, thank you."
          time="Now"
          platform="/messages/Whatsapp.svg"
          unread={8}
          active={true}
        />
        <MessageCard
          img="/messages/i-avatar.svg"
          name="Susan Hernadez"
          status="I’m great, thanks for asking..."
          time="2h"
          platform="/messages/Instagram.svg"
        />
        <MessageCard
          img="/messages/s-avatar.svg"
          name="John Doe"
          status="I still can’t log into my account"
          time="23m"
          platform="/messages/Slack.svg"
        />
        <MessageCard
          img="/messages/s-avatar.svg"
          name="Somto George"
          status="Hello, I just submited..."
          time="45m"
          platform="/messages/Slack.svg"
        />
        <MessageCard
          img="/messages/s-avatar.svg"
          name="Philip Lahm"
          status="Hello, I just submited..."
          time="2h"
          platform="/messages/Slack.svg"
        />
        <MessageCard
          img="/messages/s-avatar.svg"
          name="Leo Fernandez"
          status="Okay I’ll check in back in a few hours"
          time="4h"
          platform="/messages/Slack.svg"
        />
        <MessageCard
          img="/messages/s-avatar.svg"
          name="Thomas Doe"
          status="Hello, I just submited..."
          time="10h"
          platform="/messages/Slack.svg"
        />
      </div>
    </section>
  );
};

export default MessagesInbox;
