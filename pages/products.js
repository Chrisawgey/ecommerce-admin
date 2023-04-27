import Layout from "@/components/layout";
import Link from "next/link";

export default function Products() {
  return (
    <Layout>
      <Link className="py-1 px-2" href={"/products/new"}>
        <span className="bg-blue-900 text-white rounded-md">Add new product</span>
      </Link>
    </Layout>
  );
}
