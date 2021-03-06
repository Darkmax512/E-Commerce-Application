const express = require("express");
const {
  createProduct,
  deleteProduct,
  updateProduct,
  getSingleProduct,
  getProducts,
  getCategoryProducts,
  createReview,
  deleteReview,
  searchProducts,
} = require("../controllers/products");

const auth = require("../middlewares/authentication");

const multerUploader = require("../middlewares/multer");
const rolesChecker = require("../middlewares/rolesChecker");
const router = express.Router();

router.route("/").get(getProducts).post(auth, multerUploader, createProduct);

router.route("/category/:id").get(getCategoryProducts);

router
  .route("/:id")
  .get(getSingleProduct)
  .put(auth, rolesChecker(["ADMIN"]), multerUploader, updateProduct)
  .delete(auth, rolesChecker(["ADMIN"]), deleteProduct);

router.route("/search/:keyword").get(searchProducts);

router
  .route("/reviews/:id")
  .patch(auth, createReview)
  .delete(auth, deleteReview);

module.exports = router;
