const ShortUrl = require("../models/shortUrl");

exports.getUrls = async (req, res, next) => {
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls: shortUrls });
};

exports.postUrl = async (req, res, next) => {
  await ShortUrl.create({ longUrl: req.body.longUrl });
  res.redirect("/");
};

exports.getUrl = async (req, res, next) => {
  const shortUrl = await ShortUrl.findOne({ shortUrl: req.params.shortUrl });
  if (shortUrl == null) {
    return res.sendStatus(404);
  }
  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.longUrl);
};
