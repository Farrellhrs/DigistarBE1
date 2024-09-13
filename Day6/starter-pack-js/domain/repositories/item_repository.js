const Item = require('../models/item_model');

// Function to save a new item
async function create(item) {
  try {
    const newItem = new Item(item);
    const savedItem = await newItem.save();
    return savedItem;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
}

// Function to get an item by item ID
async function getOneByItemId(itemId) {
  try {
    const item = await Item.findOne({ item_id: itemId });
    return item;
  } catch (error) {
    console.error('Error getting item by item_id:', error);
    throw error;
  }
}

// Function to find all items
async function findAll() {
  try {
    const items = await Item.find();
    return items;
  } catch (error) {
    console.error('Error finding items:', error);
    throw error;
  }
}

// Function to delete an item by item ID
async function deleteOneByItemId(itemId) {
  try {
    const deletedItem = await Item.findOneAndDelete({ item_id: itemId });
    if (!deletedItem) {
      throw new Error('Item not found');
    }
    return deletedItem;
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
}

// Function to update an item by item ID
async function updateOneByItemId(itemId, updateData) {
  try {
    const updatedItem = await Item.findOneAndUpdate(
      { item_id: itemId },
      updateData,
      { new: true, runValidators: true }
    );
    if (!updatedItem) {
      throw new Error('Item not found');
    }
    return updatedItem;
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
}

module.exports = { create, getOneByItemId, findAll, deleteOneByItemId, updateOneByItemId };
