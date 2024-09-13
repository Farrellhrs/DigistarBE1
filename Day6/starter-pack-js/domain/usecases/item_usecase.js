const itemRepository = require('../repositories/item_repository');
const { v4: uuidv4 } = require('uuid');

// Function to create a new item
const create = async (itemData) => {
    try {
        const itemId = uuidv4(); // Generate a unique ID for the item
        const item = {
            item_id: itemId,
            ...itemData
        };
        const createdItem = await itemRepository.create(item);
        return createdItem;
    } catch (error) {
        throw new Error('Failed to create item');
    }
};

// Function to get list of items
const getList = async () => {
    try {
        const items = await itemRepository.findAll();
        return items;
    } catch (error) {
        throw new Error('Failed to get list of items');
    }
}

// Function to get an item by item ID
const getOneByItemId = async (itemId) => {
    try {
        const item = await itemRepository.getOneByItemId(itemId);
        return item;
    } catch (error) {
        throw new Error('Failed to get item by item_id');
    }
}

// Function to update an item by item ID
const updateOneByItemId = async (itemId, updateData) => {
    try {
        const updatedItem = await itemRepository.updateOneByItemId(itemId, updateData);
        if (!updatedItem) {
            throw new Error('Item not found or failed to update');
        }
        return updatedItem;
    } catch (error) {
        throw new Error('Failed to update item');
    }
}

// Function to delete an item by item ID
const deleteOneByItemId = async (itemId) => {
    try {
        const deletedItem = await itemRepository.deleteOneByItemId(itemId);
        if (!deletedItem) {
            throw new Error('Item not found or failed to delete');
        }
        return deletedItem;
    } catch (error) {
        throw new Error('Failed to delete item');
    }
}

module.exports = { create, getList, getOneByItemId, updateOneByItemId, deleteOneByItemId };
