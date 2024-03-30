const { Schema, model, models, default: mongoose } = require("mongoose");

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: mongoose.Types.ObjectId, ref: 'Category'
    },
    price: {
        type: Number,
        required: true
    },
    images: [{
        type: String
    }],
    properties: {
        type: Object
    }
});

export const Product = models.Product || model('Product', productSchema);
