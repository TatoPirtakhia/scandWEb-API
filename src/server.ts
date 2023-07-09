import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./database/mongo";
import swaggerMiddleware from "./middleware/swagger-middleware";
import Route from "./routes/routes";

const server = express();
dotenv.config();

connect();

server.use(bodyParser.json());
server.use(cors());
server.use("/api", Route);

server.use("/", ...swaggerMiddleware);

server.listen(4444, () =>
  console.log("Server is listening at http://localhost:4444")
);
