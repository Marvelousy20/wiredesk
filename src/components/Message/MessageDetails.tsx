"use client";
import Image from "next/image";
import {
  MdOutlinePersonAddAlt,
  MdOutlineGrade,
  MdOutlineMoreHoriz,
  MdOutlineSnooze,
  MdOutlineArchive,
  MdOutlineUnarchive,
} from "react-icons/md";
import { Button } from "@headlessui/react";
import { useState } from "react";
import { LuPanelRightOpen } from "react-icons/lu";
import { MdMoreHoriz, MdKeyboardArrowUp } from "react-icons/md";

interface MessageDetailsProps {
  isCollapsedDetailsbar: boolean;
  onCollapseToggle: () => void;
}

const MessageDetails = ({
  isCollapsedDetailsbar,
  onCollapseToggle,
}: MessageDetailsProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section>
      <div className="h-16 shadow-bottom flex items-center justify-between px-5 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2">
            <Image
              src="/messages/w-avatar.svg"
              alt="avatar"
              width={25}
              height={25}
            />
            <h1 className="font-semibold lg:text-xl text-black">James Books</h1>
          </div>

          <div className="flex items-center gap-x-3">
            <div className={`relative ${isCollapsedDetailsbar ? "mr-28" : ""}`}>
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

            <div className="flex gap-x-3 items-center">
              <span className="hover:bg-[#EEEFF1] rounded-[10px] p-1 hover:scale-110 transition-transform duration-200">
                <MdOutlineMoreHoriz size={24} />
              </span>

              <span className="hover:bg-[#EEEFF1] rounded-[10px] p-1 hover:scale-110 transition-transform duration-200">
                <MdOutlinePersonAddAlt size={24} />
              </span>
              <span className="hover:bg-[#EEEFF1] rounded-[10px] p-1 hover:scale-110 transition-transform duration-200">
                <MdOutlineGrade size={24} />
              </span>

              <span className="hover:bg-[#EEEFF1] rounded-[10px] p-1 hover:scale-110 transition-transform duration-200">
                <MdOutlineSnooze size={24} />
              </span>

              <Button className="bg-black text-white p-1.5 px-2 text-sm rounded-[5px]">
                {isOpen ? (
                  <span className="flex gap-1 items-center">
                    <MdOutlineArchive size={20} />
                    Close
                  </span>
                ) : (
                  <span className="flex gap-2 items-center">
                    <MdOutlineUnarchive size={20} />
                    Re-open
                  </span>
                )}
              </Button>
            </div>

            {isCollapsedDetailsbar && (
              <div
                className="cursor-pointer hover:bg-[#EEEFF1] rounded-[10px] p-1 hover:scale-110 transition-transform duration-200"
                onClick={onCollapseToggle}
              >
                <LuPanelRightOpen size={20} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-2 pl-[2.18rem] pr-[2.75rem]">
        <div className="flex gap-2 px-[0.69rem] py-2.5 border rounded-[10px] shadow-sides">
          <div>
            <svg
              width="23"
              height="18"
              viewBox="0 0 21 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6629 9.93715C20.779 9.66324 20.779 9.19896 19.6629 8.91957L17.1977 8.30601C16.0828 8.0321 14.9393 6.88441 14.6612 5.76959L14.0477 3.30438C13.7738 2.18819 13.3081 2.18819 13.0301 3.30438L12.4165 5.76959C12.1426 6.88441 10.9936 8.02799 9.87873 8.30601L7.41353 8.91957C6.29871 9.19348 6.29871 9.65913 7.41353 9.93715L9.87873 10.5507C10.9936 10.8246 12.1371 11.9737 12.4165 13.0885L13.0301 15.5537C13.304 16.6685 13.7683 16.6685 14.0477 15.5537L14.6612 13.0885C14.9351 11.9737 16.0828 10.8301 17.1977 10.5507L19.6629 9.93715ZM8.72694 3.81386C9.17615 3.70156 9.17615 3.5153 8.72694 3.40299L7.73127 3.1551C7.49041 3.08061 7.27135 2.94851 7.09308 2.77023C6.9148 2.59196 6.7827 2.3729 6.70821 2.13204L6.46032 1.13774C6.34801 0.687159 6.16312 0.687159 6.04945 1.13774L5.80156 2.13204C5.72707 2.3729 5.59496 2.59196 5.41669 2.77023C5.23842 2.94851 5.01936 3.08061 4.7785 3.1551L3.78283 3.40299C3.33362 3.5153 3.33362 3.70156 3.78283 3.81386L4.7785 4.06038C5.01919 4.13519 5.23809 4.2674 5.41631 4.44563C5.59454 4.62385 5.72675 4.84275 5.80156 5.08344L6.04945 6.07911C6.16175 6.52832 6.34664 6.52832 6.46032 6.07911L6.70821 5.08344C6.78301 4.84275 6.91523 4.62385 7.09345 4.44563C7.27168 4.2674 7.49057 4.13519 7.73127 4.06038L8.72694 3.81386ZM5.78512 12.6311C6.23434 12.5188 6.23434 12.3325 5.78512 12.2202L4.78946 11.9737C4.5483 11.8985 4.32911 11.7656 4.15085 11.5867C3.97259 11.4077 3.84063 11.188 3.7664 10.9465L3.51851 9.95085C3.4062 9.50164 3.22131 9.50164 3.10764 9.95085L2.85564 10.9465C2.78083 11.1872 2.64862 11.4061 2.47039 11.5843C2.29217 11.7626 2.07327 11.8948 1.83258 11.9696L0.836911 12.2161C0.387696 12.3284 0.387696 12.5147 0.836911 12.627L1.83258 12.8749C2.0739 12.9497 2.29326 13.0825 2.47157 13.2615C2.64988 13.4405 2.78173 13.6604 2.85564 13.902L3.10353 14.8963C3.21583 15.3469 3.40072 15.3469 3.5144 14.8963L3.76229 13.902C3.83678 13.6612 3.96888 13.4421 4.14716 13.2638C4.32543 13.0856 4.54449 12.9535 4.78535 12.879L5.78512 12.6311Z"
                fill="#232529"
              />
            </svg>
          </div>

          <h4 className="text-center text-blackInactive text-[0.75rem]">
            In this interaction, the agent successfully helped the customer
            reset their password and ensured they could access their account ...
          </h4>
        </div>
      </div>

      {/* Messages */}

      <div className="text-[0.75rem] mt-5 px-[1.38rem]">
        <h3 className="text-center">Today</h3>

        <div className="mt-3">
          <div>
            <div className="flex justify-end">
              <h1 className="bg-black bg-opacity-10 rounded-[10px] p-4 max-w-[27rem]">
                Hi Books, my name is Sonata welcome to spurs. How may i be of
                help today
              </h1>

              <div className="flex items-end">
                <Image
                  src="/messages/i-avatar.svg"
                  alt="avatar"
                  width={19}
                  height={19}
                />
              </div>
            </div>
            <div className="flex items-center gap-2.5 justify-end py-1.5 pr-6">
              <h1>10:40 PM</h1>
              <MdMoreHoriz color="#232529" size={16} />
            </div>
          </div>

          {/* New Message */}

          <div className="mt-3 text-center">
            <h2 className="new relative bg-white top-2 inline-block px-1">
              New Message
            </h2>
            <div className="line bg-[#E9ECF0] h-[1px]"></div>
          </div>

          <div className="flex mt-7 gap-4">
            <div className="">
              <Image
                src="/messages/i-avatar.svg"
                alt="avatar"
                width={19}
                height={19}
              />
            </div>
            <div className="">
              <h1 className="">
                Hi Books, my name is Sonata welcome to spurs. How may i be of
                help today
              </h1>

              <div className="flex items-center gap-2.5  py-1.5">
                <MdMoreHoriz color="#232529" size={16} />
                <h1>10:40 PM</h1>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex justify-center items-center gap-2">
              <h4 className="text-[#37352FBF] text-center">
                This chat has been transferred to Mary Ancelotti
              </h4>

              <Image
                src="/messages/s-avatar.svg"
                alt="avatar"
                width={21}
                height={21}
              />
            </div>

            <div className="mt-7">
              <div className="flex justify-end">
                <h1 className="bg-black bg-opacity-10 rounded-[10px] p-4 max-w-[27rem]">
                  I’m great, thanks for asking! I wanted to follow up on our
                  previous conversation about streamlining your company&apos;s
                  customer management processes. Have you had a chance to think
                  about implementing our CRM software?
                </h1>

                <div className="flex items-end">
                  <Image
                    src="/messages/i-avatar.svg"
                    alt="avatar"
                    width={19}
                    height={19}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2.5 justify-end py-1.5 pr-6">
                <h1>10:40 PM</h1>
                <MdMoreHoriz color="#232529" size={16} />
              </div>
            </div>
          </div>

          <div className="text-center flex flex-col items-center mt-2">
            <MdKeyboardArrowUp size={24} color="#232529" />

            <div className="flex gap-4 justify-between mt-1">
              <div className="border rounded-[20px] p-2.5">
                🤝 Greeting Meesage
              </div>
              <div className="border rounded-[20px] p-2.5">
                ⏭️ Greeting Meesage
              </div>
              <div className="border rounded-[20px] p-2.5">
                👋 Greeting Meesage
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageDetails;
