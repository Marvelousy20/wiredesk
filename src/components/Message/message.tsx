import MessageDetails from "./MessageDetails";
import MessagesInbox from "./MessageInbox";

interface MessageProps {
  isCollapsedDetailsbar: boolean;
  onCollapseToggle: () => void;
  // detailsWidth: string;
  isCollapsed: boolean;
  onDetailsCollapseToggle: () => void;
}

export default function Message({
  isCollapsedDetailsbar,
  onCollapseToggle,
  onDetailsCollapseToggle,
  isCollapsed,
}: MessageProps) {
  return (
    <section className="w-full h-full overflow-auto flex">
      <div
        className={`border-r h-full transition-all duration-300 ease-in-out column-b1 w-[322px]`}
      >
        <MessagesInbox
          isCollapsedDetailsbar={isCollapsedDetailsbar}
          onCollapseToggle={onCollapseToggle}
          isCollapsed={isCollapsed}
        />
      </div>
      <div
        className={`flex-1 flex-grow h-full transition-all duration-300 ease-in-out column-b2 w-full ${
          isCollapsedDetailsbar ? "collapsed-c" : "border-r"
        }`}
      >
        <MessageDetails
          isCollapsedDetailsbar={isCollapsedDetailsbar}
          onCollapseToggle={onDetailsCollapseToggle}
        />
      </div>
    </section>
  );
}
