import Layout from "@/components/layout";
import axios from "axios";
import { useState } from "react";

export default function Categories() {
    const [ name,setName ] = useState ('');
    async function saveCategories(){
        await axios.post('/api/categories' , {name});
        setName('');
    }
    return(
        <Layout>
            <h1>Categories</h1>
            <label>New category name</label>
            <form onSubmit={saveCategories} className="flex gap-1">
            <input 
            className="mb-0" 
            type="text" 
            placeholder={'Category Name'}
            onChange={ev => setName(ev.target.value)}
            value={name}
            />
            <button type="submit" className="btn-primary">Save</button>
            </form>
        </Layout>
    )
}