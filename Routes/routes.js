import { Router } from "express";
import Data from "../Model/model.js";  // Ensure this model exists and is correctly defined.
import path from "path";
const router = Router();

// POST route to create a new entry
router.post("/", async (req, res) => {
    try {
        const { id, data } = req.body;

        const newData = await Data.create({
            urlId: id,
            savedData: data
        });

        res.status(201).json({ message: "Data saved successfully", newData });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});
router.get("/",()=>{
    res.sendFile(__dirname + '../public/index.html');
})

// GET route to retrieve data by `data` parameter
router.get("/:data", async (req, res) => {

    
    try {
        const savedData = await Data.findOne({ urlId: req.params.data });

        if (!savedData) {
            return res.status(404).json({ message: "Data not found" });
        }

        
        // Render EJS template with saved data
        res.render("index", { savedData: savedData.savedData });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

export default router;
