module.exports = (err, req, res, next) => {
  console.error("Error Handler:", err);
  res.status(500).json({ error: "Internal server error" });
};
