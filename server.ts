import express, { Request, Response } from "express";
import * as dotenv from "dotenv";

import mongoose from "mongoose";

dotenv.config();

const enviroment: string = process.env.enviroment!;
const portv: number = +process.env.PORT!;
const port:number = enviroment === "development" ? portv : 5000;
const DBURI:string = process.env.MONGO_URL!;

const app = express();

// var __importDefault = (this && __importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// const express_1 = __importDefault(require("express"));
// const app = express_1.default();

app.use(express.json());

app.listen(port, () => {
  console.log(`app is running on ${port}`);
  mongoose.connect(DBURI, () => {
    console.log(`db connected 😀`);
  });
});
