const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    title: {tpe: String, required: true},
    description: String,
    price: {type: Number, required: true},

});

export const Product = model('product', ProductSchema);