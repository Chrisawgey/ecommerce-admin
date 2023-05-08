import Layout from "@/components/layout";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";

export default function Products() {
  useEffect(() => {
    axios.get('/api/products').then(response => {
      console.log(response.data);
    })
  }, []);
  return (
    <Layout>
      <Link href={"/products/new"}>
        <span className="bg-blue-900 text-white rounded-md py-1 px-2">Add new product</span>
      </Link>
    </Layout>
  );
}
