const ShortUrl = require("../models/shortUrl");

exports.getUrls = async (req, res, next) => {
  const shortUrls = await ShortUrl.find().sort({ clicks: -1 }).limit(3);
  console.log(shortUrls);
  res.render("admin", { shortUrls: shortUrls });
};
