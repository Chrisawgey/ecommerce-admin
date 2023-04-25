import Layout from "@/components/layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  console.log({session});
  return <Layout>
    <div className="text-blue-900">
      Welcome back, {session?.user?.name}
      <img src={session?Home,user?.image}
    </div>
  </Layout>
}
