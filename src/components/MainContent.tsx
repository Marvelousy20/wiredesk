"use client";

import Sidebar from "./Sidebar/sidebar";
import Message from "./Message/message";
import Details from "./Details/details";

export default function MainContent() {
  return (
    <div className="grid grid-cols-8 h-screen px-2 py-5">
      <Sidebar />
      <Message />
      <Details />
    </div>
  );
}
