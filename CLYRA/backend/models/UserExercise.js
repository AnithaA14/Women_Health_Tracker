const mongoose = require("mongoose");

const UserExerciseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    exercise: { type: String, required: true },
    repsCompleted: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("UserExercise", UserExerciseSchema);
