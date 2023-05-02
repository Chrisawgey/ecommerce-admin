const { Schema } = require("mongoose");

const ProductSchema = new Schema({
    title: {tpe: String, required: true},
    description: String,
    price: {type: Number, required: true},

});

const 