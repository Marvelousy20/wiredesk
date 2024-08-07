"use client";

import { UserX } from "lucide-react";
import Dropdown from "@/components/General/Dropdown";
import { useState } from "react";
import Image from "next/image";
import {
  MdOutlineAlternateEmail,
  MdInbox,
  MdAdd,
  MdOutlineReport,
  MdOutlineTune,
} from "react-icons/md";
import { useSidebar } from "@/context/sidebarContext";

const messages = [
  {
    title: "Inbox",
    unread: "254",
    icon: <MdInbox size={20} />,
  },
  {
    title: "Mentions",
    unread: "30",
    icon: <MdOutlineAlternateEmail size={20} />,
  },
  {
    title: "Unassigned",
    unread: "48",
    icon: <UserX size={20} />,
  },
];

const teams = [
  {
    title: "Support",
    unread: "5",
    icon: <span>ℹ️</span>,
  },
  {
    title: "Social",
    unread: "43",
    icon: <span>📩</span>,
  },
  {
    title: "Tier/Support",
    unread: "5",
    icon: <span>🧰</span>,
  },
  {
    title: "Technical",
    unread: "5",
    icon: <span>🛠️</span>,
  },
];

const teamsmates = [
  {
    title: "James Ander...",
    unread: "3",
    icon: (
      <Image
        src="/sidebar/items/avatar.svg"
        alt="avatar"
        width={18}
        height={18}
      />
    ),
  },
  {
    title: "Alexander Tho...",
    unread: "2",
    icon: (
      <Image
        src="/sidebar/items/avatar.svg"
        alt="avatar"
        width={18}
        height={18}
      />
    ),
  },
];

const tickets = [
  {
    title: "My Ticket",
    unread: "1",
    icon: <span>✅</span>,
  },
  {
    title: "Support Request",
    unread: "18",
    icon: <span>🆘</span>,
  },
  {
    title: "Bug Report",
    unread: "5",
    icon: <span>🪲</span>,
  },
];

const channels = [
  {
    title: "Whatsapp",
    unread: "14",
    icon: (
      <Image
        src="/sidebar/socials/Whatsapp.svg"
        alt="instagram"
        width={20}
        height={20}
      />
    ),
  },
  {
    title: "Instagram",
    unread: "20",
    icon: (
      <Image
        src="/sidebar/socials/Instagram.svg"
        alt="instagram"
        width={18}
        height={18}
      />
    ),
  },
  {
    title: "Gmail",
    unread: "13",
    icon: (
      <Image
        src="/sidebar/socials/Gmail.svg"
        alt="gmail"
        width={18}
        height={18}
      />
    ),
  },
  {
    title: "Slack",
    unread: "8",
    icon: (
      <Image
        src="/sidebar/socials/Slack.svg"
        alt="Slack"
        width={20}
        height={20}
      />
    ),
  },
  {
    title: "Facebook",
    unread: "2",
    icon: (
      <Image
        src="/sidebar/socials/Facebook.svg"
        alt="instagram"
        width={18}
        height={18}
      />
    ),
  },
];

