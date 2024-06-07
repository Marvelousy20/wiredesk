import MessageDetails from "./MessageDetails";
import MessagesInbox from "./MessageInbox";

export default function Message() {
  return (
    <section className="w-full h-full flex">
      <div className="w-[35%] border-r h-full">
        <MessagesInbox />
      </div>
      <div className="w-[65%] border-r h-full">
        <MessageDetails />
      </div>
    </section>
  );
}
