// npm install mongoose uuid

const Customer = require('../models/customer_model');

// Function to save a new customer
async function create(customer) {
  try {
    // Create a new customer
    const newCustomer = new Customer(customer);

    // Save the customer to the database
    const savedCustomer = await newCustomer.save();
    return savedCustomer;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
}

// Function to get a customer by customer id
async function getOneByCustomerId(customerId) {
  try {
    const customer = await Customer.findOne({ customer_id: customerId });
    return customer;
  } catch (error) {
    console.error('Error getting customer by customer_id:', error);
    throw error;
  }
}

// Function to find all customers
async function findAll() {
  try {
    const customers = await Customer.find();
    return customers;
  } catch (error) {
    console.error('Error finding customers:', error);
    throw error;
  }
}

// Function to delete a customer by customer ID
async function deleteOneByCustomerId(customerId) {
  try {
    const deletedCustomer = await Customer.findOneAndDelete({ customer_id: customerId });
    if (!deletedCustomer) {
      throw new Error('Customer not found');
    }
    return deletedCustomer;
  } catch (error) {
    console.error('Error deleting customer:', error);
    throw error;
  }
}

// Function to update a customer by customer ID
async function updateOneByCustomerId(customerId, updateData) {
  try {
    const updatedCustomer = await Customer.findOneAndUpdate(
      { customer_id: customerId },
      updateData,
      { new: true, runValidators: true } // Return the updated document and run validators
    );
    if (!updatedCustomer) {
      throw new Error('Customer not found');
    }
    return updatedCustomer;
  } catch (error) {
    console.error('Error updating customer:', error);
    throw error;
  }
}

module.exports = { create, getOneByCustomerId, findAll, deleteOneByCustomerId, updateOneByCustomerId };
