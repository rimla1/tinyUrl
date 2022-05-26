const ShortUrl = require("../models/shortUrl");

exports.getUrl = async (req, res, next) => {
  const shortUrl = await ShortUrl.findOne().sort({ clicks: -1 }).limit(1);
  console.log(shortUrl);
  res.render("admin", { shortUrl: shortUrl });
};
