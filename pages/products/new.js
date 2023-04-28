import Layout from "@/components/layout";
import { useState } from "react";

export default function NewProduct() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
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
            <button className="btn-primary">Save</button>
            </span>
        </Layout>
    );
}