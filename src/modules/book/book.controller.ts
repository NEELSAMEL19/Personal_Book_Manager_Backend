import type { Request, Response } from "express";
import asyncHandler from "../../common/utils/asyncHandler.js";
import AppError from "../../common/utils/AppError.js";
import {
  createBookSchema,
  getBooksSchema,
  updateBookSchema,
} from "./book.schema.js";
import {
  createBookService,
  getBooksService,
  updateBookService,
  deleteBookService,
} from "./book.service.js";

interface AuthRequest extends Request {
  user?: {
    _id: string;
  };
}

export const createBook = asyncHandler(async (req: AuthRequest, res: Response) => {
  const parsed = createBookSchema.safeParse(req.body);
  if (!parsed.success) throw new AppError(parsed.error.issues[0]?.message ?? "Invalid input", 400);

  const userId = req.user?._id ?? "";
  const book = await createBookService(userId, parsed.data);

  res.status(201).json({
    success: true,
    message: "Book created successfully",
    data: book,
  });
});

export const getBooks = asyncHandler(async (req: AuthRequest, res: Response) => {
  const parsed = getBooksSchema.safeParse(req.query);
  if (!parsed.success) throw new AppError(parsed.error.issues[0]?.message ?? "Invalid query", 400);

  const userId = req.user?._id ?? "";
  const books = await getBooksService(userId, parsed.data);

  res.status(200).json({
    success: true,
    message: "Books fetched successfully",
    data: books,
  });
});

export const updateBook = asyncHandler(async (req: AuthRequest, res: Response) => {
  const parsed = updateBookSchema.safeParse(req.body);
  if (!parsed.success) throw new AppError(parsed.error.issues[0]?.message ?? "Invalid input", 400);

  const userId = req.user?._id ?? "";
  const bookId = req.params["id"];
  if (!bookId || Array.isArray(bookId)) throw new AppError("Book id is required", 400);

  const updatedBook = await updateBookService(userId, bookId, parsed.data);
  if (!updatedBook) throw new AppError("Book not found", 404);

  res.status(200).json({
    success: true,
    message: "Book updated successfully",
    data: updatedBook,
  });
});

export const deleteBook = asyncHandler(async (req: AuthRequest, res: Response) => {
  const userId = req.user?._id ?? "";
  const bookId = req.params["id"];
  if (!bookId || Array.isArray(bookId)) throw new AppError("Book id is required", 400);

  const deletedBook = await deleteBookService(userId, bookId);
  if (!deletedBook) throw new AppError("Book not found", 404);

  res.status(200).json({
    success: true,
    message: "Book deleted successfully",
  });
});
