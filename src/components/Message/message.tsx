import MessageDetails from "./MessageDetails";
import MessagesInbox from "./MessageInbox";
import { useSidebar } from "@/context/sidebarContext";

export default function Message() {
  const { isRightCollapsed } = useSidebar();

  return (
    <section className="w-full h-full overflow-auto flex">
      <div
        className={`border-r h-full transition-all duration-300 ease-in-out column-b1 w-[322px]`}
      >
        <MessagesInbox />
      </div>
      <div
        className={`flex-1 flex-grow h-full transition-all duration-300 ease-in-out column-b2 w-full ${
          isRightCollapsed ? "collapsed-c" : "border-r"
        }`}
      >
        <MessageDetails />
      </div>
    </section>
  );
}
