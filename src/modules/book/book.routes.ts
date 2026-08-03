import express from "express";
import {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
} from "./book.controller.js";
import { protect } from "../../common/middlewares/auth.middleware.js";

const router = express.Router();

router.post("/create", protect, createBook);
router.get("/get-books", protect, getBooks);
router.patch("/update/:id", protect, updateBook);
router.delete("/delete/:id", protect, deleteBook);

export default router;
