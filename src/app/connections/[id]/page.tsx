"use client";

import { applications } from "@/components/Connections/AllApplications";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: { id: number } }) => {
  const filteredApp = applications.filter((appId) => appId.id === params.id);

  console.log(filteredApp);

  return <div></div>;
};

export default Page;
