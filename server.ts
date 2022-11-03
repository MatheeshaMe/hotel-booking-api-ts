import express, { Application, Request, Response, Router } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import hotelRouter from "./routes/hotel.routes";

dotenv.config();

const enviroment: string = process.env.enviroment!;
const portv: number = +process.env.PORT!;
const port: number = enviroment === "development" ? portv : 5000;
const DBURI: string = process.env.MONGO_URL!;

const app: Application = express();

// var __importDefault = (this && __importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// const express_1 = __importDefault(require("express"));
// const app = express_1.default();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.listen(port, () => {
  console.log(`app is running on ${port}`);
  mongoose.connect(DBURI, () => {
    console.log(`db connected 😀`);
  });
});

app.use("/api/v1/hotels", hotelRouter);
