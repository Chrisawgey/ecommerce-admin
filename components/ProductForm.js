import {useState} from "react";
import {useRouter} from "next/router"
import axios from "axios";

export default function ProductForm ({
    _id,
    title:existingTitle,
    description:existingDescription,
    price:existingPrice,
    }) {
    const [title,setTitle] = useState(existingTitle || '');
    const [description,setDescription] = useState(existingDescription || '');
    const [price,setPrice] = useState(existingPrice || '');
    const [goToProducts,setGoToProducts] = useState(false);
    const router = useRouter();
    async function saveProduct(ev){
        ev.preventDefault();
        const data = {title,description,price};
        if (_id) {
            //update
            await axios.put('/api/products', {...data,_id})
        } else {
            //create
            await axios.post('/api/products', data)
            setGoToProducts(true);
        }

        setGoToProducts(true);

    }
    if (goToProducts) {
        router.push('/api/products');
    }
    return (
            <form onSubmit={saveProduct}>
            <span className="w-full">
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
            
    );
}