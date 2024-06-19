import MessageDetails from "./MessageDetails";
import MessagesInbox from "./MessageInbox";

interface MessageProps {
  isCollapsedDetailsbar: boolean;
  onCollapseToggle: () => void;
  detailsWidth: string;
  isCollapsed: boolean;
}

export default function Message({
  isCollapsedDetailsbar,
  onCollapseToggle,
  detailsWidth,
  isCollapsed,
}: MessageProps) {
  return (
    <section className="w-full h-full overflow-auto flex">
      <div
        className={`border-r h-full transition-all duration-300 ease-in-out`}
        style={{ width: detailsWidth }}
      >
        <MessagesInbox
          isCollapsedDetailsbar={isCollapsedDetailsbar}
          onCollapseToggle={onCollapseToggle}
          isCollapsed={isCollapsed}
        />
      </div>
      <div
        className={`flex-1 h-full ${isCollapsedDetailsbar ? "" : "border-r"}`}
      >
        <MessageDetails />
      </div>
    </section>
  );
}
