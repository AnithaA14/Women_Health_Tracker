import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// Check if the model exists to avoid redefining it
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
