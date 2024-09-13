const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item_id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: false,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
});

// Middleware to update the `updated_at` field before saving
itemSchema.pre('save', function (next) {
    this.updated_at = Date.now();
    next();
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;