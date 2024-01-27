const {
  getLawyers,
  createLawyer,
  getLawyer,
  getSector,
  updateLawyer,
  deleteLawyer,
} = require("../controllers/law-controller.js");
const express = require("express");
const authcontroller = require("../controllers/auth-controller");
const LawyerRouter = express.Router();

LawyerRouter.route("/").get(getLawyers).post(createLawyer);

LawyerRouter.route("/:id")
  .get(getLawyer)
  .get(getSector)
  .patch(updateLawyer)
  .delete(deleteLawyer);

module.exports = LawyerRouter;
