const customerUsecase = require('../domain/usecases/customer_usecase');

// Handler to create a new customer
async function create(req, res) {
  try {
    const customerData = req.body;
    const createdCustomer = await customerUsecase.create(customerData);
    res.status(201).json({ message: "Customer created successfully", customerId: createdCustomer.customer_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}

// Handler to get list of customers
async function getList(req, res) {
  try {
    const customers = await customerUsecase.getList();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}

// Handler to get a customer by customer id
async function getOneByCustomerId(req, res) {
  try {
    const customerId = req.params.id;
    const customer = await customerUsecase.getOneByCustomerId(customerId);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}

// Handler to update a customer by customer id
async function updateOneByCustomerId(req, res) {
  try {
    const customerId = req.params.id;
    const updateData = req.body;

    const updatedCustomer = await customerUsecase.updateOneByCustomerId(customerId, updateData);
    if (!updatedCustomer) {
      return res.status(404).json({ message: 'Customer not found or failed to update' });
    }

    res.json({ message: 'Customer updated successfully', updatedCustomer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}

// Handler to delete a customer by customer id
async function deleteOneByCustomerId(req, res) {
  try {
    const customerId = req.params.id;

    const deletedCustomer = await customerUsecase.deleteOneByCustomerId(customerId);
    if (!deletedCustomer) {
      return res.status(404).json({ message: 'Customer not found or failed to delete' });
    }

    res.json({ message: 'Customer deleted successfully', deletedCustomer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}

module.exports = { create, getList, getOneByCustomerId, updateOneByCustomerId, deleteOneByCustomerId };
