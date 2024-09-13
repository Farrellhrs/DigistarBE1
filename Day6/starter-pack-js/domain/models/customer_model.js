const mongoose = require('mongoose');

// Schema for Address
const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    postal_code: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    }
});

// Schema for Customer
const customerSchema = new mongoose.Schema({
    customer_id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: false,
    },
    address: {
        type: addressSchema,
        required: true, // Address is required for every customer
    }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
