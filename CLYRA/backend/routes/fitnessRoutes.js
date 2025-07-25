const express = require("express");
const UserExercise = require("../models/UserExercise");

const router = express.Router();

// Save Exercise Data
router.post("/save", async (req, res) => {
    try {
        const { userId, exercise, repsCompleted } = req.body;
        const newExercise = new UserExercise({ userId, exercise, repsCompleted });
        await newExercise.save();
        res.status(201).json({ message: "Exercise Data Saved" });
    } catch (error) {
        console.error("Error saving exercise:", error);
        res.status(500).json({ error: "Server Error" });
    }
});

// Get User Exercise Data
router.get("/:userId", async (req, res) => {
    try {
        const userExercises = await UserExercise.find({ userId: req.params.userId });
        res.status(200).json(userExercises);
    } catch (error) {
        console.error("Error fetching exercise:", error);
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;
