import mongoose from "mongoose";

export function mongooseConnect() {
    if (mongoose.connections.readyState === 1) {
        return mongoose.connection.asPromise();
    } else {
        const uri = process.env.MONGODS_URI;
        return mongoose.connect(uri);
    }
}