import MessageDetails from "./MessageDetails";
import MessagesInbox from "./MessageInbox";

interface MessageProps {
  isCollapsedSidebar: boolean;
  isRightSidebarCollapsed: boolean;
}

export default function Message({ isCollapsedSidebar, isRightSidebarCollapsed }: MessageProps) {
  return (
    <section className="w-full h-full flex">
      <div className="w-[35%] border-r h-full">
        <MessagesInbox isCollapsedSidebar={isRightSidebarCollapsed} />
      </div>
      <div className={`w-[65%] h-full ${isCollapsedSidebar ? "" : "border-r"}`}>
        <MessageDetails />
      </div>
    </section>
  );
}
