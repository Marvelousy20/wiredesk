import Image from "next/image";
import MessageCard from "./MessageCard";
import OrderDropdown from "../General/OrderDropwdown";

const MessagesInbox = () => {
  return (
    <section>
      <div className="h-16 shadow-bottom flex items-center justify-between px-5">
        <h1 className="font-semibold text-lg">Inbox</h1>

        <div className="flex items-center gap-2">
          <Image
            src="/messages/search.svg"
            alt="search"
            width={18}
            height={18}
          />

          <Image
            src="/messages/check_box.svg"
            alt="search"
            width={24}
            height={24}
          />
        </div>
      </div>

      <div className="px-5">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <span className="bg-[#2325290D] bg-opacity-5 text-sm rounded-full">
              8
            </span>
            <OrderDropdown title="Open" />
          </div>
          <OrderDropdown title="Oldest" />
        </div>
      </div>

      <div className="w-full mt-2">
        <MessageCard
          img="/messages/w-avatar.svg"
          name="James Books"
          status="Sent"
          time="12:15 PM"
          platform="/messages/Whatsapp.svg"
        />
        <MessageCard
          img="/messages/i-avatar.svg"
          name="Lucas Hernadez"
          status="Hello, I just submited..."
          time="12:15 PM"
          platform="/messages/Instagram.svg"
        />
        <MessageCard
          img="/messages/s-avatar.svg"
          name="Martha Judge"
          status="Hello, I just submited..."
          time="12:15 PM"
          platform="/messages/Slack.svg"
        />
      </div>
    </section>
  );
};

export default MessagesInbox;
