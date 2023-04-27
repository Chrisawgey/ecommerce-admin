import Layout from "@/components/layout";
import {useSession} from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  return <Layout>
    <div>
    <div className="text-blue-900 flex justify-between">
      <h2> Hello, <b>{session?.user?.name}</b></h2>
       <div className="flex gap-1 text-black rounded-lg overflow-hidden">
      <img src={session?.user?.image} alt="" className="w-6 h-6"/>
        <span className="px-2">
        
        </span>
        </div>
         </div>
        </div>
</Layout>
}
