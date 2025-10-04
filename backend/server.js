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
app.use("/api/notes", notesRouter);
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});