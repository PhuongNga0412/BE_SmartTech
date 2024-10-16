const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");
const {
    authUserMiddleWare,
    authMiddleWare,
} = require("../middleware/authMiddleware");

router.post("/create", OrderController.createOrder);
router.get("/get-order/:id", OrderController.getOrderDetails);
router.get("/get-all-order", OrderController.getAllOrder);
router.delete("/cancel-order/:id", OrderController.cancelOrderDetails);
router.put("/status", OrderController.updateOrderStatus);

module.exports = router;
