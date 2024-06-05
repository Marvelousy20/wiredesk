"use client";

import Sidebar from "./Sidebar/sidebar";
import Message from "./Message/message";
import Details from "./Details/details";

export default function MainContent() {
  return (
    <div className="w-full flex h-screen">
      <Sidebar />
      <Message />
      <Details />
    </div>
  );
}
