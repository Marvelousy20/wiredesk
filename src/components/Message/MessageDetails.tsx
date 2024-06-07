import Image from "next/image";
import {
  MdOutlinePersonAddAlt,
  MdOutlineGrade,
  MdOutlinePhoneInTalk,
} from "react-icons/md";

const MessageDetails = () => {
  return (
    <section>
      <div className="h-16 shadow-sm flex items-center justify-between px-5 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2">
            <Image
              src="/messages/w-avatar.svg"
              alt="avatar"
              width={25}
              height={25}
            />
            <h1 className="font-semibold text-xl">James Books</h1>
          </div>

          <div className="flex items-center gap-10">
            <div className="relative">
              <Image
                src="/messages/w-avatar.svg"
                alt="avatar"
                width={20}
                height={20}
              />

              <Image
                src="/messages/i-avatar.svg"
                alt="avatar"
                width={20}
                height={20}
                className="absolute top-0 right-4"
              />
            </div>

            <div className="flex gap-x-6 items-center">
              <span className="text-2xl font-bold">...</span>

              <span>
                <MdOutlinePersonAddAlt size={24} />
              </span>
              <span>
                <MdOutlineGrade size={24} />
              </span>
              <span>
                <MdOutlinePhoneInTalk size={24} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageDetails;
