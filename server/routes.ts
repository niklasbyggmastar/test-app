import * as express from "express";
import { list } from "./server";

const app = express.Router();
export { app as routes };



app.get("/", (req, res) => {
    res.send(list);
});

app.use("/users", (req, res) => {
    res.send([]);
});

app.post("/users", (req, res) => {
    res.send({body: req.body });
});