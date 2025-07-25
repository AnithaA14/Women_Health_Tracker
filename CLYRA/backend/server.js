const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const fitnessRoutes = require("./routes/fitnessRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

connectDB();
app.use("/api/auth", authRoutes);
app.use("/api/fitness", fitnessRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
