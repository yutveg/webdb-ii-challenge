const express = require("express");

const carRouter = require("./api/carRouter");

const server = express();

server.use(express.json());
server.use("/api/cars", carRouter);

module.exports = server;
