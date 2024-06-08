const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    sku: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: Number,
        required: true,
    },
    color: {
        type: Number,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: Number,
        required: true,
    },
});

const Product = model('products', ProductSchema);

module.exports = Product;

