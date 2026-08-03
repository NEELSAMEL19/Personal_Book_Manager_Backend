import mongoose, { type Document, type Model, type Types } from "mongoose";

export interface IBook extends Document {
  title: string;
  author: string;
  tags: string[];
  status: "want to read" | "reading" | "completed";
  user: Types.ObjectId;
}

const bookSchema = new mongoose.Schema<IBook>(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    tags: { type: [String], default: [] },
    status: {
      type: String,
      enum: ["want to read", "reading", "completed"],
      default: "want to read",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

const Book: Model<IBook> = mongoose.model<IBook>("Book", bookSchema);
export default Book;
