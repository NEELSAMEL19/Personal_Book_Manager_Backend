import Book from "../../models/Book.js";
import type { CreateBookInput, GetBooksFilters, UpdateBookInput } from "./book.schema.js";

export const createBookService = async (userId: string, bookData: CreateBookInput) => {
  return Book.create({ ...bookData, user: userId });
};

export const getBooksService = async (userId: string, filters: GetBooksFilters) => {
  const query: Record<string, unknown> = { user: userId };
  const { status, tag } = filters;

  if (status) query["status"] = status;
  if (tag) query["tags"] = tag;

  return Book.find(query).sort({ createdAt: -1 });
};

export const updateBookService = async (userId: string, bookId: string, updates: UpdateBookInput) => {
  return Book.findOneAndUpdate(
    { _id: bookId, user: userId },
    updates,
    { new: true, runValidators: true },
  );
};

export const deleteBookService = async (userId: string, bookId: string) => {
  return Book.findOneAndDelete({ _id: bookId, user: userId });
};
