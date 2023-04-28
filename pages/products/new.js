import Layout from "@/components/layout";

export default function NewProduct() {
    return (
        <Layout>
            <span className="w-full">
            <h1> New Product</h1>
            <label>Products Name</label>
            <input type="text" placeholder="product name"/>
            <label>Description</label>
            <textarea placeholder="description"></textarea>
            <label>Price (in USD) </label>
            <input type="number" placeholder="price"/>
            </span>
        </Layout>
    )
}