"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  //   DialogBackdrop,
} from "@headlessui/react";
import { appTypes } from "../Connections/AllApplications";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineOpenInNew } from "react-icons/md";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

interface InstallAppProps {
  open: boolean;
  closeModal: () => void;
  selectedApp: appTypes | null;
}

const InsatallModal = ({ open, closeModal, selectedApp }: InstallAppProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [url, setUrl] = useState("");
  const [isUrlDialogOpen, setUrlDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getInstagramUrl = async () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/instagram/login/url`;
    setIsLoading(true);
    try {
      const result = await axios.get(apiUrl);
      const url = result.data?.data?.url;
      setUrl(url);
      setIsLoading(false);
      console.log(url);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const Discord = async () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/discord/login/url`;

    try {
      const result = await axios.get(apiUrl);
      const url = result.data?.data?.url;
      setUrl(url);
      console.log(url);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAppConnection = () => {
    closeModal();
    setUrlDialogOpen(true);
    setIsLoading(true);
    switch (selectedApp?.name) {
      case "Instagram":
        getInstagramUrl();
        break;
      case "Whatsapp":
        getInstagramUrl();
        break;
      case "Telegram":
        getInstagramUrl();
        break;
      default:
        console.log("App not supported");
    }
  };

  return (
    <>
      <Dialog open={open} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/80" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <DialogPanel className="w-full max-w-[75rem] bg-white backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
              <div className="bg-[#2325290D] bg-opacity-5 flex py-[3.93rem] justify-between px-[3.125rem]">
                <div>
                  <div className="flex gap-8">
                    <div>
                      {selectedApp?.img && (
                        <Image
                          src={selectedApp.img}
                          alt="image"
                          width={95}
                          height={95}
                        />
                      )}
                    </div>

                    <div className="text-black space-y-3">
                      <h3 className="text-2xl font-semibold">
                        {selectedApp?.name}
                      </h3>
                      <p className="text-lg">
                        Easily reply to Instagram private messages from your
                        inbox
                      </p>

                      <div>
                        <p className="bg-[#FBF197] text-[#594F03] text-lg inline rounded-[10px] px-1.5 py-0.5">
                          Free
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <button
                    onClick={handleAppConnection}
                    className="text-white bg-black rounded-[5px] text-xl px-2.5 py-[0.3125rem]"
                  >
                    Install now
                  </button>
                  <div className="grid mt-3 space-y-2 text-[#686662] text-lg">
                    <Link href="/" className="underline">
                      Terms of service
                    </Link>
                    <Link href="/" className="underline">
                      Privacy policy
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white">
                <div className="flex gap-x-[5.5rem]">
                  <div className="pt-9 w-[58.27%] pl-12">
                    <TabGroup
                      selectedIndex={selectedIndex}
                      onChange={setSelectedIndex}
                      className=""
                    >
                      <div className={`shadow-b-2`}>
                        <TabList
                          className={`justify-between font-semibold text-lg text-blackInactive space-x-7`}
                        >
                          <Tab
                            className={`data-[selected]:outline-none relative border-black data-[selected]:text-black ${
                              selectedIndex === 0 && "pb-4 border-b-2"
                            }`}
                          >
                            Description
                          </Tab>
                          <Tab
                            className={`data-[selected]:outline-none relative border-black data-[selected]:text-black ${
                              selectedIndex === 1 && "pb-4 border-b-2"
                            }`}
                          >
                            Getting Started
                          </Tab>

                          <Tab
                            className={`data-[selected]:outline-none relative border-black data-[selected]:text-black ${
                              selectedIndex === 2 && "pb-4 border-b-2"
                            }`}
                          >
                            Settings
                          </Tab>
                        </TabList>
                      </div>
                      <TabPanels className="mt-9">
                        <TabPanel>
                          <div className="text-black text-sm">
                            Route private messages from Instagram to your
                            Intercom inbox — keeping all of your customer
                            communications in one place and enabling you to
                            respond faster to your leads and users. With the
                            Instagram app, you can read, manage and respond to
                            all private messages right from your inbox. No more
                            switching tabs or managing multiple queues. <br />{" "}
                            <br /> Instagram messages can be routed directly to
                            your Unassigned inbox, or you can automatically
                            assign them to the right team or teammate using
                            assignment rules. Plus, anyone who messages you will
                            be added to Intercom as a lead or user, making it
                            easy to track all of your conversations and customer
                            data in one place and giving you a clear picture of
                            your customer base.
                          </div>
                        </TabPanel>
                        <TabPanel>{/* <Comments /> */}</TabPanel>
                      </TabPanels>
                    </TabGroup>
                  </div>

                  <div className="w-[30.4%] border border-[#EEEFF1] pt-9 px-12 h-[652px]">
                    <div className="bg-[#2325290D] bg-opacity-5 py-12  px-8 space-y-4 rounded-[10px]">
                      <h1 className="text-black font-semibold text-xl">
                        Have a question?
                      </h1>

                      <p className="text-blackInactive">
                        WireDesk’s team is here to help
                      </p>

                      <Link href="/" className="underline text-[#2E6BFF] block">
                        Get in Touch
                      </Link>
                    </div>

                    <div className="flex justify-center mt-7">
                      <Link href="/" className="flex items-center gap-2">
                        <MdOutlineOpenInNew size={18} />
                        Open app docs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <Dialog open={isUrlDialogOpen} onClose={() => setUrlDialogOpen(false)}>
        <div className="fixed inset-0 bg-black/80" aria-hidden="true"></div>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="bg-white p-6 rounded-lg shadow-lg w-[30rem] h-[20rem] mx-auto">
            <div className="w-full h-full">
              {isLoading ? (
                <div className="flex justify-center items-center h-full">
                  <FaSpinner
                    className="animate-spin"
                    size={32}
                    color="#232529"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center h-full justify-center">
                  <h2 className="mb-2 text-lg font-bold">
                    Proceed to Instagram
                  </h2>
                  <p>To connect to Instagram, click below:</p>
                  <a
                    href={url}
                    className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-opacity-70 mt-10"
                  >
                    Go to Instagram
                  </a>
                </div>
              )}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default InsatallModal;
