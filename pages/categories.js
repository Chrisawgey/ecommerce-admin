import Layout from "@/components/layout";

export default function Categories() {
    function saveCategories(){}
    return(
        <Layout>
            <h1>Categories</h1>
            <label>New category name</label>
            <form onSubmit={saveCategories} className="flex gap-1">
            <input className="mb-0" type="text" 
            placeholder={'Category Name'}/>
            <button type="submit" className="btn-primary">Save</button>
            </form>
        </Layout>
    )
}