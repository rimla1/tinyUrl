const express = require("express");
const tinyurlController = require("../controllers/tinyurl");

const router = express.Router();

router.get("/", tinyurlController.getUrls);

router.post("/shortUrls", tinyurlController.postUrl);

router.get("/:shortUrl", tinyurlController.getUrl);

module.exports = router;
