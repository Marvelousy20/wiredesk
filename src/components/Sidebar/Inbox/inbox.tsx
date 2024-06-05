"use client";

import { Mail, AtSign, UserX } from "lucide-react";
import Dropdown from "@/components/General/Dropdown";
import { useState } from "react";
import Image from "next/image";

const messages = [
  {
    title: "Inbox",
    unread: "2,055",
    icon: <Mail size={16} />,
  },
  {
    title: "Mentions",
    unread: "30",
    icon: <AtSign size={16} />,
  },
  {
    title: "Unassigned",
    unread: "48",
    icon: <UserX size={16} />,
  },
];

const teams = [
  {
    title: "Support",
    unread: "5",
    icon: <UserX size={16} />,
  },
  {
    title: "Social",
    unread: "43",
    icon: <UserX size={16} />,
  },
  {
    title: "Tier/Support",
    unread: "5",
    icon: <UserX size={16} />,
  },
  {
    title: "Technical",
    unread: "5",
    icon: <UserX size={16} />,
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
    icon: <UserX size={16} />,
  },
  {
    title: "Support Request",
    unread: "18",
    icon: <UserX size={16} />,
  },
  {
    title: "Support Request",
    unread: "66",
    icon: <UserX size={16} />,
  },
  {
    title: "Bug Report",
    unread: "5",
    icon: <UserX size={16} />,
  },
];

const channels = [
  {
    title: "Whatsapp",
    unread: "14",
    icon: <UserX size={16} />,
  },
  {
    title: "Instagram",
    unread: "20",
    icon: <UserX size={16} />,
  },
  {
    title: "Gmail",
    unread: "13",
    icon: <UserX size={16} />,
  },
  {
    title: "Slack",
    unread: "8",
    icon: <UserX size={16} />,
  },
  {
    title: "Facebook",
    unread: "2",
    icon: <UserX size={16} />,
  },
];

export default function Inbox() {
  const [selectedInbox, setSelectedInbox] = useState("Inbox");

  return (
    <div>
      <div className="">
        {messages.map((message, id) => (
          <div
            key={id}
            className={`flex items-center justify-between p-2 opacity-75 ${
              selectedInbox === message.title &&
              "bg-[#EEEFF1] border-l-4 border-black opacity-100"
            }`}
            onClick={() => setSelectedInbox(message.title)}
          >
            <div className="flex items-center gap-1.5 text-sm font-medium">
              <p>{message.icon}</p>
              <p>{message.title}</p>
            </div>

            <p
              className={`text-[0.75rem] ${
                selectedInbox === message.title &&
                "bg-black text-white px-1 rounded-md"
              }`}
            >
              {message.unread}
            </p>
          </div>
        ))}
      </div>

      {/* Teams */}
      <div className="mt-4">
        <Dropdown
          title="Teams"
          items={teams.map((team, id) => (
            <div
              key={id}
              className="flex justify-between items-center p-2 opacity-75"
            >
              <div className="flex items-center gap-1.5 text-sm font-medium">
                <p>{team.icon}</p>
                <p>{team.title}</p>
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
      <div className="mt-4">
        <Dropdown
          title="Teammates"
          items={teamsmates.map((teammate, id) => (
            <div
              key={id}
              className="flex justify-between items-center p-2 opacity-75"
            >
              <div className="flex items-center gap-1.5 text-sm font-medium">
                <p>{teammate.icon}</p>
                <p>{teammate.title}</p>
              </div>

              <p
                className={`text-[0.75rem] ${
                  selectedInbox === teammate.title &&
                  "bg-black text-white px-1 rounded-md"
                }`}
              >
                {teammate.unread}
              </p>
            </div>
          ))}
        />
      </div>

      {/* Tickets */}
      <div className="mt-4">
        <Dropdown
          title="Tickets"
          items={tickets.map((ticket, id) => (
            <div
              key={id}
              className="flex justify-between items-center p-2 opacity-75"
            >
              <div className="flex items-center gap-1.5 text-sm font-medium">
                <p>{ticket.icon}</p>
                <p>{ticket.title}</p>
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
      <div className="mt-4">
        <Dropdown
          title="Channels"
          items={channels.map((channel, id) => (
            <div
              key={id}
              className="flex justify-between items-center p-2 opacity-75"
            >
              <div className="flex items-center gap-1.5 text-sm font-medium">
                <p>{channel.icon}</p>
                <p>{channel.title}</p>
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
  );
}
