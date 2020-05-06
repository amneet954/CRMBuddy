const router = require("express").Router();
const salesforceRouter = require("./salesforce");

router.use("/cases", salesforceRouter);

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