export default function Inbox() {
  const [selectedInbox, setSelectedInbox] = useState("Inbox");

  const { isLeftCollapsed } = useSidebar();

  return (
    <div
      key={isLeftCollapsed ? "collapsed" : "expanded"}
      className="h-full overflow-hidden hover:overflow-auto custom-scrollbar pr-[5px] hover:pr-0 flex flex-col"
    >
      <div className="flex justify-between items-center pl-3 lg:pr-6 py-2 mb-1.5">
        <div className="flex items-center gap-1">
          <Image
            src="/sidebar/search.svg"
            alt="search"
            width={14}
            height={14}
          />
          <span className="text-secondColumnText text-[0.8125rem]">Search</span>
        </div>
        <div>
          <MdAdd color="#BFBFBF" />
        </div>
      </div>
      <div className="px-3">
        {messages.map((message, id) => (
          <div
            key={id}
            className={`flex items-center hover:bg-[#EEEFF1] justify-between p-2 cursor-pointer font-medium ${
              selectedInbox === message.title
                ? "bg-[#7149CE] bg-opacity-15 text-[#B699F9] rounded-tr-lg border-black rounded-r-[3px]"
                : "text-secondColumnText"
            }`}
            onClick={() => setSelectedInbox(message.title)}
          >
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-1.5 text-sm">
                <p>{message.icon}</p>
                <p>{message.title}</p>
              </div>

              <p
                className={`text-[0.75rem] ${
                  selectedInbox === message.title
                    ? "text-[#B699F9] px-1 rounded-md flex items-center"
                    : "text-secondColumnText"
                }`}
              >
                {message.unread}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col h-full">
        <div className="mt-4 px-5">
          <Dropdown
            title="WireDesk"
            items={teams.map((team, id) => (
              <div key={id} className="flex justify-between items-center p-2">
                <div className="flex items-center gap-1.5 text-sm font-medium">
                  <p>{team.icon}</p>
                  <p className="text-secondColumnText">{team.title}</p>
                </div>

                <p
                  className={`text-[0.75rem] ${
                    selectedInbox === team.title &&
                    "bg-black text-white px-1 rounded-md"
                  }`}
                >
                  {team.unread}
                </p>
              </div>
            ))}
          />
        </div>

        {/* Teams */}
        <div className="mt-4 px-5">
          <Dropdown
            title="Teams"
            items={teams.map((team, id) => (
              <div key={id} className="flex justify-between items-center p-2">
                <div className="flex items-center gap-1.5 text-sm font-medium">
                  <p>{team.icon}</p>
                  <p className="text-secondColumnText">{team.title}</p>
                </div>

                <p
                  className={`text-[0.75rem] ${
                    selectedInbox === team.title &&
                    "bg-black text-white px-1 rounded-md"
                  }`}
                >
                  {team.unread}
                </p>
              </div>
            ))}
          />
        </div>

        {/* Teammates */}
        <div className="mt-4 px-5">
          <Dropdown
            title="Teammates"
            items={teamsmates.map((teammate, id) => (
              <div key={id} className="flex justify-between items-center p-2">
                <div className="flex items-center gap-1.5 text-sm font-medium">
                  <p>{teammate.icon}</p>
                  <p className="text-secondColumnText">{teammate.title}</p>
                </div>

                <p
                  className={`text-[0.75rem] ${
                    selectedInbox === teammate.title &&
                    "bg-secondColumnText text-white px-1 rounded-md"
                  }`}
                >
                  {teammate.unread}
                </p>
              </div>
            ))}
          />
        </div>

        {/* Tickets */}
        <div className="mt-4 px-5">
          <Dropdown
            title="Tickets"
            items={tickets.map((ticket, id) => (
              <div key={id} className="flex justify-between items-center p-2">
                <div className="flex items-center gap-1.5 text-sm font-medium">
                  <p>{ticket.icon}</p>
                  <p className="text-secondColumnText">{ticket.title}</p>
                </div>

                <p
                  className={`text-[0.75rem] ${
                    selectedInbox === ticket.title &&
                    "bg-black text-white px-1 rounded-md"
                  }`}
                >
                  {ticket.unread}
                </p>
              </div>
            ))}
          />
        </div>

        {/* Channels */}
        <div className="mt-4 px-5">
          <Dropdown
            title="Channels"
            items={channels.map((channel, id) => (
              <div key={id} className="flex justify-between items-center p-2">
                <div className="flex items-center gap-1.5 text-sm font-medium">
                  <p>{channel.icon}</p>
                  <p className="text-secondColumnText">{channel.title}</p>
                </div>

                <p
                  className={`text-[0.75rem] ${
                    selectedInbox === channel.title &&
                    "bg-black px-1 rounded-md text-[#DB0629]"
                  }`}
                >
                  {channel.unread}
                </p>
              </div>
            ))}
          />
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="px-3 pb-16">
        <div className="flex items-center hover:bg-[#EEEFF1] justify-between p-2 cursor-pointer font-medium text-secondColumnText">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-1.5 text-sm">
              <p>
                <MdOutlineReport size={20} />
              </p>
              <p>Spam</p>
            </div>

            <p className={`text-[0.75rem]`}>30</p>
          </div>
        </div>

        <div className="flex items-center hover:bg-[#EEEFF1] justify-between p-2 cursor-pointer font-medium text-secondColumnText">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-1.5 text-sm">
              <p>
                <MdOutlineTune size={20} />
              </p>
              <p>Configuration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
