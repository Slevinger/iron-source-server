module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || err.status || 500;
  try {
    console.error("An error ocurred", err);

    res.status(statusCode).json({
      message: err.message || err.toString(),
      more_info: err.toString(),
      status: statusCode,
    });
  } catch (error) {
    console.error("An error occurred in errorHandler", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
