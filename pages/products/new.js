import Layout from "@/components/layout";

export default function NewProduct() {
    return (
        <Layout>
        <h1>New Product</h1>
           <span className="w-full">
            <input type="text" placeholder="product name"/>
            <textarea placeholder="description"></textarea>
            </span>
        </Layout>
    )
}