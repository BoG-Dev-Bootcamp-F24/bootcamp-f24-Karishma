// Use import syntax instead of require
import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors()); // Enable CORS for frontend-backend communication

mongoose.connect("mongodb+srv://karishmakamalahasan:Brdxb@220205@marta.dyoha.mongodb.net/?retryWrites=true&w=majority");

const trainSchema = new mongoose.Schema({
  TRAIN_ID: String,
  DESTINATION: String,
  LINE: String,
  DELAY: String,
});

const stationSchema = new mongoose.Schema({
  NAME: String,
  LINE: String,
});

const Train = mongoose.model("Train", trainSchema);
const Station = mongoose.model("Station", stationSchema);

app.get("/api/trains", async (req, res) => {
  const trains = await Train.find();
  res.json(trains);
});

app.get("/api/stations", async (req, res) => {
  const stations = await Station.find();
  res.json(stations);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));