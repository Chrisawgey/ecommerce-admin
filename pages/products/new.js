import Layout from "@/components/layout";

export default function NewProduct() {
    return (
        <Layout>
            <span className="w-full">
            <h1> New Product</h1>
            <input type="text" placeholder="product name"/>
            <textarea placeholder="description"></textarea>
            </span>
        </Layout>
    )
}