import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import app from "./app.js";

void connectDB();

const PORT = Number(process.env["PORT"]) || 3030;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
