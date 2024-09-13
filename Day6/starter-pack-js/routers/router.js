const express = require("express");
const userHandler = require('../handlers/user_handler');
const roleHandler = require('../handlers/role_handler');
const orderHandler = require('../handlers/order_handler');
const customerHandler = require('../handlers/customer_handler');
const itemHandler = require('../handlers/item_handler');
const jwtAuth = require('../middlewares/jwt');
const { authenticatePassportJwt } = require('../middlewares/passport-jwt');

// Create a router
const router = express.Router();

// User routes
router.post("/user/login", userHandler.login);
router.post("/user/register", userHandler.register);
router.get("/user", userHandler.getList);
router.get("/user/:id", userHandler.getOneByUserId);
router.put("/user/:id", userHandler.updateOne);
router.delete("/user/:id", userHandler.deleteOne )

// Role routes
router.post("/role", roleHandler.create);
router.get("/role", roleHandler.getList);
router.delete("/role/:id", roleHandler.deleteByRoleId);
router.put("/role/:id", roleHandler.updateByRoleId)

// Order routes
router.post("/order", jwtAuth, orderHandler.create);
router.get("/order", authenticatePassportJwt(), orderHandler.getList);
router.get("/order/:id", authenticatePassportJwt(), orderHandler.getOneByOrderId);
router.delete("/order/:id", authenticatePassportJwt(), orderHandler.deleteOneByOrderId);
router.put("/order/:id", authenticatePassportJwt(), orderHandler.updateOneByOrderId);
router.put("/order/:id", authenticatePassportJwt(), orderHandler.updateOneByOrderId);

// Routes for customer
router.post("/customer", authenticatePassportJwt(), customerHandler.create);
router.get("/customer", authenticatePassportJwt(), customerHandler.getList);
router.get("/customer/:id", authenticatePassportJwt(), customerHandler.getOneByCustomerId);
router.delete("/customer/:id", authenticatePassportJwt(), customerHandler.deleteOneByCustomerId);
router.put("/customer/:id", authenticatePassportJwt(), customerHandler.updateOneByCustomerId);

// Routes for Item
router.post('/item', authenticatePassportJwt(), itemHandler.create);
router.get('/item', authenticatePassportJwt(), itemHandler.getList);
router.get('/item/:id', authenticatePassportJwt(), itemHandler.getOneByItemId);
router.put('/item/:id', authenticatePassportJwt(), itemHandler.updateOneByItemId);
router.delete('/item/:id', authenticatePassportJwt(), itemHandler.deleteOneByItemId);

module.exports = router;