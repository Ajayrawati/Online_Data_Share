import router from "../Routes/routes.js";
import express from "express";
import cors from "cors";
import path from "path";


import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); 
// Middleware
app.use(cors()); // Call cors() to enable CORS
app.use(express.json()); // Middleware to parse JSON requests

// Routes
app.use("/v1", router);

export default app;
