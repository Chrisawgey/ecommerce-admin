import Layout from "@/components/layout";
import axios from "axios";
import { useState } from "react";

export default function NewProduct() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    async function createProduct(ev){
        ev.preventDefault();
        const  data = {title,description,price};
        await axios.post('/api/products', data)
    }
    return (
        <Layout>
            <form onSubmit={createProduct}>
            <span className="w-full">
            <h1> New Products</h1>
            <label>Product Name</label>
            <input 
            type="text" 
            placeholder="product name" 
            value={title} 
            onChange={ev => setTitle(ev.target.value)}
            />
            <label>Description</label>
            <textarea 
            placeholder="description"
            value={description}
            onChange={ev => setDescription(ev.target.value)}
            />
            <label>Price (in USD) </label>
            <input 
            type="number"
            placeholder="price"
            value={price}
            onChange={ev => setPrice(ev.target.value)}
            />
            <button 
            type="submit"
            className="btn-primary">
            Save</button>
            </span>
            </form>
            
        </Layout>
    );
}