import Layout from "@/components/layout";
import {useSession} from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  return <Layout>
  <div>
    <div className="text-blue-900 flex justify-between">
    <div>
      <h2>
        Hello, {session?.user?.name}
      </h2> 
      </div>
      <div className="flex bg-gray-300 gap-1 text-black">
        <img src={session?.user?.image} alt="" className="w-8 h-8"/>
        <span className="py-1 px-2">
        {session?.user?.name}
        </span>
        </div>
      </div> 
    </div>
</Layout>
}
