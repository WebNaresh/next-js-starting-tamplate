import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import type { NextPage } from "next";
import { getServerSession } from "next-auth";

const HomeComponent: NextPage = async () => {
  const data = await getServerSession(authOptions);
  console.log(`🚀 ~ data:`, data);
  return (
    <>
      <Button>You are ready to go</Button>
    </>
  );
};

export default HomeComponent;
