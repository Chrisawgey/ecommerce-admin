import Layout from "@/components/layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Categories() {
    const [ name,setName ] = useState('');
    const [parentCategory,setParentCategory] = useState('');
    const [ categories,setCategories ] = useState([]);
    useEffect(() => {
        fetchCategories();
    }, []);
    function fetchCategories() {
        axios.get('/api/categories').then(result => {
            setCategories(result.data);
        });
    }
    async function saveCategories(ev){
        ev.preventDefault();
        await axios.post('/api/categories' , {name});
        setName('');
        fetchCategories();
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
            value={name}/>
            <select 
            onChange={ev => setParentCategory(ev.target.value)}         
            className="mb-0" 
            value={parentCategory}>
                <option value="">No Parent Category</option>
                {categories.length > 0 && categories.map(category => (
                        <option value={category._id}>{category.name}</option>
                    ))}
            </select>
            <button type="submit" className="btn-primary">Save</button>
            </form>
            <table className="basic mt-4">
                <thead>
                    <tr>
                        <td>
                           Category Name 
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {categories.length > 0 && categories.map(category => (
                        <tr>
                            <td>{category.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}