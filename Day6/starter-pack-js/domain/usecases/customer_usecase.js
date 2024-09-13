// npm install mongoose uuid

const customerRepository = require('../repositories/customer_repository');
const { v4: uuidv4 } = require('uuid');

// Function to create a new customer
const create = async (customerData) => {
    try {
        const customerId = uuidv4();
        const customer = {
            customer_id: customerId,
            ...customerData
        };
        const createdCustomer = await customerRepository.create(customer);
        return createdCustomer;
    } catch (error) {
        throw new Error('Failed to create customer');
    }
};

// Function to get list of customers
const getList = async () => {
    try {
        const customers = await customerRepository.findAll();
        return customers;
    } catch (error) {
        throw new Error('Failed to get list of customers');
    }
}

// Function to get a customer by customer id
const getOneByCustomerId = async (customerId) => {
    try {
        const customer = await customerRepository.getOneByCustomerId(customerId);
        return customer;
    } catch (error) {
        throw new Error('Failed to get customer by customer_id');
    }
}

// Function to update a customer by customer id
const updateOneByCustomerId = async (customerId, updateData) => {
    try {
        const updatedCustomer = await customerRepository.updateOneByCustomerId(customerId, updateData);
        if (!updatedCustomer) {
            throw new Error('Customer not found or failed to update');
        }
        return updatedCustomer;
    } catch (error) {
        throw new Error('Failed to update customer');
    }
}

// Function to delete a customer by customer id
const deleteOneByCustomerId = async (customerId) => {
    try {
        const deletedCustomer = await customerRepository.deleteOneByCustomerId(customerId);
        if (!deletedCustomer) {
            throw new Error('Customer not found or failed to delete');
        }
        return deletedCustomer;
    } catch (error) {
        throw new Error('Failed to delete customer');
    }
}

module.exports = { create, getList, getOneByCustomerId, updateOneByCustomerId, deleteOneByCustomerId };
