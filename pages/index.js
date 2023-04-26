import Layout from "@/components/layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  console.log({session});
  return <Layout>
    <div className="text-blue-900 flex">
    <h2>
    Welcome back, {session?.user?.name}
    </h2>
      <div>
        <img src={session?.user?.image} alt="" className="w-6 h-6"/>
      </div>
    </div>
  </Layout>
}
