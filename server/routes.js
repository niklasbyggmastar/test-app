"use strict";
exports.__esModule = true;
var express = require("express");
var server_1 = require("./server");
var app = express.Router();
exports.routes = app;
app.get("/", function (req, res) {
    res.send(server_1.list);
});
app.use("/users", function (req, res) {
    res.send([]);
});
app.post("/users", function (req, res) {
    res.send({ body: req.body });
});
