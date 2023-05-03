import clientPromise from "@/lib/mongods";
import mongoose from "mongoose";

export default function handle(req, res) {
    const {method} = req;
    mongoose.Promise = clientPromise;
    if (method === 'POST'){
        res.json('post');
    }
}