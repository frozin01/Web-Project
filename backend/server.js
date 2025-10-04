const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./db");
connectDB();

const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const notesRouter = require("./routes/notes");
const authRouter = require("./routes/auth");
const weatherRouter = require("./routes/weather");
app.use("/api/notes", notesRouter);
app.use("/api/auth", authRouter);
app.use("/api/weather", weatherRouter);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});