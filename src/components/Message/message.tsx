import MessageDetails from "./MessageDetails";
import MessagesInbox from "./MessageInbox";

interface MessageProps {
  isCollapsedSidebar: boolean;
}

export default function Message({ isCollapsedSidebar }: MessageProps) {
  return (
    <section className="w-full h-full flex">
      <div className="w-[35%] border-r h-full">
        <MessagesInbox />
      </div>
      <div className={`w-[65%] h-full ${isCollapsedSidebar ? "" : "border-r"}`}>
        <MessageDetails />
      </div>
    </section>
  );
}
