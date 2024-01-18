import { getLawyers, createLawyer, getLawyer, getSector, updateLawyer, deleteLawyer } from "../controllers/law-controller.js";
import express from 'express';

const LawyerRouter = express.Router();

LawyerRouter
     .route('/')
     .get(getLawyers)
     .post(createLawyer);

LawyerRouter
     .route('/:id')
     .get(getLawyer)
     .get(getSector)
     .patch(updateLawyer)
     .delete(deleteLawyer);

export default LawyerRouter;