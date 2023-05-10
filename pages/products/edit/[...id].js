import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

export default function EditProductPage() {
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
    if (!id) {
        return
    }
    axios.get('/api/products?id='+id).then(repsone => {
    
        });
    }, [id]);
    return (
        <Layout>
            edit product from here
        </Layout>
    );
}