import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
import userRoute from "./routes/user.route.js";

dotenv.config();
connectDb();

const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello there");
});

//
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
