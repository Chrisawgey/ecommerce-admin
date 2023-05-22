import Layout from "@/components/layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { withSwal } from "react-sweetalert2";

function Categories({swal}) {
    const [editedCategory, setEditedCategory] = useState(null);
    const [ name,setName ] = useState('');
    const [parentCategory,setParentCategory] = useState('');
    const [ categories,setCategories ] = useState([]);
    const [properties,setProperties] = useState([]);

    // Fetch Categories on component mount
    useEffect(() => {
        fetchCategories();
    }, []);

    // Function to fetch categories from the server
    function fetchCategories() {
        axios.get('/api/categories').then(result => {
            setCategories(result.data);
        });
    }

    // Function to save the category
    async function saveCategory(ev){
        ev.preventDefault();
        const data = {name,parentCategory,properties}
        if (editedCategory) {
            data._id = editedCategory._id;
            await axios.put('/api/categories', data);
            setEditedCategory(null);
        } else {
            await axios.post('/api/categories', data);
        }
        setName('');
        fetchCategories();
    }

    // Function to edit category 
    function editCategory(category){
        setEditedCategory(category);
        setName(category.name);
        setParentCategory(category.parent?._id);

    }

    //function to deleter a category 
    function deleteCategory(category){
        swal.fire({
            title: 'Danger Zone!',
            text: `Do you want to delete ${category.name}?`,
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Yes, Delete!',
            confirmButtonColor: '#d55',
            reverseButtons: true, 
        }).then(async result => {
            if (result.isConfirmed) {
                const {_id} = category;
                await axios.delete('/api/categories?_id='+_id);
                fetchCategories();
            }
        });
    }

    //function to add a new prpoerty 
    function addProperty() {
        setProperties(prev => {
            return [... prev, {name:'',values:''}]
        });
    }

    //function to handle a property name change
    function handlePropertyNameChange(index,property,newName){
        setProperties(prev => {
            const properties = [...prev];
            properties[index].name = newName;
            return properties;
        });
    }
    //function to hnadle a value change
    function handlePropertyValuesChange(index,property,newValues){
        setProperties(prev => {
            const properties = [...prev];
            properties[index].values = newValues;
            return properties;
        });
    }
    //function to remove property
    function removeProperty (indexToRemove) {
        setProperties(prev => {
            return [...prev].filter((p,pIndex) => {
                return pIndex !== indexToRemove;
            });
        });
    }

    return(
        <Layout>
            <h1>Categories</h1>
            <label>
            {editedCategory 
             ? `Edit category ${editedCategory.name}` 
             : 'Create new category'}
             </label>
            <form onSubmit={saveCategory}>
            <div className="flex gap-1">
            <input 
            type="text" 
            placeholder={'Category Name'}
            onChange={ev => setName(ev.target.value)}
            value={name}/>
            <select 
            onChange={ev => setParentCategory(ev.target.value)}
            value={parentCategory}>
                <option value="">No Parent Category</option>
                {categories.length > 0 && categories.map(category => (
                        <option value={category._id}>{category.name}</option>
                    ))}
            </select>
            </div>
            <div className="mb-2">
              <label className="block">Properties</label>

              <button 
              onClick={addProperty}
              type="button" 
              className="btn-default text-sm mb-2">
              Add new property
              </button>
              {properties.length > 0 && properties.map((property,index) => (
                <div className="flex gap-1 mb-2">
                <input type="text" 
                       value={property.name}
                       className="mb-0" 
                       onChange={ev => handlePropertyNameChange(
                        index,property,ev.target.value
                        )}
                       placeholder="property name (example: color)"/>
                <input type="text" 
                        onChange={ev => handlePropertyValuesChange(
                            index,property,ev.target.value
                            )}
                        className="mb-0"
                       value={property.values}
                       placeholder="values, comma seperated"/>
                       <button 
                       onClick={() => removeProperty(index)}
                       type="button"
                       className="btn-default">
                       Remove
                       </button>
                </div>
              ))}
            </div>
            <div className="flex gap-1">
            {editCategory && (
                <button 
                type="button"
                onClick={() => {
                    setEditedCategory(null);
                    setName('');
                    setParentCategory('');
                    }}
                className="btn-default">
                Cancel
                </button>
            )}
            <button type="submit" className="btn-primary">Save</button>
            </div>
            </form>
            {!editedCategory && (
                <table className="basic mt-4">
                <thead>
                    <tr>
                        <td>Category Name</td>
                        <td>Parent Category</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {categories.length > 0 && categories.map(category => (
                        <tr>
                            <td>{category.name}</td>
                            <td>{category?.parent?.name}</td>
                            <td>
                                <button 
                                onClick={() => editCategory(category)}
                                className="btn-primary mr-1">
                                Edit
                                </button>
                                <button 
                                onClick={() => deleteCategory(category)}
                                className="btn-primary">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            )}
        </Layout>
    );
}
// JSX for rendering the component 
export default withSwal (({swal}, ref) => (
    <Categories swal={swal}/>
));