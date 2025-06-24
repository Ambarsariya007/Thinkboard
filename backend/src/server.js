// server.js
import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import connectdb from './config/db.js';
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();

connectdb();

// ✅ CORS should come before all route handlers and middleware that respond
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port 5001!!');
});
