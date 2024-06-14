import Image from "next/image";

interface MessagesCardProps {
  img: string;
  name: string;
  time: string;
  status: string;
  unread?: number;
  platform: string;
}

const MessageCard = ({
  img,
  name,
  status,
  time,
  unread,
  platform,
}: MessagesCardProps) => {
  return (
    <div className="flex gap-4 items-center w-full px-4 border-b py-5">
      <div className="relative">
        <Image src={img} alt="avatar" width={44} height={44} />

        <div className="absolute bottom-0 right-0">
          <Image src={platform} alt="slack" width={16} height={16} />
        </div>
      </div>

      <div className="w-full opacity-75 grid gap-y-2">
        <div className="flex justify-between">
          <h1 className="font-medium text-sm">{name}</h1>
          <small className="text-[0.75rem]">{time}</small>
        </div>

        <div className="flex justify-between">
          <h1 className="text-sm font-medium">{status}</h1>
          {unread && (
            <span className="bg-black font-medium text-white p-1 text-[0.75rem] w-3 h-4 flex items-center justify-center rounded-md">
              {unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
