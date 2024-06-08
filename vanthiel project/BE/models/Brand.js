const { Schema, model } = require('mongoose');

const BrandSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const Brand = model('Brand', BrandSchema);

module.exports = Brand;

