import Layout from "@/components/layout";

export default function NewProduct() {
    return (
        <Layout>
            <span className="w-full">
            <h1 className="text-blue-900 mb-2"> New Product</h1>
            <input type="text" placeholder="product name"/>
            <textarea placeholder="description"></textarea>
            </span>
        </Layout>
    )
}