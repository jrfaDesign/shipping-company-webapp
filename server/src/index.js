import express from "express"; // framework to create the API using nodeJS
import cors from "cors"; // set up de rules of comunication between FE and BE
import mongoose from "mongoose"; //database managing system

import { userRouter } from "./routes/users.js";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

// add enviorment variables to add password

mongoose.connect(
  "mongodb+srv://jrfadesign:4Wo3FdRHeYlLwTZO@nutri.nwuhlyn.mongodb.net/nutri?retryWrites=true&w=majority"
);

app.listen(4000, "192.168.1.80", () => console.log("SERVER STARTED"));
