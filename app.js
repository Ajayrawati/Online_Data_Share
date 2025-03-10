import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import router from "./Routes/routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files correctly
app.use(express.static(path.join(__dirname, "public")));

// Serve `index.html` when visiting `/`
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Routes
app.use("/v1", router);

export default app;
