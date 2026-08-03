import { z } from "zod";

export const createBookSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  author: z.string().trim().min(1, "Author is required"),
  tags: z.array(z.string().trim()).optional(),
  status: z.enum(["want to read", "reading", "completed"]).optional(),
});

export const getBooksSchema = z.object({
  status: z.enum(["want to read", "reading", "completed"]).optional(),
  tag: z.string().trim().optional(),
});

export const updateBookSchema = z.object({
  title: z.string().trim().min(1, "Title is required").optional(),
  author: z.string().trim().min(1, "Author is required").optional(),
  tags: z.array(z.string().trim()).optional(),
  status: z.enum(["want to read", "reading", "completed"]).optional(),
}).refine((data) => Object.keys(data).length > 0, {
  message: "At least one field must be provided to update",
});

export type CreateBookInput = z.infer<typeof createBookSchema>;
export type GetBooksFilters = z.infer<typeof getBooksSchema>;
export type UpdateBookInput = z.infer<typeof updateBookSchema>;
