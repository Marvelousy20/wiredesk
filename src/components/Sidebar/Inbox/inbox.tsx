"use client";

import { Mail, AtSign, UserX } from "lucide-react";
import { title } from "process";
import { useState } from "react";

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

export default function Inbox() {
  const [selectedInbox, setSelectedInbox] = useState("Inbox");

  return (
    <div>
      <div className="">
        {messages.map((message, id) => (
          <div
            key={id}
            className={`flex items-center justify-between p-1.5 opacity-75 ${
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

      <div>
        
      </div>
    </div>
  );
}
