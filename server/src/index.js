import express from "express"; // framework to create the API using nodeJS
import cors from "cors"; // set up de rules of comunication between FE and BE
import mongoose from "mongoose"; //database managing system
import dotenv from "dotenv";

import bodyParser from "body-parser";

import { usersRouter } from "./routes/users.js";
import { ordersRouter } from "./routes/orders.js";

dotenv.config(); // Load environment variables from .env file
const app = express();
app.use(bodyParser.json({ limit: "1mb" }));

app.use(express.json());
app.use(cors());

//app.use("", usersRouter);
app.use("", ordersRouter);

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(4000, () => console.log("SERVER STARTED"));
