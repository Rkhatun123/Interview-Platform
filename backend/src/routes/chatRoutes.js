const express = require("express");
const { getStreamToken } = require("../controllers/chatController");
const { protectRoute } = require("../middleware/protectRoute");

const router = express.Router();

router.get("/token", protectRoute, getStreamToken);

module.exports = router;