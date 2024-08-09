import Image from "next/image";

interface MessagesCardProps {
  img: string;
  name: string;
  time: string;
  status: string;
  unread?: number;
  platform: string;
  active?: boolean;
}

const MessageCard = ({
  img,
  name,
  status,
  time,
  unread,
  platform,
  active,
}: MessagesCardProps) => {
  return (
    <div className="mb-2">
      <div className="flex gap-4 items-center w-full py-2 hover:bg-[#EBE7F8] rounded-[10px] cursor-pointer">
        <div className="relative">
          <Image src={img} alt="avatar" width={60} height={60} />

          <div className="absolute bottom-0 right-0">
            <Image src={platform} alt="slack" width={16} height={16} />
          </div>
        </div>

        <div className="w-full grid gap-y-1">
          <div className="flex items-center gap-1.5">
            <h1
              className={`font-medium text-sm text-black ${
                active && "font-semibold"
              }`}
            >
              {name}
            </h1>
            <div className="w-[3px] h-[3px] bg-[#37352F] rounded-full bg-opacity-75"></div>

            <p className="text-[0.75rem] font-light text-[#37352F] text-opacity-75">
              {time}
            </p>

            <div className="flex-grow"></div>

            {active && (
              <div className="w-[6px] h-[6px] bg-[#6941C6] rounded-full mr-3"></div>
            )}
          </div>

          <div className="flex justify-between">
            <h1
              className={`text-[0.75rem] font-medium text-[#37352FBF] text-opacity-75 ${
                active && "font-semibold text-black"
              }`}
            >
              {status}
            </h1>
            {/* {unread && (
            <span className="bg-black font-medium text-white text-[0.75rem] w-4 h-4 flex items-center justify-center rounded-md">
              {unread}
            </span>
          )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
