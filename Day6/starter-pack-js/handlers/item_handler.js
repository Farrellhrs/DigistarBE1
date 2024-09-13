const itemUsecase = require('../domain/usecases/item_usecase');

// Handler to create a new item
async function create(req, res) {
  try {
    const itemData = req.body;
    itemData["created_by"] = req.user.userId;  // Assuming you are capturing who created the item
    const createdItem = await itemUsecase.create(itemData);
    res.status(201).json({ message: "Item created successfully", itemId: createdItem.item_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}

// Handler to get list of items
async function getList(req, res) {
  try {
    const items = await itemUsecase.getList();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}

// Handler to get an item by item ID
async function getOneByItemId(req, res) {
  try {
    const itemId = req.params.id;
    const item = await itemUsecase.getOneByItemId(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}

// Handler to update an item by item ID
async function updateOneByItemId(req, res) {
  try {
    const itemId = req.params.id;
    const updateData = req.body;

    const updatedItem = await itemUsecase.updateOneByItemId(itemId, updateData);
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found or failed to update' });
    }

    res.json({ message: 'Item updated successfully', updatedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}

// Handler to delete an item by item ID
async function deleteOneByItemId(req, res) {
  try {
    const itemId = req.params.id;

    const deletedItem = await itemUsecase.deleteOneByItemId(itemId);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found or failed to delete' });
    }

    res.json({ message: 'Item deleted successfully', deletedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}

module.exports = { create, getList, getOneByItemId, updateOneByItemId, deleteOneByItemId };
