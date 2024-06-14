import MessageDetails from "./MessageDetails";
import MessagesInbox from "./MessageInbox";

interface MessageProps {
  isCollapsedSidebar: boolean;
  isRightSidebarCollapsed: boolean;
  isCollapsed: boolean;
  onCollapseToggle: () => void;
}

export default function Message({
  isCollapsedSidebar,
  isRightSidebarCollapsed,
  isCollapsed,
  onCollapseToggle,
}: MessageProps) {
  return (
    <section className="w-full h-full flex">
      <div className={`border-r h-full ${isCollapsed ? "w-[25%]" : "w-[35%]"}`}>
        <MessagesInbox
          isCollapsed={isCollapsed}
          isCollapsedSidebar={isRightSidebarCollapsed}
          onCollapseToggle={onCollapseToggle}
        />
      </div>
      <div
        className={`${isCollapsed ? "w-[75%]" : "w-[65%]"} h-full ${
          isCollapsedSidebar ? "" : "border-r"
        }`}
      >
        <MessageDetails />
      </div>
    </section>
  );
}
