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
    <div className="flex gap-4 items-center w-full px-4 border-b py-5 hover:bg-[#EEEFF1] cursor-pointer font-bold">
      <div className="relative">
        <Image src={img} alt="avatar" width={60} height={60} />

        <div className="absolute bottom-0 right-0">
          <Image src={platform} alt="slack" width={16} height={16} />
        </div>
      </div>

      <div className="w-full grid gap-y-1">
        <div className="flex justify-between">
          <h1 className="font-bold text-sm text-[#232529]">{name}</h1>
          <small className="text-[#37352FBF] opacity-75">{time}</small>
        </div>

        <div className="flex justify-between">
          <h1 className="text-sm font-bold text-[#37352F] opacity-75">
            {status}
          </h1>
          {unread && (
            <span className="bg-[#232529] font-bold text-white text-[0.75rem] w-4 h-4 flex items-center justify-center rounded-md">
              {unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
