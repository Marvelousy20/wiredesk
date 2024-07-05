import Image from "next/image";
import { MdMoreVert } from "react-icons/md";
import { LuReply } from "react-icons/lu";

const CommentCard = () => {
  return (
    <div className="px-[1.875rem] border-t border-b py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/messages/i-avatar.svg"
            alt="iavatar"
            width={24}
            height={24}
          />

          <h3 className="text-sm font-medium">Maximiliano A.</h3>
        </div>

        <div className="flex items-center gap-2">
          <h4 className="bg-black rounded-[6px] px-1 text-white text-[0.75rem]">
            8
          </h4>
          <MdMoreVert color="#1C1B1F" height={12} width={3} />
        </div>
      </div>

      <div className="p-2.5 text-[0.75rem]">
        Please try clearing your browser cache and cookies, then refresh the
        page to see if the issue resolves. If the problem persists, try
        accessing the site from a different browser or device.
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 justify-center items-center">
          <Image
            src="/messages/instagram.svg"
            alt="platform"
            width={18}
            height={18}
          />
          <p className="text-[0.75rem]">Just now</p>
        </div>

        <div className="flex gap-2 items-center py-[0.3125rem]">
          <LuReply size={20} color="#232529" />

          <span className="font-medium text-sm">Reply</span>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
